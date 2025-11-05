// js/storageManager.js
// Quản lý việc đọc/ghi dữ liệu vào localStorage (Cài đặt, Draft, Template).
import { DOM } from './dom.js';
import { showNotification } from './utils.js';
import { setRegionDefinitions, setRegionLock, regionDefinitions } from './state.js';
import { lockRegions, unlockRegions } from './uiController.js';
import { parseFilterString } from './utils.js';

// === HÀM HELPER CHUNG ===
/**
 * Lưu dữ liệu an toàn vào localStorage
 * @param {string} key
 * @param {any} data
 */
function saveToLocal(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error("Lỗi khi lưu vào localStorage:", e);
    }
}

/**
 * Tải dữ liệu an toàn từ localStorage
 * @param {string} key
 * @returns {any | null}
 */
function loadFromLocal(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error("Lỗi khi tải từ localStorage:", e);
        return null;
    }
}


// === QUẢN LÝ VÙNG ===
const REGION_DEFINITIONS_KEY = 'zengAppRegionDefinitions';

export function loadSavedRegions() {
    try {
        const savedDefinitions = loadFromLocal(REGION_DEFINITIONS_KEY);
        if (savedDefinitions && savedDefinitions.trim() !== '') {
            DOM.regionDefinitionsInput.value = savedDefinitions;
            parseAndSaveRegions(true); // true = silent mode
            lockRegions();
        } else {
            unlockRegions();
        }
    } catch (error) {
        console.error("Lỗi khi tải từ localStorage:", error);
        showNotification('Không thể tải định nghĩa đã lưu.', 'error');
        unlockRegions();
    }
}

export function parseAndSaveRegions(silent = false) {
    const text = DOM.regionDefinitionsInput.value;
    const newDefinitions = {}; 

    while (DOM.regionSelect.options.length > 1) {
        DOM.regionSelect.remove(1);
    }

    const lines = text.split('\n');
    let regionsAdded = 0;

    lines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const name = line.substring(0, colonIndex).trim();
            const rulesString = line.substring(colonIndex + 1).trim();
            
            if (name && rulesString) {
                const parsedRules = parseFilterString(rulesString);
                if (parsedRules) {
                    newDefinitions[name] = parsedRules;
                    
                    const option = document.createElement('option');
                    option.value = name;
                    option.textContent = name;
                    DOM.regionSelect.appendChild(option);
                    regionsAdded++;
                }
            }
        }
    });

    setRegionDefinitions(newDefinitions);
    saveToLocal(REGION_DEFINITIONS_KEY, text);

    if (!silent) {
        if (regionsAdded > 0) {
            showNotification(`Đã lưu thành công ${regionsAdded} vùng.`, 'success');
        } else {
            showNotification('Không tìm thấy định nghĩa vùng hợp lệ.', 'info');
        }
        
        if (text.trim() !== '') {
            lockRegions();
        } else {
            unlockRegions();
        }
    }
}


// === Logic cho Auto-save & Drafts ===
const DRAFT_KEY_PREFIX = 'zengApp_draft_';

export function saveDetailedDraft(soSo, draftData) {
    if (!soSo || soSo === 'manual') return; 
    const key = `${DRAFT_KEY_PREFIX}${soSo}`;
    saveToLocal(key, draftData);
    console.log(`Đã lưu draft cho số sổ: ${soSo}`);
}

export function loadDetailedDraft(soSo) {
    if (!soSo) return null;
    const key = `${DRAFT_KEY_PREFIX}${soSo}`;
    const data = loadFromLocal(key);
    if (data === null) return null;

    // Kiểm tra nếu dữ liệu bị hỏng
    if (typeof data === 'object') {
        return data;
    } else {
        console.error("Dữ liệu draft bị hỏng, đang xóa:", data);
        clearDetailedDraft(soSo);
        return null;
    }
}

export function clearDetailedDraft(soSo) {
    if (!soSo) return;
    const key = `${DRAFT_KEY_PREFIX}${soSo}`;
    localStorage.removeItem(key);
}


// === ĐÃ XÓA: Logic cho Template Báo cáo Thủ công ===


// === Logic cho Cài đặt (Dark Mode) ===
const SETTINGS_KEY = 'zengApp_settings';

/**
 * Tải cài đặt của người dùng.
 * @returns {object} Đối tượng cài đặt
 */
export function loadSettings() {
    return loadFromLocal(SETTINGS_KEY) || { darkMode: false }; // Mặc định là light mode
}

/**
 * Lưu cài đặt của người dùng.
 * @param {object} settings Đối tượng cài đặt
 */
export function saveSettings(settings) {
    saveToLocal(SETTINGS_KEY, settings);
}