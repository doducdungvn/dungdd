// js/uiController.js
// Quản lý tất cả các tương tác và cập nhật giao diện người dùng (UI).

import { DOM } from './dom.js';
import { state, setRegionLock } from './state.js';
import { updateDetailedReportView } from './reportCalculator.js';
import { showNotification } from './utils.js';
// Import hàm settings
import { loadSettings, saveSettings } from './storageManager.js';


// Tải cài đặt ngay khi module được load
let settings = loadSettings();

/**
 * Hiển thị một section chính và ẩn các section khác.
 * @param {string} sectionId ID của section (ví dụ: 'summarySection')
 */
export function showSection(sectionId) {
    [DOM.summarySection, DOM.reportSection, DOM.sellSection].forEach(s => s.style.display = 'none');
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) sectionToShow.style.display = 'block';
    
    [DOM.navSummary, DOM.navReport, DOM.navSell, DOM.navReload].forEach(b => b.classList.remove('active'));
    
    let activeBtn;
    if (sectionId === 'summarySection') activeBtn = DOM.navSummary;
    else if (sectionId === 'reportSection') activeBtn = DOM.navReport;
    else if (sectionId === 'sellSection') activeBtn = DOM.navSell;
    
    if (activeBtn) activeBtn.classList.add('active');
    else DOM.navSummary.classList.add('active'); // Mặc định

    // Cập nhật hiển thị nút cuộn
    if (sectionId !== 'summarySection') {
        DOM.scrollToTopBtn.classList.remove('show');
        DOM.scrollToBottomBtn.classList.remove('show');
    } else {
        handleScrollButtonVisibility();
    }
}

/**
 * Xử lý hiển thị các nút cuộn dựa trên vị trí trang.
 */
export function handleScrollButtonVisibility() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const summarySectionVisible = DOM.summarySection.style.display !== 'none';
    
    // Nút Lên Đầu
    if (scrollTop > 200 && summarySectionVisible) {
        DOM.scrollToTopBtn.classList.add('show');
    } else {
        DOM.scrollToTopBtn.classList.remove('show');
    }

    // Nút Xuống Dưới
    if (scrollTop < (scrollHeight - clientHeight - 200) && summarySectionVisible) {
        DOM.scrollToBottomBtn.classList.add('show');
    } else {
        DOM.scrollToBottomBtn.classList.remove('show');
    }
}

/**
 * Chạy animation cho logo.
 */
export async function loopLogoAnimation() {
    try {
        const spans = document.querySelectorAll('.simple-animated-logo span');
        if (spans.length === 0) return;

        const chars = Array.from(spans);
        const delay = (ms) => new Promise(res => setTimeout(res, ms));

        // Phase 1: Fade In
        for (let i = 0; i < chars.length; i++) {
            chars[i].style.opacity = '1';
            chars[i].style.transform = 'translateY(0)';
            await delay(150);
        }
        
        // Phase 2: Đợi
        await delay(3000);

        // Phase 3: Fade Out
        chars.forEach(span => {
            span.style.opacity = '0';
            span.style.transform = 'translateY(15px)';
        });

        await delay(600);

        // Phase 4: Đổi màu
        const h = Math.floor(Math.random() * 360);
        const s = Math.floor(Math.random() * 30) + 70;
        const l = Math.floor(Math.random() * 20) + 40;
        const newColor = `hsl(${h}, ${s}%, ${l}%)`;
        DOM.logoContainers.forEach(logo => {
            logo.style.color = newColor;
        });
        
        setTimeout(loopLogoAnimation, 100);
    } catch (error) {
        console.error("Lỗi animation logo:", error);
    }
}

// === QUẢN LÝ MODAL ===

export function showManualInputModal() {
    DOM.manualInputModal.style.display = 'block';
    DOM.manualAgentName.focus();
}
export function hideManualInputModal() {
    DOM.manualInputModal.style.display = 'none';
}
export function hideImagePreviewModal() {
    DOM.imagePreviewModal.style.display = 'none';
    DOM.imagePreviewHolder.src = '';
}
export function showReloadModal() {
    DOM.reloadModal.style.display = 'block';
    DOM.reloadFile1.value = ''; DOM.reloadFile2.value = '';
    DOM.reloadFile1.classList.remove('loaded'); DOM.reloadFile2.classList.remove('loaded');
}
export function hideReloadModal() {
    DOM.reloadModal.style.display = 'none';
}
export function showPasswordModal() {
    DOM.passwordInput.value = '';
    DOM.passwordModal.style.display = 'block';
    DOM.passwordInput.focus();
}
export function hidePasswordModal() {
    DOM.passwordModal.style.display = 'none';
}

// === QUẢN LÝ NÚT ACTION (BÁO CÁO CHI TIẾT) ===

