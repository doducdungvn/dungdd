// js/reportCalculator.js
// Chứa logic tính toán và tạo HTML cho các báo cáo.

import { 
    excelData1, 
    excelData2, 
    state, 
    resetDetailedState, 
    dateRangeText 
} from './state.js';
import { 
    formatNumberHiddenK, 
    formatCommissionCellHiddenK, 
    docso, 
    agentMatchesFilter 
} from './utils.js';
import { DOM } from './dom.js';

/**
 * Xử lý dữ liệu thô từ Excel thành dữ liệu tổng hợp.
 * @param {Array|null} regionFilterRules Quy tắc lọc vùng
 * @param {object|null} amountFilters {min, max} quy tắc lọc tiền
 * @returns {object} { groupedData, finalGrandTotals, regionGrandTotals }
 */
export function processSummaryData(regionFilterRules, amountFilters = null) {
    const individualAgentData = new Map();
    const initializeAgent = (code) => {
        if (!individualAgentData.has(code)) {
            individualAgentData.set(code, { totalRevenue: 0, totalCommission: 0, lotoDB: 0, lotoCap: 0, c2_27: 0, c3_23: 0, xskt: 0, thuong: 0 });
        }
    };
    
    excelData1.forEach(row => {
        const agentCode = String(row.__EMPTY || '').trim();
        if (!agentCode || !/\d/.test(agentCode)) return;
        initializeAgent(agentCode);
        const data = individualAgentData.get(agentCode);
        const loto_db_rev = parseFloat(row.__EMPTY_2) || 0;
        const lo_cap_rev = parseFloat(row.__EMPTY_6) || 0;
        const c2_27_rev = parseFloat(row.__EMPTY_8) || 0;
        const c3_23_rev = parseFloat(row.__EMPTY_10) || 0;
        data.lotoDB += loto_db_rev;
        data.lotoCap += lo_cap_rev;
        data.c2_27 += c2_27_rev;
        data.c3_23 += c3_23_rev;
        data.thuong += parseFloat(row.__EMPTY_14) || 0;
        data.totalRevenue += loto_db_rev + lo_cap_rev + c2_27_rev + c3_23_rev;
        data.totalCommission += (loto_db_rev * 0.08) + (lo_cap_rev * 0.10) + (c2_27_rev * 0.10) + (c3_23_rev * 0.10);
    });
    
    excelData2.forEach(row => {
        const agentCode = String(row.__EMPTY || row.__EMPTY_1 || '').trim();
        if (!agentCode || !/\d/.test(agentCode)) return;
        initializeAgent(agentCode);
        const data = individualAgentData.get(agentCode);
        const xsktRevenue = (parseFloat(row.__EMPTY_7) || 0) * 1000;
        data.xskt += xsktRevenue;
        data.totalRevenue += xsktRevenue;
        data.totalCommission += xsktRevenue * 0.10;
    });

    // Xóa các đại lý không có dữ liệu
    const keysToDelete = [];
    individualAgentData.forEach((data, key) => {
        if (data.lotoDB === 0 && data.lotoCap === 0 && data.c3_23 === 0 && data.c2_27 === 0 && data.xskt === 0 && data.thuong === 0) {
            keysToDelete.push(key);
        }
    });
    keysToDelete.forEach(key => individualAgentData.delete(key));

    // Lọc dữ liệu (Bước 1: Lọc theo VÙNG)
    const filteredByRegionData = new Map();
    individualAgentData.forEach((data, agentCode) => {
        if (agentMatchesFilter(agentCode, regionFilterRules)) {
            filteredByRegionData.set(agentCode, data);
        }
    });

    // === TÍNH TỔNG CỦA KHU VỰC (TRƯỚC KHI LỌC TIỀN) ===
    const regionGrandTotals = { lotoDB: 0, lotoCap: 0, c3_23: 0, c2_27: 0, xskt: 0, thuong: 0, finalAmount: 0, totalRevenue: 0 };
    filteredByRegionData.forEach(data => {
        regionGrandTotals.lotoDB += data.lotoDB;
        regionGrandTotals.lotoCap += data.lotoCap;
        regionGrandTotals.c3_23 += data.c3_23;
        regionGrandTotals.c2_27 += data.c2_27;
        regionGrandTotals.xskt += data.xskt;
        regionGrandTotals.thuong += data.thuong;
        regionGrandTotals.totalRevenue += data.totalRevenue;
        regionGrandTotals.finalAmount += data.totalRevenue - data.totalCommission - data.thuong;
    });
    // === KẾT THÚC TÍNH TỔNG KHU VỰC ===

    // Lọc dữ liệu (Bước 2: Lọc theo SỐ TIỀN)
    const filteredAgentData = new Map(); // Đây là map cuối cùng
    if (amountFilters && (amountFilters.min !== null || amountFilters.max !== null)) {
        const min = amountFilters.min !== null ? amountFilters.min : -Infinity;
        const max = amountFilters.max !== null ? amountFilters.max : Infinity;

        filteredByRegionData.forEach((data, agentCode) => {
            // === Lọc theo Doanh số (totalRevenue) ===
            const totalRevenue = data.totalRevenue;
            if (totalRevenue >= min && totalRevenue <= max) {
                filteredAgentData.set(agentCode, data);
            }
        });
    } else {
        // Không có bộ lọc tiền, dùng kết quả lọc vùng
        filteredByRegionData.forEach((data, agentCode) => {
            filteredAgentData.set(agentCode, data);
        });
    }

    const getAgentNumberString = (code) => String(code).match(/\d+$/)?.[0] || code;
    const getAgentParts = (code) => {
        const numStr = getAgentNumberString(code);
        const prefix = String(code).replace(numStr, '');
        return { num: parseInt(numStr, 10), prefix };
    };
    
    // Sắp xếp (trên dữ liệu đã lọc cuối cùng)
    const sortedKeys = [...filteredAgentData.keys()].sort((a, b) => {
        const partsA = getAgentParts(a);
        const partsB = getAgentParts(b);
        if (partsA.num !== partsB.num) return partsA.num - partsB.num;
        return partsA.prefix.localeCompare(partsB.prefix);
    });
    
    // Nhóm dữ liệu
    const groupedData = new Map();
    sortedKeys.forEach(agentCode => {
        const numericMatch = String(agentCode).match(/\d+$/);
        const groupKey = numericMatch ? parseInt(numericMatch[0], 10) : agentCode;
        if (!groupedData.has(groupKey)) {
            groupedData.set(groupKey, { agents: [], groupTotal: 0, groupTotalRevenue: 0, groupTotalThuong: 0, groupLotoDB: 0, groupLotoCap: 0, groupC3_23: 0, groupC2_27: 0, groupXSKT: 0 });
        }
        const group = groupedData.get(groupKey);
        const agentDetails = filteredAgentData.get(agentCode);
        const finalAmount = agentDetails.totalRevenue - agentDetails.totalCommission - agentDetails.thuong;
        group.agents.push({ code: agentCode, data: agentDetails });
        group.groupTotal += finalAmount;
        group.groupTotalRevenue += agentDetails.totalRevenue;
        group.groupTotalThuong += agentDetails.thuong;
        group.groupLotoDB += agentDetails.lotoDB;
        group.groupLotoCap += agentDetails.lotoCap;
        group.groupC3_23 += agentDetails.c3_23;
        group.groupC2_27 += agentDetails.c2_27;
        group.groupXSKT += agentDetails.xskt;
    });
    
    // Tính tổng cuối cùng (trên dữ liệu đã lọc cuối cùng)
    const finalGrandTotals = { lotoDB: 0, lotoCap: 0, c3_23: 0, c2_27: 0, xskt: 0, thuong: 0, finalAmount: 0, totalRevenue: 0 };
    filteredAgentData.forEach(data => {
        finalGrandTotals.lotoDB += data.lotoDB;
        finalGrandTotals.lotoCap += data.lotoCap;
        finalGrandTotals.c3_23 += data.c3_23;
        finalGrandTotals.c2_27 += data.c2_27;
        finalGrandTotals.xskt += data.xskt;
        finalGrandTotals.thuong += data.thuong;
        finalGrandTotals.totalRevenue += data.totalRevenue;
        finalGrandTotals.finalAmount += data.totalRevenue - data.totalCommission - data.thuong;
    });
    
    // Trả về cả hai loại tổng
    return { groupedData, finalGrandTotals, regionGrandTotals };
}

