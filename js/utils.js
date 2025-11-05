// js/utils.js
// Chứa các hàm tiện ích chung, không phụ thuộc vào state.

/**
 * Hiển thị thông báo (toast).
 * @param {string} message Nội dung thông báo
 * @param {string} type 'info', 'success', 'error'
 * @param {number} duration Thời gian hiển thị (ms)
 */
export function showNotification(message, type = 'info', duration = 3000) {
    const notificationArea = document.getElementById('notification-area');
    if (!notificationArea) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notificationArea.appendChild(notification);
    
    // Trigger animation
    notification.offsetHeight; 
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
        notification.addEventListener('transitionend', () => notification.remove());
    }, duration);
}

/**
 * Hiển thị chỉ báo loading.
 */
export function showLoading() {
    const indicator = document.getElementById('loading-indicator');
    if (indicator) indicator.style.display = 'block';
}

/**
 * Ẩn chỉ báo loading.
 */
export function hideLoading() {
    const indicator = document.getElementById('loading-indicator');
    if (indicator) indicator.style.display = 'none';
}

/**
 * Định dạng số, ẩn 3 số 0 cuối (K).
 * @param {number | string} num Số đầu vào
 * @returns {string} Chuỗi đã định dạng
 */
export function formatNumberHiddenK(num) {
    num = parseFloat(num);
    if (isNaN(num) || num === 0 || Math.abs(num) < 1000) return "0";
    return parseInt(String(num / 1000)).toLocaleString("vi-VN");
}

/**
 * Định dạng ô hoa hồng (hiển thị % và số K).
 * @param {number} revenue Doanh thu
 * @param {number} commission Hoa hồng
 * @returns {string} HTML cho ô
 */
export function formatCommissionCellHiddenK(revenue, commission) {
    revenue = parseFloat(revenue);
    commission = parseFloat(commission);
    if (!revenue || revenue === 0 || isNaN(revenue) || isNaN(commission)) {
        return formatNumberHiddenK(commission);
    }
    const percentage = Math.round((commission / revenue) * 100);
    return `<i style="color: #E57373; font-weight: normal;">(${percentage}%)</i> ${formatNumberHiddenK(commission)}`;
}

/**
 * Phân tích chuỗi quy tắc lọc vùng.
 * @param {string} filterString Chuỗi quy tắc (ví dụ: "550_599+6999")
 * @returns {Array|null} Mảng các quy tắc
 */
export function parseFilterString(filterString) {
    if (!filterString || filterString.trim() === '') {
        return null; // Không có bộ lọc
    }
    const rules = [];
    const parts = filterString.split('+'); // Tách bằng dấu +
    
    parts.forEach(part => {
        part = part.trim();
        if (!part) return;

        if (part.includes('_')) {
            // Đây là một khoảng, ví dụ: "550_599"
            const range = part.split('_');
            const min = parseInt(range[0], 10);
            const max = parseInt(range[1], 10);
            if (!isNaN(min) && !isNaN(max) && min <= max) {
                rules.push({ min, max });
            }
        } else {
            // Đây là một số đơn, ví dụ: "6999"
            const num = parseInt(part, 10);
            if (!isNaN(num)) {
                rules.push({ min: num, max: num });
            }
        }
    });
    
    return rules.length > 0 ? rules : null;
}

/**
 * Kiểm tra xem mã đại lý có khớp với quy tắc lọc không.
 * @param {string} agentCode Mã đại lý
 * @param {Array} filterRules Mảng quy tắc từ parseFilterString
 * @returns {boolean} True nếu khớp
 */
export function agentMatchesFilter(agentCode, filterRules) {
    if (!filterRules) {
        return true; // Nếu không có quy tắc, tất cả đều khớp
    }

    const numericMatch = String(agentCode).match(/\d+$/);
    if (!numericMatch) {
        return false; // Mã đại lý không có số, không thể lọc
    }
    const agentNum = parseInt(numericMatch[0], 10);

    for (const rule of filterRules) {
        if (agentNum >= rule.min && agentNum <= rule.max) {
            return true; // Khớp một quy tắc
        }
    }
    
    return false; // Không khớp quy tắc nào
}

/**
 * Hàm đọc số thành chữ (Việt Nam).
 * @param {string | number} numberStr Số cần đọc
 * @returns {string} Chuỗi chữ
 */
export function docso(numberStr) {
    const num = String(numberStr).replace(/[.,]/g, '');
    if (num === '0') return 'Không';
    if (num === '' || isNaN(parseInt(num))) return '';
    const words = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    const units = ["", "nghìn", "triệu", "tỷ"];
    const readChunk = (chunkStr, isFirstChunk) => {
        if (!chunkStr || parseInt(chunkStr, 10) === 0) return "";
        let n = chunkStr.padStart(3, '0').split('').map(Number);
        if (chunkStr.length < 3 && isFirstChunk) { 
            if (chunkStr.length === 1) n = [0, 0, Number(chunkStr)];
            else if (chunkStr.length === 2) n = [0, Number(chunkStr[0]), Number(chunkStr[1])];
        }
        const [tram, chuc, donvi] = n; let str = "";
        if (tram > 0) { str += words[tram] + " trăm "; } 
        else if (!isFirstChunk && (chuc > 0 || donvi > 0)) { str += "không trăm "; }
        if (chuc === 0 && donvi !== 0) { if (tram > 0 || !isFirstChunk) str += "linh "; } 
        else if (chuc === 1) { str += "mười "; } 
        else if (chuc > 1) { str += words[chuc] + " mươi "; }
        if (donvi > 0) {
             if (chuc === 0) {
                 if((tram > 0 || !isFirstChunk) && parseInt(chunkStr, 10) > 0) str += words[donvi]; 
                 else if (isFirstChunk) str+= words[donvi]; 
             }
             else if (chuc === 1) { 
                if (donvi === 1) str += "một"; 
                else if (donvi === 5) str += "lăm"; 
                else str += words[donvi];
            } else { 
                if (donvi === 1) str += "mốt"; 
                else if (donvi === 5) str += "lăm"; 
                else str += words[donvi];
            }
        }
        return str.trim();
    };
    const chunks = []; let tempNum = num;
    while (tempNum.length > 0) { chunks.unshift(tempNum.substring(Math.max(0, tempNum.length - 3))); tempNum = tempNum.substring(0, tempNum.length - 3); }
    if (chunks.length > units.length) return "Số quá lớn";
    let result = chunks.map((chunk, i) => { const text = readChunk(chunk, i === 0); if (text) { return text + " " + units[chunks.length - 1 - i]; } return ""; }).filter(Boolean).join(" ").replace(/\s+/g, ' ').trim();
    return result.charAt(0).toUpperCase() + result.slice(1);
}

/**
 * Tạo hàm debounce (trì hoãn).
 * Sẽ dùng cho Bước 2: Auto-save.
 */
export function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}