export function toggleActionChoices() {
    if (DOM.toggleChoicesBtn.textContent.includes('Thêm')) {
        DOM.actionChoices.style.display = 'grid';
        DOM.toggleChoicesBtn.textContent = 'Xoá hết Thưởng/Nợ';
        DOM.toggleChoicesBtn.className = 'danger';
    } else {
        document.getElementById('extraBonusRow')?.remove();
        document.getElementById('extraDebtRow')?.remove();
        state.extraBonus = 0;
        state.extraDebt = 0;
        updateDetailedReportView(); // Cần import
        DOM.actionChoices.style.display = 'none';
        DOM.toggleChoicesBtn.textContent = 'Thêm tiền Thưởng/Nợ';
        DOM.toggleChoicesBtn.className = 'secondary';
    }
    updateActionButtons();
}

export function updateActionButtons() {
    DOM.actionChoices.innerHTML = `
        ${document.getElementById('extraBonusRow') ? `<button class="danger" data-action="remove-bonus">Xoá Thưởng thêm</button>` : `<button data-action="add-bonus">Thêm tiền Thưởng</button>`}
        ${document.getElementById('extraDebtRow') ? `<button class="danger" data-action="remove-debt">Xoá tiền Nợ</button>` : `<button data-action="add-debt">Thêm tiền Nợ</button>`}
    `;
}

export function createDynamicInputRow(type) {
    const isBonus = type === 'bonus';
    const existingRow = document.getElementById(isBonus ? 'extraBonusRow' : 'extraDebtRow');
    if (existingRow) return;

    const mainBonusRow = document.getElementById('mainBonusRow');
    if (!mainBonusRow) return;

    const newRow = document.createElement('tr');
    newRow.id = isBonus ? 'extraBonusRow' : 'extraDebtRow';
    if (!isBonus) newRow.className = 'old-debt';
    
    const nameCellHTML = isBonus ? `<td style="display: flex; align-items: center;"><textarea class="dynamic-input" style="color: var(--success-color);" placeholder="Nhập tên thưởng..." rows="1"></textarea></td>` : `<td style="vertical-align: middle;">Nợ cũ</td>`;
    newRow.innerHTML = `${nameCellHTML}<td colspan="2"><input type="text" class="dynamic-input" style="color: ${isBonus ? 'var(--success-color)' : 'var(--danger-color)'};" data-type="${type}" placeholder="Nhập số tiền..." inputmode="numeric"></td>`;
    
    const anchorRow = document.getElementById('extraBonusRow') || mainBonusRow;
    anchorRow.insertAdjacentElement('afterend', newRow);
    
    const input = newRow.querySelector('input');
    // (Event listener cho input này sẽ được gắn ở main.js)
    input.focus();
    return input; // Trả về input để main.js gắn listener
}

// === QUẢN LÝ BÁN VÉ ===

export function handleSellOptionsChange(event) {
    const ticketType = document.querySelector('input[name="sellTicketType"]:checked').value;
    const priceType = document.querySelector('input[name="sellPrice"]:checked').value;
    const commissionType = document.querySelector('input[name="commissionRate"]:checked').value;
    
    DOM.customTicketName.style.display = ticketType === 'custom-name' ? 'block' : 'none';
    DOM.customTicketPrice.style.display = priceType === 'custom-price' ? 'block' : 'none';
    DOM.customCommissionPercent.style.display = commissionType === 'custom-commission' ? 'block' : 'none';
    
    if (event && event.isTrusted && event.target.name === 'sellTicketType') {
        DOM.sellQuantityInput.value = '';
        switch (ticketType) {
            case 'xo-so':
                document.querySelector('input[name="sellPrice"][value="10000"]').checked = true;
                document.querySelector('input[name="commissionRate"][value="0.10"]').checked = true;
                DOM.customTicketPrice.style.display = 'none';
                DOM.customCommissionPercent.style.display = 'none';
                DOM.sellQuantityInput.focus();
                break;
            case 've-boc':
                document.querySelector('input[name="sellPrice"][value="5000"]').checked = true;
                document.querySelector('input[name="commissionRate"][value="0.12"]').checked = true;
                DOM.customTicketPrice.style.display = 'none';
                DOM.customCommissionPercent.style.display = 'none';
                DOM.sellQuantityInput.focus();
                break;
            case 'custom-name':
                DOM.customTicketName.focus();
                break;
        }
    }
}

// === QUẢN LÝ KHÓA VÙNG ===

export function lockRegions() {
    DOM.regionDefinitionsInput.disabled = true;
    DOM.btnSaveRegions.textContent = 'Mở khoá Định nghĩa';
    DOM.btnSaveRegions.classList.remove('success');
    DOM.btnSaveRegions.classList.add('warning');
    setRegionLock(true);
}

