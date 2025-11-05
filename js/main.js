// js/main.js
// Đây là file "nhạc trưởng" (controller)
// Nhiệm vụ: Import các module và gắn các event listener vào DOM.

'use strict';

// 1. IMPORT CÁC MODULE
import { DOM, manualFormOrder } from './dom.js';
import { 
    state, 
    excelData1, 
    excelData2, 
    regionDefinitions, 
    isRegionLocked, 
    dateRangeText, 
    resetDetailedState
    // === ĐÃ XÓA: fileProcessingPromises ===
} from './state.js';
import { 
    showNotification, 
    formatNumberHiddenK, 
    formatCommissionCellHiddenK,
    debounce 
} from './utils.js';
import { 
    showSection, 
    handleScrollButtonVisibility, 
    loopLogoAnimation,
    showManualInputModal, 
    hideManualInputModal, 
    hideImagePreviewModal, 
    showReloadModal,
    hideReloadModal, 
    showPasswordModal, 
    hidePasswordModal, 
    toggleActionChoices, 
    updateActionButtons, 
    createDynamicInputRow, 
    handleSellOptionsChange, 
    unlockRegions, 
    saveElementAsImage, 
    copyElementAsImage,
    initializeDarkMode,
    initializeSwipeGestures 
} from './uiController.js';
import { 
    loadSavedRegions, 
    parseAndSaveRegions,
    saveDetailedDraft, 
    loadDetailedDraft
} from './storageManager.js';
import { 
    handleFile 
} from './excelProcessor.js';
import { 
    processSummaryData, 
    renderSummaryTable, 
    processDetailedReportData, 
    renderDetailedReport, 
    updateDetailedReportView 
} from './reportCalculator.js';