/**
 * Tạo HTML cho bảng tổng hợp.
 * @param {object} summaryData Dữ liệu từ processSummaryData (chứa groupedData và finalGrandTotals)
 * @returns {string} Chuỗi HTML của bảng
 */
export function renderSummaryTable({ groupedData, finalGrandTotals }) { // Chỉ dùng finalGrandTotals cho footer
    let body = '';
    let stt = 1;
    const sortedGroupedData = [...groupedData.entries()].sort((a, b) => parseInt(a[0], 10) - parseInt(b[0], 10));
    
    for (const [groupKey, group] of sortedGroupedData) {
        group.agents.forEach((agent, index) => {
            const agentData = agent.data;
            const finalAmount = agentData.totalRevenue - agentData.totalCommission - agentData.thuong;
            const isFirstInGroup = index === 0;
            const sttCell = isFirstInGroup ? `<td>${stt}</td>` : '<td></td>';
            
            let lotoDBCellContent = formatNumberHiddenK(agentData.lotoDB);
            let lotoCapCellContent = formatNumberHiddenK(agentData.lotoCap);
            let c3_23CellContent = formatNumberHiddenK(agentData.c3_23);
            let c2_27CellContent = formatNumberHiddenK(agentData.c2_27);
            let xsktCellContent = formatNumberHiddenK(agentData.xskt);
            let dsoCellContent = formatNumberHiddenK(agentData.totalRevenue);
            let thuongCellContent = formatNumberHiddenK(agentData.thuong);
            let finalAmountCellContent = finalAmount < 0 ? `<span class="negative-value">${formatNumberHiddenK(finalAmount)}</span>` : formatNumberHiddenK(finalAmount);
            
            if (index === group.agents.length - 1 && group.agents.length > 1) {
                const groupTotalStyle = `<br><strong style="color: var(--primary-color); font-size: 0.9em;">`;
                lotoDBCellContent += `${groupTotalStyle}(${formatNumberHiddenK(group.groupLotoDB)})</strong>`;
                lotoCapCellContent += `${groupTotalStyle}(${formatNumberHiddenK(group.groupLotoCap)})</strong>`;
                c3_23CellContent += `${groupTotalStyle}(${formatNumberHiddenK(group.groupC3_23)})</strong>`;
                c2_27CellContent += `${groupTotalStyle}(${formatNumberHiddenK(group.groupC2_27)})</strong>`;
                xsktCellContent += `${groupTotalStyle}(${formatNumberHiddenK(group.groupXSKT)})</strong>`;
                dsoCellContent += `${groupTotalStyle}(${formatNumberHiddenK(group.groupTotalRevenue)})</strong>`;
                thuongCellContent += `${groupTotalStyle}(${formatNumberHiddenK(group.groupTotalThuong)})</strong>`;
                finalAmountCellContent += `${groupTotalStyle}(${formatNumberHiddenK(group.groupTotal)})</strong>`;
            }
            
            body += `<tr ${isFirstInGroup ? 'class="group-start-row"' : ''}>${sttCell}<td>${agent.code}</td><td>${lotoDBCellContent}</td><td>${lotoCapCellContent}</td><td>${c3_23CellContent}</td><td>${c2_27CellContent}</td><td>${xsktCellContent}</td><td>${dsoCellContent}</td><td>${thuongCellContent}</td><td>${finalAmountCellContent}</td></tr>`;
        });
        stt++;
    }
    
    const grandFinalAmountClass = finalGrandTotals.finalAmount >= 0 ? 'final-amount-positive' : 'final-amount-negative';
    const footer = `<tr><td colspan="2">TỔNG CỘNG</td><td>${formatNumberHiddenK(finalGrandTotals.lotoDB)}</td><td>${formatNumberHiddenK(finalGrandTotals.lotoCap)}</td><td>${formatNumberHiddenK(finalGrandTotals.c3_23)}</td><td>${formatNumberHiddenK(finalGrandTotals.c2_27)}</td><td>${formatNumberHiddenK(finalGrandTotals.xskt)}</td><td>${formatNumberHiddenK(finalGrandTotals.totalRevenue)}</td><td>${formatNumberHiddenK(finalGrandTotals.thuong)}</td><td class="${grandFinalAmountClass}">${formatNumberHiddenK(finalGrandTotals.finalAmount)}</td></tr>`;
    
    return `<table border="1"><thead><tr><th style="width: 8%;">STT</th><th style="width: 12%;">ĐL</th><th>LTô</th><th>LCặp</th><th>3/23</th><th>2/27</th><th>XSKT</th><th>Dsố</th><th>Thưởng</th><th>Tiền nộp</th></tr></thead><tbody>${body}</tbody><tfoot>${footer}</tfoot></table>`;
}