export function unlockRegions() {
    DOM.regionDefinitionsInput.disabled = false;
    DOM.btnSaveRegions.textContent = 'Lưu Định nghĩa';
    DOM.btnSaveRegions.classList.remove('warning');
    DOM.btnSaveRegions.classList.add('success');
    setRegionLock(false);
    DOM.regionDefinitionsInput.focus();
}

// === SAO CHÉP & LƯU ẢNH ===

async function captureElement(selector, buttonElement) {
    const element = document.querySelector(selector);
    if (!element || !element.innerHTML.trim()) {
        showNotification("Chưa có nội dung để xử lý!", 'info');
        return null;
    }

    const originalButtonText = buttonElement ? buttonElement.textContent : '';
    if (buttonElement) buttonElement.textContent = 'Đang tạo ảnh...';

    const elementsToHide = [];
    if (selector === '#summarySection') {
        elementsToHide.push(element.querySelector('.summary-actions'));
        elementsToHide.push(element.querySelector('.controls-panel'));
    } else if (selector === '#reportContainer') {
        elementsToHide.push(document.getElementById('actionButtonContainer'));
    }
    
    elementsToHide.forEach(el => el && (el.style.display = 'none'));
    
    const copyright = document.getElementById('copyrightInReport');
    if (copyright && selector === '#reportContainer') copyright.style.display = 'block';

    // Xử lý cuộn cho Bảng tổng kết
    let mainPage, tableContainer, table, summarySectionEl;
    let originalPageMaxWidth, originalSummarySectionWidth, originalTableContainerWidth, originalTableContainerOverflow;

    if (selector === '#summarySection') {
        mainPage = DOM.mainPage;
        summarySectionEl = DOM.summarySection;
        tableContainer = DOM.summaryTableContainer;
        table = tableContainer.querySelector('table');
        
        if (mainPage && summarySectionEl && tableContainer && table) {
            originalPageMaxWidth = mainPage.style.maxWidth;
            originalSummarySectionWidth = summarySectionEl.style.width;
            originalTableContainerWidth = tableContainer.style.width;
            originalTableContainerOverflow = tableContainer.style.overflowX;

            mainPage.style.maxWidth = 'none';
            const scrollW = table.scrollWidth + 2;
            
            summarySectionEl.style.width = `${scrollW}px`;
            tableContainer.style.width = `${scrollW}px`;
            tableContainer.style.overflowX = 'visible';
        }
    }

    await new Promise(resolve => setTimeout(resolve, 50)); // Đợi trình duyệt vẽ lại

    let canvas;
    try {
        // Thêm transition-property: none để tránh lỗi chụp ảnh khi đang chuyển đổi dark-mode
        document.body.style.transition = 'none'; 
        canvas = await html2canvas(element, { backgroundColor: "var(--container-bg)", scale: 2 });
        document.body.style.transition = ''; // Trả lại transition
    } catch (err) {
        console.error('Lỗi tạo ảnh:', err);
        showNotification('Đã xảy ra lỗi khi tạo ảnh.', 'error');
        canvas = null;
    } finally {
        // Khôi phục UI
        if (copyright) copyright.style.display = 'none';
        elementsToHide.forEach(el => el && (el.style.display = ''));
        
        if (mainPage && summarySectionEl && tableContainer) {
            mainPage.style.maxWidth = originalPageMaxWidth;
            summarySectionEl.style.width = originalSummarySectionWidth;
            tableContainer.style.width = originalTableContainerWidth;
            tableContainer.style.overflowX = originalTableContainerOverflow;
        }
        if (buttonElement) buttonElement.textContent = originalButtonText;
    }
    
    return canvas;
}

export async function saveElementAsImage(selector, filename, buttonElement = null) {
    const canvas = await captureElement(selector, buttonElement);
    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showNotification('Đã lưu ảnh thành công!', 'success');
    if (buttonElement) {
        buttonElement.textContent = 'Đã lưu!';
        setTimeout(() => { if(buttonElement) buttonElement.textContent = 'Tải ảnh'; }, 2000);
    }
}

export async function copyElementAsImage(selector, message, buttonElement = null) {
    const canvas = await captureElement(selector, buttonElement);
    if (!canvas) return;

    canvas.toBlob(async (blob) => {
        try {
            if (navigator.clipboard && navigator.clipboard.write) {
                await navigator.clipboard.write([ new ClipboardItem({ 'image/png': blob }) ]);
                showNotification(message, 'success');
                if (buttonElement) {
                    buttonElement.textContent = 'Đã Copy!';
                    setTimeout(() => { if(buttonElement) buttonElement.textContent = 'Copy Ảnh'; }, 2000);
                }
            } else {
                throw new Error('Clipboard API không được hỗ trợ.');
            }
        } catch (writeErr) {
            console.error('Lỗi khi dùng navigator.clipboard.write:', writeErr);
            showNotification('Không thể tự động copy, vui lòng copy thủ công!', 'info');
            DOM.imagePreviewHolder.src = canvas.toDataURL('image/png');
            DOM.imagePreviewModal.style.display = 'block';
        }
    }, 'image/png');
}


