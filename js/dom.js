// js/dom.js
// File này chứa tất cả các tham chiếu đến phần tử DOM
// để dễ dàng quản lý và truy cập từ các module khác.

export const DOM = {
    homePage: document.getElementById('homePage'),
    mainPage: document.getElementById('mainPage'),
    excelFile1: document.getElementById('excelFile1'),
    excelFile2: document.getElementById('excelFile2'),
    btnLoadData: document.getElementById('btnLoadData'),
    navSummary: document.getElementById('navSummary'),
    navReport: document.getElementById('navReport'),
    navSell: document.getElementById('navSell'),
    summarySection: document.getElementById('summarySection'),
    reportSection: document.getElementById('reportSection'),
    sellSection: document.getElementById('sellSection'),
    summaryTableContainer: document.getElementById('summaryTableContainer'),
    summaryDate: document.getElementById('summaryDate'),
    soSoInput: document.getElementById('soSoInput'),
    btnCreateReport: document.getElementById('btnCreateReport'),
    reportContainer: document.getElementById('reportContainer'),
    actionButtonContainer: document.getElementById('actionButtonContainer'),
    btnCopySummary: document.getElementById('btnCopySummary'),
    btnSaveSummary: document.getElementById('btnSaveSummary'),
    btnCopyReport: document.getElementById('btnCopyReport'),
    toggleChoicesBtn: document.getElementById('toggleChoicesBtn'),
    actionChoices: document.getElementById('actionChoices'),
    btnAddTicket: document.getElementById('btnAddTicket'),
    sellQuantityInput: document.getElementById('sellQuantityInput'),
    btnShowManualReport: document.getElementById('btnShowManualReport'),
    btnShowManualReport_inline: document.getElementById('btnShowManualReport_inline'),
    manualInputModal: document.getElementById('manualInputModal'),
    btnCreateManualReport: document.getElementById('btnCreateManualReport'),
    btnClearManualReport: document.getElementById('btnClearManualReport'),
    manualAgentName: document.getElementById('manualAgentName'),
    manualDateRange: document.getElementById('manualDateRange'),
    manualLotoDB: document.getElementById('manualLotoDB'),
    manualLoCap: document.getElementById('manualLoCap'),
    manualC227: document.getElementById('manualC227'),
    manualC323: document.getElementById('manualC323'),
    manualThuong: document.getElementById('manualThuong'),
    sellTicketTypeRadios: document.querySelectorAll('input[name="sellTicketType"]'),
    sellPriceRadios: document.querySelectorAll('input[name="sellPrice"]'),
    commissionRateRadios: document.querySelectorAll('input[name="commissionRate"]'),
    customTicketName: document.getElementById('customTicketName'),
    customTicketPrice: document.getElementById('customTicketPrice'),
    customCommissionPercent: document.getElementById('customCommissionPercent'),
    closeModalBtn: document.getElementById('closeModalBtn'),
    notificationArea: document.getElementById('notification-area'),
    loadingIndicator: document.getElementById('loading-indicator'),
    imagePreviewModal: document.getElementById('imagePreviewModal'),
    closePreviewModalBtn: document.getElementById('closePreviewModalBtn'),
    imagePreviewHolder: document.getElementById('imagePreviewHolder'),
    navReload: document.getElementById('navReload'),
    reloadModal: document.getElementById('reloadModal'),
    closeReloadModalBtn: document.getElementById('closeReloadModalBtn'),
    reloadFile1: document.getElementById('reloadFile1'),
    reloadFile2: document.getElementById('reloadFile2'),
    btnReloadSubmit: document.getElementById('btnReloadSubmit'),
    logoContainers: document.querySelectorAll('.simple-animated-logo'),
    scrollToTopBtn: document.getElementById('scrollToTopBtn'),
    scrollToBottomBtn: document.getElementById('scrollToBottomBtn'),
    
    // DOM cho bộ lọc vùng
    regionDefinitionsInput: document.getElementById('regionDefinitionsInput'),
    btnSaveRegions: document.getElementById('btnSaveRegions'),
    regionSelect: document.getElementById('regionSelect'),
    btnClearSummaryFilter: document.getElementById('btnClearSummaryFilter'),
    summaryTitle: document.getElementById('summaryTitle'),
    
    // DOM cho modal mật khẩu
    passwordModal: document.getElementById('passwordModal'),
    closePasswordModalBtn: document.getElementById('closePasswordModalBtn'),
    passwordInput: document.getElementById('passwordInput'),
    btnSubmitPassword: document.getElementById('btnSubmitPassword'),
    cancelPasswordBtn: document.getElementById('cancelPasswordBtn'),

    // === ĐÃ XÓA: DOM cho Template Báo cáo Thủ công ===

    // DOM cho Dark Mode
    darkModeToggle: document.getElementById('darkModeToggle'),

    // DOM cho Bộ lọc Nâng cao
    filterMinAmount: document.getElementById('filterMinAmount'),
    filterMaxAmount: document.getElementById('filterMaxAmount'),
    btnClearAmountFilter: document.getElementById('btnClearAmountFilter'),
};

// Danh sách ID của form thủ công để xử lý Enter
export const manualFormOrder = [
    'manualAgentName', 'manualDateRange', 'manualLotoDB', 'manualLoCap',
    'manualC227', 'manualC323', 'manualThuong'
];