/**
 * Xử lý dữ liệu cho báo cáo chi tiết của một số sổ.
 * @param {string} soSo Số sổ cần lọc
 * @returns {object|null} Dữ liệu đã xử lý hoặc null
 */
export function processDetailedReportData(soSo) {
    const filterBySoSo = (row) => {
        const agentCode = String(row.__EMPTY || row.__EMPTY_1 || '').trim();
        if (!agentCode) return false;
        const numericPartMatch = agentCode.match(/\d+$/);
        if (!numericPartMatch) return false;
        return parseInt(numericPartMatch[0], 10) === parseInt(soSo, 10);
    };
    
    const filtered1 = excelData1.filter(filterBySoSo);
    const filtered2 = excelData2.filter(filterBySoSo);
    
    if (filtered1.length === 0 && filtered2.length === 0) return null;
    
    resetDetailedState(soSo); // Cập nhật state
    
    const totalsFromExcel = { lotoDB: 0, loCap: 0, c2_27: 0, c3_23: 0, thuong: 0, xskt: 0 };
    
    filtered1.forEach(row => {
        state.accountCodes.add(String(row.__EMPTY).trim());
        totalsFromExcel.lotoDB += parseFloat(row.__EMPTY_2) || 0;
        totalsFromExcel.loCap += parseFloat(row.__EMPTY_6) || 0;
        totalsFromExcel.c2_27 += parseFloat(row.__EMPTY_8) || 0;
        totalsFromExcel.c3_23 += parseFloat(row.__EMPTY_10) || 0;
        totalsFromExcel.thuong += parseFloat(row.__EMPTY_14) || 0;
    });
    
    filtered2.forEach(row => {
        state.accountCodes.add(String(row.__EMPTY || row.__EMPTY_1).trim());
        totalsFromExcel.xskt += (parseFloat(row.__EMPTY_7) || 0) * 1000;
    });
    
    const loto_db_com = totalsFromExcel.lotoDB * 0.08;
    const lo_cap_com = totalsFromExcel.loCap * 0.10;
    const c2_27_com = totalsFromExcel.c2_27 * 0.10;
    const c3_23_com = totalsFromExcel.c3_23 * 0.10;
    const xskt_com = totalsFromExcel.xskt * 0.10;
    
    state.baseTongDT = totalsFromExcel.lotoDB + totalsFromExcel.loCap + totalsFromExcel.c2_27 + totalsFromExcel.c3_23 + totalsFromExcel.xskt;
    state.baseTongHH = loto_db_com + lo_cap_com + c2_27_com + c3_23_com + xskt_com;
    state.baseThuong = totalsFromExcel.thuong;
    
    return {
        totals: totalsFromExcel,
        commissions: { loto_db_com, lo_cap_com, c2_27_com, c3_23_com, xskt_com }
    };
}