// === LOGIC DARK MODE ===

/**
 * Khởi tạo Dark Mode khi tải trang
 */
export function initializeDarkMode() {
    applyDarkMode(true); // Áp dụng theme đã lưu mà không có transition
    // Gắn sự kiện cho nút toggle
    DOM.darkModeToggle.addEventListener('click', () => {
        // 1. Cập nhật đối tượng settings
        settings.darkMode = !settings.darkMode;
        // 2. Áp dụng thay đổi
        applyDarkMode(false);
        // 3. Lưu cài đặt mới
        saveSettings(settings);
    });
}

/**
 * Áp dụng class 'dark-mode' cho body và cập nhật icon
 * @param {boolean} isInitializing - True nếu đang khởi tạo (để tắt transition)
 */
function applyDarkMode(isInitializing = false) {
    if (isInitializing) {
        // Thêm class đặc biệt để tắt transition khi tải trang
        document.body.classList.add('no-transition');
    }

    if (settings.darkMode) {
        document.body.classList.add('dark-mode');
        DOM.darkModeToggle.textContent = '☀️'; // Icon mặt trời
    } else {
        document.body.classList.remove('dark-mode');
        DOM.darkModeToggle.textContent = '🌙'; // Icon mặt trăng
    }
    
    if (isInitializing) {
        // Xóa class no-transition sau một chút để transition hoạt động lại
        setTimeout(() => document.body.classList.remove('no-transition'), 100);
    }
}


// === THÊM MỚI: Logic cho Swipe Gestures ===

const TABS = ['summarySection', 'reportSection', 'sellSection'];
let touchStartX = 0;
let touchEndX = 0;

/**
 * Khởi tạo trình lắng nghe cử chỉ vuốt
 */
export function initializeSwipeGestures() {
    // Dùng 'passive: true' để cải thiện hiệu năng cuộn
    DOM.mainPage.addEventListener('touchstart', handleTouchStart, { passive: true });
    DOM.mainPage.addEventListener('touchend', handleTouchEnd, { passive: true });
}

function handleTouchStart(evt) {
    // Bỏ qua nếu đang vuốt trên bảng (để cho phép cuộn ngang)
    // Hoặc nếu đang tương tác với input
    if (evt.target.closest('#summaryTableContainer') || 
        evt.target.tagName === 'INPUT' || 
        evt.target.tagName === 'TEXTAREA' ||
        evt.target.tagName === 'SELECT') {
        
        touchStartX = 0; // Reset
        return;
    }
    touchStartX = evt.changedTouches[0].screenX;
}

function handleTouchEnd(evt) {
    // Bỏ qua nếu không bắt đầu vuốt hợp lệ
    if (touchStartX === 0) return; 

    touchEndX = evt.changedTouches[0].screenX;
    handleSwipe();
    touchStartX = 0; // Reset
}

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const swipeThreshold = 50; // Yêu cầu vuốt ít nhất 50px

    if (Math.abs(swipeDistance) < swipeThreshold) {
        return; // Không đủ xa
    }

    if (swipeDistance < -swipeThreshold) {
        // Vuốt sang trái (Chuyển tab kế tiếp)
        switchTabBySwipe('next');
    } else if (swipeDistance > swipeThreshold) {
        // Vuốt sang phải (Chuyển tab lùi)
        switchTabBySwipe('prev');
    }
}

/**
 * Chuyển tab dựa trên hướng vuốt
 * @param {'next' | 'prev'} direction
 */
function switchTabBySwipe(direction) {
    let currentTabIndex = -1;
    
    // Tìm tab đang active
    if (DOM.navSummary.classList.contains('active')) currentTabIndex = 0;
    else if (DOM.navReport.classList.contains('active')) currentTabIndex = 1;
    else if (DOM.navSell.classList.contains('active')) currentTabIndex = 2;

    if (currentTabIndex === -1) return; // Không tìm thấy tab

    let newTabIndex = currentTabIndex;
    if (direction === 'next') {
        newTabIndex = Math.min(currentTabIndex + 1, TABS.length - 1);
    } else if (direction === 'prev') {
        newTabIndex = Math.max(currentTabIndex - 1, 0);
    }

    if (newTabIndex !== currentTabIndex) {
        // Gọi hàm showSection đã có
        showSection(TABS[newTabIndex]);
    }
}

// === KẾT THÚC THÊM MỚI ===