// 2. HÀM KHỞI CHẠY CHÍNH
function initializeApp() {
    
    // === Gắn Event Listener ===

    // Nạp file (Trang Home)
    DOM.excelFile1.addEventListener('change', (e) => handleFile(e.target.files[0], 1, 'excelFile1'));
    DOM.excelFile2.addEventListener('change', (e) => handleFile(e.target.files[0], 2, 'excelFile2'));
    DOM.btnLoadData.addEventListener('click', handleLoadData); // <-- Đã đổi thành đồng bộ

    // Nạp file (Modal)
    DOM.reloadFile1.addEventListener('change', (e) => handleFile(e.target.files[0], 1, 'reloadFile1'));
    DOM.reloadFile2.addEventListener('change', (e) => handleFile(e.target.files[0], 2, 'reloadFile2'));
    DOM.btnReloadSubmit.addEventListener('click', submitReload); // <-- Đã đổi thành đồng bộ

    // Điều hướng chính
    DOM.navSummary.addEventListener('click', () => showSection('summarySection'));
    DOM.navReport.addEventListener('click', () => showSection('reportSection'));
    DOM.navSell.addEventListener('click', () => showSection('sellSection'));
    DOM.navReload.addEventListener('click', showReloadModal);

    // Báo cáo Tổng hợp (Lọc Vùng)
    DOM.btnSaveRegions.addEventListener('click', handleRegionButtonPress);
    DOM.regionSelect.addEventListener('change', generateSummaryView);
    DOM.btnClearSummaryFilter.addEventListener('click', () => {
        DOM.regionSelect.value = 'all';
        generateSummaryView();
    });

    // Listener cho Bộ lọc Nâng cao (Lọc Tiền)
    const debouncedFilter = debounce(generateSummaryView, 500);
    DOM.filterMinAmount.addEventListener('input', debouncedFilter);
    DOM.filterMaxAmount.addEventListener('input', debouncedFilter);
    
    DOM.btnClearAmountFilter.addEventListener('click', () => {
        DOM.filterMinAmount.value = '';
        DOM.filterMaxAmount.value = '';
        generateSummaryView(); // Lọc lại ngay
    });

    // Báo cáo Chi tiết
    DOM.btnCreateReport.addEventListener('click', createDetailedReport);
    DOM.soSoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
            createDetailedReport();
        }
    });

    // Nút Action (Báo cáo chi tiết)
    DOM.toggleChoicesBtn.addEventListener('click', toggleActionChoices);
    DOM.actionChoices.addEventListener('click', handleActionChoiceClick);

    // Bán vé
    DOM.sellTicketTypeRadios.forEach(radio => radio.addEventListener('change', handleSellOptionsChange));
    DOM.sellPriceRadios.forEach(radio => radio.addEventListener('change', handleSellOptionsChange));
    DOM.commissionRateRadios.forEach(radio => radio.addEventListener('change', handleSellOptionsChange));
    DOM.customTicketPrice.addEventListener('input', formatCurrencyInput);
    DOM.sellQuantityInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            DOM.btnAddTicket.click();
        }
    });
    DOM.btnAddTicket.addEventListener('click', addTicketToReport);

    // Báo cáo Thủ công
    const openManualModal = () => {
        clearManualReportForm();
        showManualInputModal();
    };
    DOM.btnShowManualReport.addEventListener('click', openManualModal);
    DOM.btnShowManualReport_inline.addEventListener('click', openManualModal);
    
    DOM.btnCreateManualReport.addEventListener('click', createManualReport);
    DOM.btnClearManualReport.addEventListener('click', clearManualReportForm);
    manualFormOrder.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('keydown', handleManualFormEnter);
        }
    });
    document.querySelectorAll('.manual-currency').forEach(input => {
        input.addEventListener('input', formatCurrencyInput);
    });

    // Các nút Copy/Lưu ảnh
    DOM.btnSaveSummary.addEventListener('click', () => saveElementAsImage('#summarySection', 'Bao-cao-Tong-ket.png', DOM.btnSaveSummary));
    DOM.btnCopySummary.addEventListener('click', () => copyElementAsImage('#summarySection', 'Copy ảnh tổng kết thành công!', DOM.btnCopySummary));
    DOM.btnCopyReport.addEventListener('click', () => copyElementAsImage('#reportContainer', 'Copy ảnh báo cáo thành công!', DOM.btnCopyReport));

    // Đóng Modal
    DOM.closeModalBtn.addEventListener('click', hideManualInputModal);
    DOM.manualInputModal.addEventListener('click', (e) => { if (e.target === DOM.manualInputModal) hideManualInputModal(); });
    DOM.closePreviewModalBtn.addEventListener('click', hideImagePreviewModal);
    DOM.imagePreviewModal.addEventListener('click', (e) => { if (e.target === DOM.imagePreviewModal) hideImagePreviewModal(); });
    DOM.closeReloadModalBtn.addEventListener('click', hideReloadModal);
    DOM.reloadModal.addEventListener('click', (e) => { if (e.target === DOM.reloadModal) hideReloadModal(); });
    
    // Modal Mật khẩu
    DOM.closePasswordModalBtn.addEventListener('click', hidePasswordModal);
    DOM.cancelPasswordBtn.addEventListener('click', hidePasswordModal);
    DOM.passwordModal.addEventListener('click', (e) => { if (e.target === DOM.passwordModal) hidePasswordModal(); });
    DOM.btnSubmitPassword.addEventListener('click', checkPassword);
    DOM.passwordInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            checkPassword();
        }
    });
    
    // Nút cuộn
    DOM.scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    DOM.scrollToBottomBtn.addEventListener('click', () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }));
    window.addEventListener('scroll', handleScrollButtonVisibility);

    // === KHỞI CHẠY CÁC TÁC VỤ BAN ĐẦU ===
    initializeDarkMode(); 
    loadSavedRegions();
    loopLogoAnimation();
    initializeSwipeGestures(); 
}

// 3. CÁC HÀM XỬ LÝ SỰ KIỆN (EVENT HANDLERS)

/**
 * Hàm tự động lưu (đã debounce)
 */
const debouncedSaveDraft = debounce(() => {
    // Thu thập state chi tiết hiện tại
    const draftData = {
        extraBonus: state.extraBonus,
        extraDebt: state.extraDebt,
        addedTickets: state.addedTickets,
        extraBonusName: document.querySelector('#extraBonusRow textarea')?.value || '',
        extraDebtValue: document.querySelector('#extraDebtRow input')?.dataset.fullValue || 0,
        extraBonusValue: document.querySelector('#extraBonusRow input')?.dataset.fullValue || 0
    };
    saveDetailedDraft(state.currentSoSo, draftData);
}, 1500); // Lưu sau 1.5s

/**
 * === SỬA LỖI NẠP FILE: Viết lại hàm handleLoadData ===
 * Xử lý khi nhấn nút "Nạp dữ liệu" (Trang Home)
 */