/**
 * Tạo HTML cho báo cáo chi tiết.
 * @param {object} data Dữ liệu từ processDetailedReportData
 * @param {string|null} manualDateRange Ngày thủ công (nếu có)
 */
export function renderDetailedReport(data, manualDateRange = null) {
    const { totals, commissions } = data;
    const displayDate = manualDateRange !== null ? manualDateRange : dateRangeText;
    const xsktRowHTML = totals.xskt > 0 ? `<tr><td>Xổ số kiến thiết</td><td>${formatNumberHiddenK(totals.xskt)}</td><td>${formatCommissionCellHiddenK(totals.xskt, commissions.xskt_com)}</td></tr>` : '';
    
    DOM.reportContainer.innerHTML = `
        <table>
            <tr><td class="header" style="width: 33.33%;">Thanh toán tiền Đại Lý:</td><td class="so-so">${[...state.accountCodes].join(', ')}</td></tr>
            <tr><td class="header">Thời gian:</td><td>${displayDate}</td></tr>
        </table><br>
        <table class="report-table">
            <thead><tr><th>Loại hình</th><th>Doanh thu</th><th>Hoa hồng</th></tr></thead>
            <tbody>
                <tr><td>Lô tô Đặc biệt</td><td>${formatNumberHiddenK(totals.lotoDB)}</td><td>${formatCommissionCellHiddenK(totals.lotoDB, commissions.loto_db_com)}</td></tr>
                <tr><td>Lô cặp</td><td>${formatNumberHiddenK(totals.loCap)}</td><td>${formatCommissionCellHiddenK(totals.loCap, commissions.lo_cap_com)}</td></tr>
                <tr><td>2/27</td><td>${formatNumberHiddenK(totals.c2_27)}</td><td>${formatCommissionCellHiddenK(totals.c2_27, commissions.c2_27_com)}</td></tr>
                <tr><td>3/23</td><td>${formatNumberHiddenK(totals.c3_23)}</td><td>${formatCommissionCellHiddenK(totals.c3_23, commissions.c3_23_com)}</td></tr>
                ${xsktRowHTML}
                <tr id="tongCongRow"><td>Tổng cộng</td><td id="tongDT"></td><td id="tongHH"></td></tr>
                <tr id="mainBonusRow"><td>Thưởng</td><td colspan="2" id="thuong">${formatNumberHiddenK(state.baseThuong)}</td></tr>
                <tr id="finalResultRow"><td id="ketQuaLabel"></td><td id="ketQuaValue" colspan="2"></td></tr>
                <tr id="bangChuRow" class="header"><td>Bằng chữ</td><td colspan="2" id="ketQuaBangChu" class="bang-chu-cell"></td></tr>
            </tbody>
        </table>
        <div id="copyrightInReport" class="copyright" style="display: none;">© 2025 ZENG FINANCE</div>
    `;
}

