// js/state.js
// Quản lý trạng thái tập trung của ứng dụng.

// Dữ liệu thô từ Excel
export let excelData1 = [];
export let excelData2 = [];
export let dateRangeText = "Chưa có ngày";

// Trạng thái của bộ lọc vùng
export let regionDefinitions = {};
export let isRegionLocked = false;

// Trạng thái của báo cáo chi tiết đang xem
export const state = {
    currentSoSo: null,
    baseTongDT: 0,
    baseTongHH: 0,
    baseThuong: 0,
    extraBonus: 0,
    extraDebt: 0,
    addedTickets: [],
    accountCodes: new Set()
};

// === ĐÃ XÓA: fileProcessingPromises ===

// === HÀM SETTERS ĐỂ CẬP NHẬT STATE ===

export function setExcelData1(data) {
    excelData1 = data;
}

export function setExcelData2(data) {
    excelData2 = data;
}

export function setDateRangeText(text) {
    dateRangeText = text;
}

export function setRegionDefinitions(definitions) {
    regionDefinitions = definitions;
}

export function setRegionLock(locked) {
    isRegionLocked = locked;
}

/**
 * Reset lại state của báo cáo chi tiết khi tạo một báo cáo mới.
 * @param {string} soSo Số sổ mới
 */
export function resetDetailedState(soSo) {
    state.currentSoSo = soSo;
    state.baseTongDT = 0;
    state.baseTongHH = 0;
    state.baseThuong = 0;
    state.extraBonus = 0;
    state.extraDebt = 0;
    state.addedTickets = [];
    state.accountCodes.clear();
}