function handleLoadData() {
    // 1. Kiểm tra xem đã có dữ liệu trong state chưa (vì file đã được xử lý đồng bộ)
    if (excelData1.length === 0 && excelData2.length === 0) {
        showNotification("Vui lòng chọn ít nhất một file excel!", 'error');
        return;
    }
    
    // 2. Mọi thứ OK, tiếp tục
    generateSummaryView(); // Chạy với bộ lọc "Tất cả"
    DOM.homePage.style.display = 'none';
    DOM.mainPage.style.display = 'block';
    showSection('reportSection');
}

/**
 * Tạo/Tái tạo Báo cáo Tổng hợp (thường dùng khi lọc)
 */
function generateSummaryView() {
    if (excelData1.length === 0 && excelData2.length === 0) return;

    // 1. Lấy bộ lọc VÙNG
    const selectedRegion = DOM.regionSelect.value;
    let regionFilterRules = null;
    if (selectedRegion !== 'all') {
        regionFilterRules = regionDefinitions[selectedRegion];
    }
    
    // 2. Lấy bộ lọc SỐ TIỀN
    const minVal = parseFloat(DOM.filterMinAmount.value);
    const maxVal = parseFloat(DOM.filterMaxAmount.value);
    const hasAmountFilter = !isNaN(minVal) || !isNaN(maxVal);
    
    const amountFilters = {
        min: !isNaN(minVal) ? minVal * 1000 : null, // Chuyển K -> 1000
        max: !isNaN(maxVal) ? maxVal * 1000 : null
    };

    // 3. Gọi xử lý với cả hai bộ lọc
    // summaryData sẽ chứa { groupedData, finalGrandTotals, regionGrandTotals }
    const summaryData = processSummaryData(regionFilterRules, amountFilters);
    
    // 4. Render bảng (sử dụng groupedData và finalGrandTotals)
    DOM.summaryTableContainer.innerHTML = renderSummaryTable(summaryData);
    
    // 5. Cập nhật tiêu đề (sử dụng regionGrandTotals để không bị ảnh hưởng bởi lọc tiền)
    const { totalRevenue, thuong } = summaryData.regionGrandTotals;

    let thuongPercentage = (thuong / totalRevenue) * 100; 
    if (isNaN(thuongPercentage) || !isFinite(thuongPercentage)) {
        thuongPercentage = 0;
    }
    
    // === SỬA LỖI HIỂN THỊ TIÊU ĐỀ LỌC ===
    const baseTitle = 'Bảng Báo Cáo Tổng Hợp:';
    let titleText = baseTitle;
    if (selectedRegion !== 'all') {
        titleText += ` <span class="region-name">${selectedRegion}</span>`;
    }
    
    let filterText = '';
    if (hasAmountFilter) {
        const minText = !isNaN(minVal) ? `từ ${minVal}K` : '';
        const maxText = !isNaN(maxVal) ? `đến ${maxVal}K` : '';
        filterText = ` <span class="region-name">(Đã lọc DS ${[minText, maxText].filter(Boolean).join(' ')})</span>`;
    }
    DOM.summaryTitle.innerHTML = titleText + filterText;
    // === KẾT THÚC SỬA LỖI TIÊU ĐỀ ===

    const revenueSpan = `<span style="font-weight: 500; color: var(--text-color);">Doanh số: <span style="font-weight: 600; color: var(--danger-color);">${formatNumberHiddenK(totalRevenue)}</span></span>`;
    const thuongSpan = `<span style="font-weight: 500; color: var(--text-color); margin-left: 15px;">Trả thưởng: <span style="font-weight: 600; color: var(--primary-dark);">${formatNumberHiddenK(thuong)}</span> (${thuongPercentage.toFixed(1)}%)</span>`;
    DOM.summaryDate.innerHTML = `${dateRangeText} <br> ${revenueSpan} ${thuongSpan}`;
}

/**
 * Tạo Báo cáo Chi tiết
 */
