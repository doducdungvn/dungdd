// js/excelProcessor.js
// Chịu trách nhiệm đọc và phân tích file Excel (TRÊN LUỒNG CHÍNH).

import { 
    setExcelData1, 
    setExcelData2, 
    setDateRangeText
} from './state.js';
import { 
    showLoading, 
    hideLoading, 
    showNotification 
} from './utils.js';

/**
 * Xử lý file Excel (đồng bộ) khi người dùng chọn.
 * @param {File} file Đối tượng file
 * @param {number} fileNumber 1 cho Biểu 31, 2 cho Biểu 35
 * @param {string} inputId ID của input
 */
export function handleFile(file, fileNumber, inputId) {
    if (!file) return;
    showLoading();
    
    const fileInput = document.getElementById(inputId);
    const reader = new FileReader();

    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            // === XỬ LÝ TRỰC TIẾP ===
            const workbook = XLSX.read(data, { type: "array" }); 
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet, { defval: "" });

            if (!jsonData || jsonData.length === 0) {
                throw new Error("File không có dữ liệu hoặc định dạng không hợp lệ.");
            }

            if (fileNumber === 1) {
                setExcelData1(jsonData); // Cập nhật state
                let newDateRangeText = "Chưa có ngày";
                let dateRow = jsonData.find(r => Object.values(r).some(v => typeof v === "string" && v.includes("Tõ ngµy")));
                
                if (dateRow) {
                    let text = Object.values(dateRow).find(v => typeof v === "string" && v.includes("Tõ ngµy"));
                    let matchRange = text.match(/Tõ ngµy\s*(\d{2}\/\d{2})\/\d{4}.*®Õn ngµy\s*(\d{2}\/\d{2})\/\d{4}/);
                    if (matchRange) {
                        newDateRangeText = matchRange[1] === matchRange[2] ? `Ngày ${matchRange[1]}` : `Từ ${matchRange[1]} đến ${matchRange[2]}`;
                    }
                } else {
                    let singleDateRow = jsonData.find(r => Object.values(r).some(v => typeof v === "string" && v.match(/(\d{2}\/\d{2}\/\d{4})/i)));
                    if (singleDateRow) {
                        let singleText = Object.values(singleDateRow).find(v => typeof v === "string" && v.match(/(\d{2}\/\d{2}\/\d{4})/i));
                        let matchSingle = singleText.match(/(\d{2}\/\d{2}\/\d{4})/i);
                        if (matchSingle) {
                            newDateRangeText = `Ngày ${matchSingle[1].substring(0, 5)}`;
                        }
                    }
                }
                setDateRangeText(newDateRangeText); // Cập nhật state
            } else {
                setExcelData2(jsonData); // Cập nhật state
            }
            
            showNotification(`Đã nạp dữ liệu ${file.name} thành công!`, 'success');
            if (fileInput) fileInput.classList.add('loaded');
        } catch (error) {
            console.error("Lỗi khi xử lý file:", error);
            showNotification(`Lỗi: ${error.message}. Vui lòng kiểm tra lại file.`, 'error');
            if (fileInput) {
                fileInput.classList.remove('loaded');
                fileInput.value = '';
            }
        } finally {
            hideLoading();
        }
    };

    reader.onerror = () => {
        showNotification(`Không thể đọc file ${file.name}.`, 'error');
        hideLoading();
    }
    
    reader.readAsArrayBuffer(file);
}