/**
 * Cập nhật các giá trị tính toán (tổng, bằng chữ) cho báo cáo chi tiết.
 */
export function updateDetailedReportView() {
    if (!state.currentSoSo) return;
    
    const addedRevenue = state.addedTickets.reduce((sum, t) => sum + t.doanhThu, 0);
    const addedCommission = state.addedTickets.reduce((sum, t) => sum + t.hoaHong, 0);
    
    const tongDT_Moi = state.baseTongDT + addedRevenue;
    const tongHH_Moi = state.baseTongHH + addedCommission;
    
    const tongDTElement = document.getElementById('tongDT');
    const tongHHElement = document.getElementById('tongHH');
    if (tongDTElement) tongDTElement.textContent = formatNumberHiddenK(tongDT_Moi);
    if (tongHHElement) tongHHElement.textContent = formatNumberHiddenK(tongHH_Moi);
    
    const phaiNop = tongDT_Moi - tongHH_Moi - state.baseThuong - state.extraBonus + state.extraDebt;
    
    const resultRow = document.getElementById('finalResultRow');
    const ketQuaLabel = document.getElementById('ketQuaLabel');
    const ketQuaValue = document.getElementById('ketQuaValue');
    const ketQuaBangChu = document.getElementById('ketQuaBangChu');
    
    if (!resultRow || !ketQuaLabel || !ketQuaValue || !ketQuaBangChu) return;
    
    resultRow.className = phaiNop >= 0 ? 'final-amount-positive' : 'final-amount-negative';
    
    if (phaiNop >= 0) {
        const lamTron = Math.ceil(phaiNop / 1000) * 1000;
        ketQuaLabel.textContent = 'Phải nộp';
        ketQuaValue.textContent = formatNumberHiddenK(lamTron);
        ketQuaBangChu.textContent = docso(lamTron) + " đồng";
    } else {
        const layVe = Math.abs(phaiNop);
        const khongLamTron = parseInt(String(layVe / 1000)) * 1000;
        ketQuaLabel.textContent = 'Lấy về';
        ketQuaValue.textContent = formatNumberHiddenK(khongLamTron);
        ketQuaBangChu.textContent = docso(khongLamTron) + " đồng";
    }
}