function createDetailedReport() {
    hideManualInputModal();
    const soSo = DOM.soSoInput.value.trim();
    if (!soSo) return showNotification("Vui lòng nhập số sổ!", 'error');
    if (excelData1.length === 0 && excelData2.length === 0) return showNotification("Chưa có dữ liệu Excel được nạp!", 'error');
    
    const reportData = processDetailedReportData(soSo);
    if (!reportData) {
        return showNotification(`Không tìm thấy số sổ '${soSo}' trong dữ liệu!`, 'error');
    }
    
    renderDetailedReport(reportData); 

    const draft = loadDetailedDraft(soSo);
    if (draft) {
        console.log("Đang tải draft...", draft);
        state.extraBonus = parseFloat(draft.extraBonusValue) || 0;
        state.extraDebt = parseFloat(draft.extraDebtValue) || 0;
        state.addedTickets = draft.addedTickets || [];
        reRenderDraftComponents(draft);
        showNotification("Đã khôi phục báo cáo dở dang!", "success");
    }

    updateDetailedReportView(); 
    DOM.actionButtonContainer.style.display = 'grid';
    DOM.actionChoices.style.display = 'none';
    DOM.toggleChoicesBtn.textContent = 'Thêm tiền Thưởng/Nợ';
    DOM.toggleChoicesBtn.className = 'secondary';
    
    updateActionButtons();
    DOM.reportContainer.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Hàm vẽ lại UI từ draft
 */
function reRenderDraftComponents(draft) {
    if ((draft.extraBonusValue > 0) || (draft.extraBonusName && draft.extraBonusName.trim() !== '')) {
        const bonusInput = createDynamicInputRow('bonus');
        bonusInput.addEventListener('input', handleDynamicInputChange);
        bonusInput.addEventListener('blur', (e) => e.target.value = formatNumberHiddenK(e.target.dataset.fullValue || '0'));
        
        const bonusValue = parseFloat(draft.extraBonusValue) || 0;
        bonusInput.dataset.fullValue = bonusValue;
        bonusInput.value = formatNumberHiddenK(bonusValue);
        
        const bonusNameTextarea = document.querySelector('#extraBonusRow textarea');
        if (bonusNameTextarea) {
            bonusNameTextarea.value = draft.extraBonusName || '';
        }
    }

    if (draft.extraDebtValue > 0) {
        const debtInput = createDynamicInputRow('debt');
        debtInput.addEventListener('input', handleDynamicInputChange);
        debtInput.addEventListener('blur', (e) => e.target.value = formatNumberHiddenK(e.target.dataset.fullValue || '0'));

        const debtValue = parseFloat(draft.extraDebtValue) || 0;
        debtInput.dataset.fullValue = debtValue;
        debtInput.value = formatNumberHiddenK(debtValue);
    }

    const tongCongRow = document.getElementById('tongCongRow');
    if (tongCongRow && state.addedTickets && state.addedTickets.length > 0) {
        state.addedTickets.forEach(ticket => {
            const newRow = document.createElement('tr');
            newRow.className = 'added-ticket-row';
            newRow.dataset.ticketId = ticket.id;
            newRow.innerHTML = `<td>${ticket.name}</td><td>${formatNumberHiddenK(ticket.doanhThu)}</td><td>${formatCommissionCellHiddenK(ticket.doanhThu, ticket.hoaHong)}</td>`;
            tongCongRow.parentNode.insertBefore(newRow, tongCongRow);
        });
    }
    
    updateActionButtons();
}


/**
 * Xử lý khi nhấn nút trong menu Thưởng/Nợ
 */
function handleActionChoiceClick(e) {
    const action = e.target.dataset.action;
    if (!action) return;

    switch (action) {
        case 'add-bonus': {
            const input = createDynamicInputRow('bonus');
            input.addEventListener('input', handleDynamicInputChange);
            input.addEventListener('blur', (e) => e.target.value = formatNumberHiddenK(e.target.dataset.fullValue || '0'));
            break;
        }
        case 'remove-bonus':
            document.getElementById('extraBonusRow')?.remove();
            state.extraBonus = 0;
            updateDetailedReportView();
            debouncedSaveDraft(); 
            break;
        case 'add-debt': {
            const input = createDynamicInputRow('debt');
            input.addEventListener('input', handleDynamicInputChange);
            input.addEventListener('blur', (e) => e.target.value = formatNumberHiddenK(e.target.dataset.fullValue || '0'));
            break;
        }
        case 'remove-debt':
            document.getElementById('extraDebtRow')?.remove();
            state.extraDebt = 0;
            updateDetailedReportView();
            debouncedSaveDraft(); 
            break;
    }
    updateActionButtons();
}

/**
 * Xử lý khi nhập tiền Thưởng/Nợ
 */
function handleDynamicInputChange(e) {
    const input = e.target;
    const rawValue = input.value.replace(/[^\d-]/g, '');
    const num = parseInt(rawValue, 10) || 0;
    
    input.dataset.fullValue = num;
    input.value = num.toLocaleString('vi-VN'); 
    
    if (input.dataset.type === 'bonus') state.extraBonus = num;
    else if (input.dataset.type === 'debt') state.extraDebt = num;
    
    updateDetailedReportView();
    debouncedSaveDraft(); 
}

/**
 * Thêm vé bán (Tab Bán Vé)
 */
function addTicketToReport() {
    if (!state.currentSoSo) {
        return showNotification("Vui lòng tạo một báo cáo chi tiết trước!", 'error');
    }
    
    const quantity = parseInt(DOM.sellQuantityInput.value, 10);
    if (!quantity || quantity <= 0) {
        return showNotification("Vui lòng nhập số lượng vé hợp lệ!", 'error');
    }
    
    let typeName = '';
    const ticketType = document.querySelector('input[name="sellTicketType"]:checked').value;
    if (ticketType === 'xo-so') typeName = 'Xổ số';
    else if (ticketType === 've-boc') typeName = 'Vé bóc';
    else {
        typeName = DOM.customTicketName.value.trim();
        if (!typeName) return showNotification('Vui lòng nhập tên loại hình!', 'error');
    }
    
    let price = 0;
    const priceType = document.querySelector('input[name="sellPrice"]:checked').value;
    if (priceType === 'custom-price') {
        price = parseFloat(DOM.customTicketPrice.value.replace(/\D/g, '')) || 0;
        if (price <= 0) return showNotification('Vui lòng nhập giá bán hợp lệ!', 'error');
    } else {
        price = parseFloat(priceType);
    }
    
    let commissionRate = 0;
    const commissionType = document.querySelector('input[name="commissionRate"]:checked').value;
    if (commissionType === 'custom-commission') {
        commissionRate = parseFloat(DOM.customCommissionPercent.value) / 100 || 0;
        if (commissionRate <= 0) return showNotification('Vui lòng nhập % hoa hồng hợp lệ!', 'error');
    } else {
        commissionRate = parseFloat(commissionType);
    }
    
    const doanhThu = quantity * price;
    const hoaHong = doanhThu * commissionRate;
    const formattedName = `${typeName} (${(price / 1000).toLocaleString('vi-VN')}k) [${quantity} vé]`;
    
    const newTicket = { id: Date.now(), doanhThu, hoaHong, name: formattedName };
    state.addedTickets.push(newTicket);
    
    const newRow = document.createElement('tr');
    newRow.className = 'added-ticket-row';
    newRow.dataset.ticketId = newTicket.id;
    newRow.innerHTML = `<td>${newTicket.name}</td><td>${formatNumberHiddenK(doanhThu)}</td><td>${formatCommissionCellHiddenK(doanhThu, hoaHong)}</td>`;
    
    const tongCongRow = document.getElementById('tongCongRow');
    if (!tongCongRow) return showNotification('Lỗi: Không tìm thấy bảng báo cáo.', 'error');
    
    tongCongRow.parentNode.insertBefore(newRow, tongCongRow);
    
    updateDetailedReportView();
    DOM.sellQuantityInput.value = '';
    newRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showSection('reportSection');
    showNotification('Đã thêm vé vào báo cáo!', 'success');
    debouncedSaveDraft(); 
}

/**
 * === SỬA LỖI NẠP FILE: Viết lại hàm submitReload ===
 * Xử lý nút Nạp lại trong Modal
 */
function submitReload() {
    // 1. Kiểm tra xem đã có dữ liệu trong state chưa (vì file đã được xử lý đồng bộ)
    if (excelData1.length === 0 && excelData2.length === 0) {
        // Kiểm tra xem có file MỚI được chọn trong modal không
        if (DOM.reloadFile1.files.length === 0 && DOM.reloadFile2.files.length === 0) {
             showNotification("Bạn chưa chọn file Excel nào để nạp.", 'error');
            return;
        }
        // Nếu có file mới được chọn, hàm handleFile() sẽ xử lý chúng,
        // nhưng chúng ta cần đợi chúng
         showNotification("Đang xử lý file... Vui lòng chờ.", 'info');
         // Vì đồng bộ, nên khi code chạy đến đây, file đã được xử lý
    }

    // 2. Mọi thứ OK, reset UI
    generateSummaryView();
    DOM.reportContainer.innerHTML = '';
    DOM.actionButtonContainer.style.display = 'none';
    DOM.soSoInput.value = '';
    resetDetailedState(null);
    
    hideReloadModal();
    showSection('summarySection');
    showNotification("Đã nạp lại dữ liệu Excel thành công!", 'success');
}

/**
 * Xử lý Form Báo cáo Thủ công
 */
function createManualReport() {
    const agentName = DOM.manualAgentName.value.trim();
    if (!agentName) return showNotification("Vui lòng nhập Tên Đại Lý!", 'error');
    
    const getVal = (el) => (parseFloat(el.dataset.value) || 0) * 1000;
    
    const totals = {
        lotoDB: getVal(DOM.manualLotoDB),
        loCap: getVal(DOM.manualLoCap),
        c2_27: getVal(DOM.manualC227),
        c3_23: getVal(DOM.manualC323),
        thuong: (parseFloat(DOM.manualThuong.dataset.value) || 0), // Thưởng không nhân 1000
        xskt: 0
    };
    
    const commissions = {
        loto_db_com: totals.lotoDB * 0.08,
        lo_cap_com: totals.loCap * 0.10,
        c2_27_com: totals.c2_27 * 0.10,
        c3_23_com: totals.c3_23 * 0.10,
        xskt_com: 0
    };
    
    resetDetailedState('manual');
    state.accountCodes.add(agentName);
    state.baseTongDT = totals.lotoDB + totals.loCap + totals.c2_27 + totals.c3_23;
    state.baseTongHH = commissions.loto_db_com + commissions.lo_cap_com + commissions.c2_27_com + commissions.c3_23_com;
    state.baseThuong = totals.thuong;
    
    if (DOM.homePage.style.display !== 'none') {
        DOM.homePage.style.display = 'none';
        DOM.mainPage.style.display = 'block';
    }
    
    showSection('reportSection');
    renderDetailedReport({ totals, commissions }, DOM.manualDateRange.value.trim());
    updateDetailedReportView();
    hideManualInputModal();
    
    DOM.actionButtonContainer.style.display = 'grid';
    DOM.reportContainer.scrollIntoView({ behavior: 'smooth' });
    showNotification('Đã thêm báo cáo thủ công thành công!', 'success');
}

function clearManualReportForm() {
    manualFormOrder.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.value = '';
            if (element.dataset.value) element.dataset.value = '';
        }
    });
    DOM.manualAgentName.focus(); // <-- ĐÃ THÊM LẠI
}

function handleManualFormEnter(event) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    
    const currentId = event.target.id;
    const currentIndex = manualFormOrder.indexOf(currentId);
    if (currentIndex === -1) return;
    
    if (currentIndex < manualFormOrder.length - 1) {
        document.getElementById(manualFormOrder[currentIndex + 1])?.focus();
    } else {
        DOM.btnCreateManualReport.click();
    }
}

/**
 * Xử lý nhập liệu cho các ô tiền tệ
 */
function formatCurrencyInput(e) {
    const value = e.target.value.replace(/\D/g, '');
    e.target.dataset.value = value; // Lưu giá trị số
    e.target.value = value ? parseInt(value, 10).toLocaleString('vi-VN') : ''; // Hiển thị
}

/**
 * Xử lý nút Mở/Lưu định nghĩa vùng
 */
function handleRegionButtonPress() {
    if (isRegionLocked) {
        showPasswordModal();
    } else {
        parseAndSaveRegions(false); 
    }
}

/**
 * Kiểm tra mật khẩu
 */
function checkPassword() {
    const pass = DOM.passwordInput.value;
    if (pass === 'admin') { 
        hidePasswordModal();
        unlockRegions();
        showNotification('Đã mở khoá. Bạn có thể chỉnh sửa.', 'success');
    } else {
        showNotification('Mật khẩu không đúng!', 'error');
        DOM.passwordInput.value = '';
        DOM.passwordInput.focus();
    }
}

// === ĐÃ XÓA: CÁC HÀM XỬ LÝ TEMPLATE ===


// 5. CHẠY ỨNG DỤNG
document.addEventListener('DOMContentLoaded', initializeApp);