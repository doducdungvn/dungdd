// Predefined shorthands map from thau_lode.html
const shorthands = {
  "k": "00.11.22.33.44.55.66.77.88.99",
  "kl": "050.161.272.383.494",
  "apkep": "010.121.232.343.454.565.676.787.898",
  "kepam": "070.141.292.363.585",
  "t0": "00.19.28.37.46.55.64.73.82.91",
  "t1": "01.29.38.47.56.65.74.83.92.10",
  "t2": "02.11.20.39.48.57.66.75.84.93",
  "t3": "03.121.30.49.58.676.85.94",
  "t4": "04.13.22.31.40.59.68.77.86.95",
  "t5": "05.14.232.41.50.69.787.96",
  "t6": "06.15.24.33.42.51.60.79.88.97",
  "t7": "07.16.25.343.52.61.70.89.98",
  "t8": "08.17.26.35.44.53.62.71.80.99",
  "t9": "09.18.27.36.454.63.72.81.90",
  "cham0": "00.010.020.030.040.050.060.070.080.090",
  "cham1": "101.11.121.131.141.151.161.171.181.191",
  "cham2": "202.212.22.232.242.252.262.272.282.292",
  "cham3": "303.313.323.33.343.353.363.373.383.393",
  "cham4": "404.414.424.434.44.454.464.474.484.494",
  "cham5": "505.515.525.535.545.55.565.575.585.595",
  "cham6": "606.616.626.636.646.656.66.676.686.696",
  "cham7": "707.717.727.737.747.757.767.77.787.797",
  "cham8": "808.818.828.838.848.858.868.878.88.898",
  "cham9": "909.919.929.939.949.959.969.979.989.99",
  "cc": "00.22.44.66.88.02.20.04.40.06.60.08.80.242.262.282.464.484.686",
  "cl": "01.03.05.07.09.21.23.25.27.29.41.43.45.47.49.61.63.65.67.69.81.83.85.87.89",
  "lc": "10.12.14.16.18.30.32.34.36.38.50.52.54.56.58.70.72.74.76.78.90.92.94.96.98",
  "ll": "11.33.55.77.99.131.151.171.191.353.373.393.575.595.797",
  "d0": "00.01.02.03.04.05.06.07.08.09",
  "d1": "10.11.12.13.14.15.16.17.18.19",
  "d2": "20.21.22.23.24.25.26.27.28.29",
  "d3": "30.31.32.33.34.35.36.37.38.39",
  "d4": "40.41.42.43.44.45.46.47.48.49",
  "d5": "50.51.52.53.54.55.56.57.58.59",
  "d6": "60.61.62.63.64.65.66.67.68.69",
  "d7": "70.71.72.73.74.75.76.77.78.79",
  "d8": "80.81.82.83.84.85.86.87.88.89",
  "d9": "90.91.92.93.94.95.96.97.98.99",
  "d'0": "00.10.20.30.40.50.60.70.80.90",
  "d'1": "01.11.21.31.41.51.61.71.81.91",
  "d'2": "02.12.22.32.42.52.62.72.82.92",
  "d'3": "03.13.23.33.43.53.63.73.83.93",
  "d'4": "04.14.24.34.44.54.64.74.84.94",
  "d'5": "05.15.25.35.45.55.65.75.85.95",
  "d'6": "06.16.26.36.46.56.66.76.86.96",
  "d'7": "07.17.27.37.47.57.67.77.87.97",
  "d'8": "08.18.28.38.48.58.68.78.88.98",
  "d'9": "09.19.29.39.49.59.69.79.89.99",
  "h05": "050.55.00",
  "h50": "050.55.00",
  "h55": "050.55.00",
  "h00": "050.55.00",
  "h16": "161.66.11",
  "h61": "161.66.11",
  "h66": "161.66.11",
  "h11": "161.66.11",
  "h27": "272.22.77",
  "h72": "272.22.77",
  "h22": "272.22.77",
  "h77": "272.22.77",
  "h38": "383.33.88",
  "h83": "383.33.88",
  "h33": "383.33.88",
  "h88": "383.33.88",
  "h49": "494.44.99",
  "h94": "494.44.99",
  "h44": "494.44.99",
  "h99": "494.44.99",
  "h01": "01.10.06.60.51.15.56.65",
  "h10": "01.10.06.60.51.15.56.65",
  "h06": "01.10.06.60.51.15.56.65",
  "h60": "01.10.06.60.51.15.56.65",
  "h15": "01.10.06.60.51.15.56.65",
  "h51": "01.10.06.60.51.15.56.65",
  "h56": "01.10.06.60.51.15.56.65",
  "h65": "01.10.06.60.51.15.56.65",
  "h02": "02.20.07.70.52.25.57.75",
  "h20": "02.20.07.70.52.25.57.75",
  "h07": "02.20.07.70.52.25.57.75",
  "h70": "02.20.07.70.52.25.57.75",
  "h52": "02.20.07.70.52.25.57.75",
  "h25": "02.20.07.70.52.25.57.75",
  "h57": "02.20.07.70.52.25.57.75",
  "h75": "02.20.07.70.52.25.57.75",
  "h03": "03.30.08.80.53.35.58.85",
  "h30": "03.30.08.80.53.35.58.85",
  "h08": "03.30.08.80.53.35.58.85",
  "h80": "03.30.08.80.53.35.58.85",
  "h53": "03.30.08.80.53.35.58.85",
  "h35": "03.30.08.80.53.35.58.85",
  "h58": "03.30.08.80.53.35.58.85",
  "h85": "03.30.08.80.53.35.58.85",
  "h04": "04.40.09.90.54.45.59.95",
  "h40": "04.40.09.90.54.45.59.95",
  "h09": "04.40.09.90.54.45.59.95",
  "h90": "04.40.09.90.54.45.59.95",
  "h54": "04.40.09.90.54.45.59.95",
  "h45": "04.40.09.90.54.45.59.95",
  "h59": "04.40.09.90.54.45.59.95",
  "h95": "04.40.09.90.54.45.59.95",
  "h12": "121.171.626.676",
  "h21": "121.171.626.676",
  "h17": "121.171.626.676",
  "h71": "121.171.626.676",
  "h62": "121.171.626.676",
  "h26": "121.171.626.676",
  "h67": "121.171.626.676",
  "h76": "121.171.626.676",
  "h13": "131.181.636.686",
  "h31": "131.181.636.686",
  "h18": "131.181.636.686",
  "h81": "131.181.636.686",
  "h63": "131.181.636.686",
  "h36": "131.181.636.686",
  "h68": "131.181.636.686",
  "h86": "131.181.636.686",
  "h14": "141.191.646.696",
  "h41": "141.191.646.696",
  "h19": "141.191.646.696",
  "h91": "141.191.646.696",
  "h64": "141.191.646.696",
  "h46": "141.191.646.696",
  "h69": "141.191.646.696",
  "h96": "141.191.646.696",
  "h23": "232.282.737.787",
  "h32": "232.282.737.787",
  "h28": "232.282.737.787",
  "h82": "232.282.737.787",
  "h73": "232.282.737.787",
  "h37": "232.282.737.787",
  "h78": "232.282.737.787",
  "h87": "232.282.737.787",
  "h24": "242.292.747.797",
  "h42": "242.292.747.797",
  "h29": "242.292.747.797",
  "h92": "242.292.747.797",
  "h74": "242.292.747.797",
  "h47": "242.292.747.797",
  "h79": "242.292.747.797",
  "h97": "242.292.747.797",
  "h34": "343.393.848.898",
  "h43": "343.393.848.898",
  "h39": "343.393.848.898",
  "h93": "343.393.848.898",
  "h84": "343.393.848.898",
  "h48": "343.393.848.898",
  "h89": "343.393.848.898",
  "h98": "343.393.848.898",
  "tongto": "05.06.07.08.09.14.15.16.17.18.23.24.25.26.27.32.33.34.35.36.41.42.43.44.45.50.51.52.53.54.60.61.62.63.69.70.71.72.78.79.80.81.87.88.89.90.96.97.98.99",
  "tongbe": "00.01.02.03.04.10.11.12.13.19.20.21.22.28.29.30.31.37.38.39.40.46.47.48.49.55.56.57.58.59.64.65.66.67.68.73.74.75.76.77.82.83.84.85.86.91.92.93.94.95",
  "tongle": "01.03.05.07.09.10.12.14.16.18.21.23.25.27.29.30.32.34.36.38.41.43.45.47.49.50.52.54.56.58.61.63.65.67.69.70.72.74.76.78.81.83.85.87.89.90.92.94.96.98",
  "tongchan": "00.02.04.06.08.11.13.15.17.19.20.22.24.26.28.31.33.35.37.39.40.42.44.46.48.51.53.55.57.59.60.62.64.66.68.71.73.75.77.79.80.82.84.86.88.91.93.95.97.99",
  "toto": "55.66.77.88.99.565.575.585.595.676.686.696.787.797.898",
  "tobe": "90.91.92.93.94.80.81.82.83.84.70.71.72.73.74.60.61.62.63.64.50.51.52.53.54",
  "beto": "05.06.07.08.09.15.16.17.18.19.25.26.27.28.29.35.36.37.38.39.45.46.47.48.49",
  "bebe": "00.11.22.33.44.01.10.02.20.03.30.04.40.121.131.141.232.242.343",
  "dauto": "50.51.52.53.54.55.56.57.58.59.60.61.62.63.64.65.66.67.68.69.70.71.72.73.74.75.76.77.78.79.80.81.82.83.84.85.86.87.88.89.90.91.92.93.94.95.96.97.98.99",
  "daube": "00.01.02.03.04.05.06.07.08.09.10.11.12.13.14.15.16.17.18.19.20.21.22.23.24.25.26.27.28.29.30.31.32.33.34.35.36.37.38.39.40.41.42.43.44.45.46.47.48.49",
  "daule": "10.11.12.13.14.15.16.17.18.19.30.31.32.33.34.35.36.37.38.39.50.51.52.53.54.55.56.57.58.59.70.71.72.73.74.75.76.77.78.79.90.91.92.93.94.95.96.97.98.99",
  "dauchan": "00.01.02.03.04.05.06.07.08.09.20.21.22.23.24.25.26.27.28.29.40.41.42.43.44.45.46.47.48.49.60.61.62.63.64.65.66.67.68.69.80.81.82.83.84.85.86.87.88.89",
  "ditchan": "00.02.04.06.08.10.12.14.16.18.20.22.24.26.28.30.32.34.36.38.40.42.44.46.48.50.52.54.56.58.60.62.64.66.68.70.72.74.76.78.80.82.84.86.88.90.92.94.96.98",
  "ditle": "01.03.05.07.09.11.13.15.17.19.21.23.25.27.29.31.33.35.37.39.41.43.45.47.49.51.53.55.57.59.61.63.65.67.69.71.73.75.77.79.81.83.85.87.89.91.93.95.97.99",
  "ditbe": "00.01.02.03.04.10.11.12.13.14.20.21.22.23.24.30.31.32.33.34.40.41.42.43.44.50.51.52.53.54.60.61.62.63.64.70.71.72.73.74.80.81.82.83.84.90.91.92.93.94",
  "ditto": "05.06.07.08.09.15.16.17.18.19.25.26.27.28.29.35.36.37.38.39.45.46.47.48.49.55.56.57.58.59.65.66.67.68.69.75.76.77.78.79.85.86.87.88.89.95.96.97.98.99"
};

function normalizeShorthandToken(token) {
  let t = token.trim().toLowerCase();
  const dauMatch = t.match(/^dau(\d)$/);
  if (dauMatch) return 'd' + dauMatch[1];
  const ditMatch = t.match(/^dit(\d)$/);
  if (ditMatch) return "d'" + ditMatch[1];
  const heBoMatch = t.match(/^(he|bo)(\d{1,2})$/);
  if (heBoMatch) {
    let num = heBoMatch[2];
    if (num.length === 1) num = '0' + num;
    return 'h' + num;
  }
  const aliases = {
    'chanle': 'cl',
    'lechan': 'lc',
    'chanchan': 'cc',
    'lele': 'll',
    'dc': 'dauchan',
    'dl': 'daule',
    'dt': 'dauto',
    'db': 'daube',
    'tb': 'tobe',
    'tt': 'toto',
    'bt': 'beto',
    'bb': 'bebe',
    'tc': 'tongchan',
    'tl': 'tongle'
  };
  return aliases[t] || t;
}

function resolveShorthands(numbersString) {
  let s = numbersString;
  const shortcutsInput = document.getElementById("shortcuts")?.value || "";
  const shortcutsArray = shortcutsInput.split("\n");
  const customShortcuts = {};
  for (let i = 0; i < shortcutsArray.length; i++) {
    const shortcutParts = shortcutsArray[i].split("=");
    const shortcutName = shortcutParts[0]?.trim().toLowerCase();
    const shortcutValue = shortcutParts[1]?.trim();
    if (shortcutName && shortcutValue) {
      customShortcuts[shortcutName] = shortcutValue;
    }
  }

  const combinedRegex = /(dau|dit|d'|d|he|bo|t|cham)([0-9]{1,2})((?:[.,\-\s]+[0-9]{1,2})+)/gi;
  s = s.replace(combinedRegex, (match, prefix, firstDigit, rest) => {
    const digits = rest.split(/[^0-9]+/).filter(Boolean);
    const expanded = [prefix + firstDigit, ...digits.map(d => prefix + d)];
    return expanded.join(',');
  });

  const parts = s.split(/([.,\-\s]+)/);
  const resolvedParts = parts.map(part => {
    const trimmed = part.trim().toLowerCase();
    if (!trimmed) return part;
    if (customShortcuts[trimmed]) return customShortcuts[trimmed];
    const normalized = normalizeShorthandToken(part);
    if (customShortcuts[normalized]) return customShortcuts[normalized];
    if (shorthands[normalized]) return shorthands[normalized];
    return part;
  });
  return resolvedParts.join('');
}

function parseNumbersFromBetString(numbersString, betType) {
  const segments = numbersString.split(/[.,\-\s]+/).filter(s => s.length > 0);
  const numbers = []; 
  segments.forEach(seg => {
    if (!/^\d+$/.test(seg)) return;
    if (betType === 'de' || betType === 'lo') {
      if (seg.length === 1) {
        numbers.push('0' + seg);
      } else if (seg.length === 2) {
        numbers.push(seg);
      } else if (seg.length === 3) {
        numbers.push(seg.substring(0, 2));
        numbers.push(seg.substring(1, 3));
      }
    } else if (betType === 'xien') {
      if (seg.length === 2) {
        numbers.push(seg);
      }
    } else if (betType === 'bacang' || betType === 'bacang_lo') {
      if (seg.length === 3) {
        numbers.push(seg);
      }
    }
  });
  return numbers;
}

function parseCombinedInput(inputString) {
  let processedInput = inputString.replace(/[’‘ʼ＇`]/g, "'");
  const sameLinePattern = /[\s,;]+\b(đề|de|lô|lo|xiên|xien|x|x2|x3|x4)\b|[\s,;]+\b(3càng|3cang|3c|3clô|3clo|3cl)\b|[\s,;]+\b(d|l)\b(?=\s+[a-z0-9'’‘ʼ＇`])/gi;
  processedInput = processedInput.replace(sameLinePattern, (match) => {
    return "\n" + match.replace(/^[\s,;]+/g, '').trim();
  });

  const lines = processedInput.split('\n');
  const parsedBets = {
    de: [],
    lo: [],
    xien2: [],
    xien3: [],
    xien4: [],
    bacang: [],
    bacang_lo: []
  };

  const typeRegex = {
    de: /^(đề|de|d)$/i,
    lo: /^(lô|lo|l)$/i,
    xien: /^(xiên|xien|x|x2|x3|x4)$/i,
    bacang: /^(3càng|3cang|3c)$/i,
    bacang_lo: /^(3clô|3clo|3cl)$/i
  };

  let activeCategory = 'de';

  lines.forEach(line => {
    let trimmed = line.trim();
    if (!trimmed) return;

    let lineType = '';
    const spaceMatch = trimmed.match(/^(đề|de|lô|lo|xiên|xien|x|x2|x3|x4|3càng|3cang|3c|3clô|3clo|3cl|d|l)\s+(.*)$/i);
    if (spaceMatch) {
      const rawType = spaceMatch[1].toLowerCase();
      if (typeRegex.de.test(rawType)) lineType = 'de';
      else if (typeRegex.lo.test(rawType)) lineType = 'lo';
      else if (typeRegex.xien.test(rawType)) lineType = 'xien';
      else if (typeRegex.bacang.test(rawType)) lineType = 'bacang';
      else if (typeRegex.bacang_lo.test(rawType)) lineType = 'bacang_lo';

      if (lineType) {
        activeCategory = lineType;
        trimmed = spaceMatch[2].trim();
      }
    } else {
      if (trimmed.match(/^l(\d+)/i)) {
        activeCategory = 'lo';
        lineType = 'lo';
        trimmed = trimmed.substring(1).trim();
      } else if (trimmed.match(/^3c(\d+)/i)) {
        activeCategory = 'bacang';
        lineType = 'bacang';
        trimmed = trimmed.substring(2).trim();
      } else if (trimmed.match(/^3cl(\d+)/i)) {
        activeCategory = 'bacang_lo';
        lineType = 'bacang_lo';
        trimmed = trimmed.substring(3).trim();
      }
    }

    if (!lineType) lineType = activeCategory;

    const groupRegex = /([a-wy-z0-9'.,\-\s]+)([x+*])(\d+)/gi;
    let groupMatch;
    while ((groupMatch = groupRegex.exec(trimmed)) !== null) {
      const rawNumString = groupMatch[1].trim();
      const amount = parseFloat(groupMatch[3]);
      if (amount <= 0 || isNaN(amount)) continue;

      const numString = resolveShorthands(rawNumString);
      const numbers = parseNumbersFromBetString(numString, lineType);
      if (numbers.length === 0) continue;

      if (lineType === 'xien') {
        if (numbers.length >= 2 && numbers.length <= 4) {
          parsedBets[`xien${numbers.length}`].push({
            numbers: numbers,
            amount: amount
          });
        }
      } else {
        numbers.forEach(num => {
          parsedBets[lineType].push({
            numbers: [num],
            amount: amount
          });
        });
      }
    }
  });

  return parsedBets;
}

// Visual layout helper for 2-digit board
function updateTwoDigitBoard() {
  const specialPrizeInput = document.getElementById('specialPrizeInput');
  const allPrizesInput = document.getElementById('allPrizesInput');
  const board = document.getElementById('twoDigitBoard');
  const container = document.getElementById('twoDigitBoardContainer');
  const lbl27Giai = document.getElementById('lbl27Giai');

  if (!specialPrizeInput || !allPrizesInput || !board || !container) return;

  const specialPrize = specialPrizeInput.value.trim();
  const allPrizesRaw = allPrizesInput.value.trim();

  if (!specialPrize || !allPrizesRaw) {
    container.classList.add('hidden');
    return;
  }

  const prizes = allPrizesRaw.split(/[\s,]+/).filter(Boolean);
  if (prizes.length === 0) {
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');
  const deNumber = specialPrize.slice(-2);
  const bacangDe = specialPrize.length >= 3 ? specialPrize.slice(-3) : specialPrize;
  
  if (lbl27Giai) {
    lbl27Giai.innerHTML = `<span class="text-red-600 dark:text-red-400 font-bold">GIẢI ĐẶC BIỆT</span> <span class="text-red-500 font-black text-lg ml-1">${bacangDe}</span>`;
  }

  // Extract last 2 digits and sort
  const digits = prizes.map(p => p.slice(-2));
  digits.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  
  let html = "";
  digits.forEach((last2) => {
    const isDe = last2 === deNumber;
    const bgClass = isDe 
      ? 'bg-red-600 dark:bg-red-500 text-white font-extrabold px-2 py-0.5 rounded shadow' 
      : 'bg-gray-200 dark:bg-dark-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded border border-gray-300 dark:border-gray-600';
      
    html += `<span class="${bgClass}">${last2}</span>`;
  });
  
  board.innerHTML = html;
}

// Crawler states
let currentSource = 'minhngoc';
let fetchedPrizesData = null;

function isToday(dateString) {
  if (!dateString) return true;
  const localDate = new Date(Date.now() - (new Date().getTimezoneOffset()*60*1000)).toISOString().split('T')[0];
  return dateString === localDate;
}

function formatDateDDMMYYYY(dateString) {
  if (!dateString) return '';
  const parts = dateString.split('-');
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

async function triggerAutoFetch() {
  const fetchBtnSpinner = document.getElementById('fetchBtnSpinner');
  const fetchBtnText = document.getElementById('fetchBtnText');
  const btnFetchResults = document.getElementById('btnFetchResults');
  const autoResultStatus = document.getElementById('autoResultStatus');
  const resultDateInput = document.getElementById('resultDateInput');
  const specialPrizeInput = document.getElementById('specialPrizeInput');
  const allPrizesInput = document.getElementById('allPrizesInput');

  if (!btnFetchResults) return;

  if (fetchBtnSpinner) fetchBtnSpinner.classList.remove('hidden');
  if (fetchBtnText) fetchBtnText.innerText = 'Đang tải...';
  btnFetchResults.disabled = true;
  if (autoResultStatus) {
    autoResultStatus.innerText = 'Đang tải...';
    autoResultStatus.className = 'text-[10px] font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950/20 dark:text-indigo-400 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-900/30';
    autoResultStatus.classList.remove('hidden');
  }

  const targetDate = resultDateInput ? resultDateInput.value : '';

  try {
    let data = null;
    let errors = [];

    // Try selected source first
    if (currentSource === 'minhngoc') {
      try { data = await fetchFromMinhNgoc(targetDate); } catch (e) { errors.push("Minh Ngọc: " + e.message); }
    } else if (currentSource === 'xskt') {
      try { data = await fetchFromXSKT(targetDate); } catch (e) { errors.push("XSKT: " + e.message); }
    } else {
      try { data = await fetchFromMKetqua(targetDate); } catch (e) { errors.push("mketqua: " + e.message); }
    }

    // Fallback chain
    if (!data && currentSource !== 'minhngoc') {
      try { data = await fetchFromMinhNgoc(targetDate); } catch (e) { errors.push("Minh Ngọc (fallback): " + e.message); }
    }
    if (!data && currentSource !== 'xskt') {
      try { data = await fetchFromXSKT(targetDate); } catch (e) { errors.push("XSKT (fallback): " + e.message); }
    }
    if (!data && currentSource !== 'mketqua') {
      try { data = await fetchFromMKetqua(targetDate); } catch (e) { errors.push("mketqua (fallback): " + e.message); }
    }

    if (!data) {
      throw new Error(errors.join(" | "));
    }

    // Visual sync source buttons
    updateSourceButtons(data.sourceName);

    fetchedPrizesData = data;
    const dayMonth = data.dateText.split('/').slice(0, 2).join('/');
    if (autoResultStatus) {
      autoResultStatus.innerText = `Tải Ok! ${dayMonth}`;
      autoResultStatus.className = 'text-[10px] font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/30';
      autoResultStatus.classList.remove('hidden');
    }
    
    if (specialPrizeInput) specialPrizeInput.value = data.specialPrize;
    if (allPrizesInput) allPrizesInput.value = data.prizes.join(', ');

    updateTwoDigitBoard();

  } catch (error) {
    console.error(error);
    if (autoResultStatus) {
      autoResultStatus.innerText = `Lỗi!`;
      autoResultStatus.className = 'text-[10px] font-bold text-rose-600 bg-rose-100 dark:bg-rose-950/20 dark:text-rose-400 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-900/30';
      autoResultStatus.classList.remove('hidden');
    }
  } finally {
    if (fetchBtnSpinner) fetchBtnSpinner.classList.add('hidden');
    if (fetchBtnText) fetchBtnText.innerText = 'Tải KQ';
    btnFetchResults.disabled = false;
  }
}

function updateSourceButtons(sourceName) {
  const btnMinhNgoc = document.getElementById('btnSourceMinhNgoc');
  const btnXSKT = document.getElementById('btnSourceXSKT');
  const btnMKetqua = document.getElementById('btnSourceMKetqua');
  if (!btnMinhNgoc || !btnXSKT || !btnMKetqua) return;

  const activeCls = 'px-2.5 py-1 rounded bg-primary text-white font-semibold border border-transparent';
  const inactiveCls = 'px-2.5 py-1 rounded bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 font-semibold border border-transparent';

  btnMinhNgoc.className = inactiveCls;
  btnXSKT.className = inactiveCls;
  btnMKetqua.className = inactiveCls;

  if (sourceName === "Minh Ngọc") {
    currentSource = 'minhngoc';
    btnMinhNgoc.className = activeCls;
  } else if (sourceName === "XSKT.com.vn") {
    currentSource = 'xskt';
    btnXSKT.className = activeCls;
  } else if (sourceName === "mketqua.net") {
    currentSource = 'mketqua';
    btnMKetqua.className = activeCls;
  }
}

async function fetchHtmlWithProxy(targetUrl) {
  try {
    const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}&cache=${(new Date()).getTime()}`);
    if (!res.ok) throw new Error();
    const json = await res.json();
    if (json.contents) return json.contents;
  } catch (e) {
    console.warn("Proxy allorigins failed, trying corsproxy...");
  }
  const res = await fetch(`https://corsproxy.io/?${encodeURIComponent(targetUrl)}`);
  if (!res.ok) throw new Error("Cả 2 dịch vụ proxy đều không tải được dữ liệu.");
  return await res.text();
}

async function fetchFromMinhNgoc(dateStr) {
  const useMain = !dateStr || isToday(dateStr);
  const url = useMain 
    ? 'https://www.minhngoc.net.vn/xo-so-mien-bac.html' 
    : `https://www.minhngoc.net.vn/xo-so-mien-bac/ngay-${formatDateDDMMYYYY(dateStr)}.html`;

  const html = await fetchHtmlWithProxy(url);
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const box = doc.querySelector('.box_kqxs');
  if (!box) throw new Error("Không tìm thấy bảng kết quả (Minh Ngọc).");

  const titleEl = box.querySelector('.title');
  const dateText = titleEl ? titleEl.textContent.trim().replace("KẾT QUẢ XỔ SỐ Miền Bắc - ", "") : "";
  const divs = box.querySelectorAll('td[class^="giai"] div');
  const prizes = Array.from(divs).map(div => div.textContent.trim()).filter(Boolean);

  if (prizes.length === 0) throw new Error("Không trích xuất được giải.");
  return {
    sourceName: "Minh Ngọc",
    dateText: dateText || formatDateDDMMYYYY(dateStr),
    specialPrize: prizes[0],
    prizes
  };
}

async function fetchFromXSKT(dateStr) {
  const useMain = !dateStr || isToday(dateStr);
  const url = useMain 
    ? 'https://xskt.com.vn/xsmb' 
    : `https://xskt.com.vn/xsmb-ngay-${formatDateDDMMYYYY(dateStr)}`;

  const html = await fetchHtmlWithProxy(url);
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const table = doc.querySelector('#kqMB') || doc.querySelector('table');
  if (!table) throw new Error("Không tìm thấy bảng kết quả (XSKT).");

  const titleEl = doc.querySelector('h1') || doc.querySelector('.title');
  const dateText = titleEl ? titleEl.textContent.trim().replace("Kết quả xổ số Miền Bắc ", "") : "";

  const classes = ['db', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7'];
  const prizes = [];
  classes.forEach(cls => {
    const cells = table.querySelectorAll(`td.${cls}`);
    cells.forEach(cell => {
      const text = cell.innerText || cell.textContent;
      const nums = text.split(/[\s\n\r,.\-+*]+/).map(n => n.trim()).filter(n => n.length > 0 && /^\d+$/.test(n));
      prizes.push(...nums);
    });
  });

  if (prizes.length === 0) throw new Error("Không trích xuất được giải.");
  return {
    sourceName: "XSKT.com.vn",
    dateText: dateText || formatDateDDMMYYYY(dateStr),
    specialPrize: prizes[0],
    prizes
  };
}

async function fetchFromMKetqua(dateStr) {
  const useMain = !dateStr || isToday(dateStr);
  const url = useMain 
    ? 'https://mketqua.net/' 
    : `https://mketqua.net/xo-so-truyen-thong.php?ngay=${formatDateDDMMYYYY(dateStr)}`;

  const html = await fetchHtmlWithProxy(url);
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const prizes = [];
  for (let g = 0; g <= 7; g++) {
    const divs = doc.querySelectorAll(`div[id^="rs_${g}_"]`);
    divs.forEach(div => {
      prizes.push(div.textContent.trim());
    });
  }

  if (prizes.length === 0) throw new Error("Không trích xuất được giải.");
  const dateEl = doc.querySelector('#result_date');
  const dateText = dateEl ? dateEl.textContent.trim() : "";

  return {
    sourceName: "mketqua.net",
    dateText: dateText || formatDateDDMMYYYY(dateStr),
    specialPrize: prizes[0],
    prizes
  };
}

// Initialize default values
function initializeDefaultValues() {
  for (let i = 1; i <= 4; i++) {
    const rEl = document.getElementById(`result${i}`);
    const bEl = document.getElementById(`bonusResult${i}`);
    if (rEl) rEl.textContent = "0";
    if (bEl) bEl.textContent = "0";
  }
  const tEl = document.getElementById('total');
  const btEl = document.getElementById('bonusTotal');
  const fEl = document.getElementById('finalResult');
  if (tEl) tEl.textContent = "0";
  if (btEl) btEl.textContent = "0";
  if (fEl) fEl.textContent = "0";
}

function convertInputFormat(input) {
  return input.replace(/,/g, '.');
}

function saveShortcuts() {
  const shortcutsInput = document.getElementById("shortcuts")?.value || "";
  localStorage.setItem("shortcutsData", shortcutsInput);
}

function loadShortcuts() {
  const shortcutsData = localStorage.getItem("shortcutsData");
  const shortcutsArea = document.getElementById("shortcuts");
  if (shortcutsData && shortcutsArea) {
    shortcutsArea.value = shortcutsData;
  }
}

// Calculation Engine
function calculateSum() {
  saveShortcuts();

  const inputEl = document.getElementById("combinedBetInput") || document.getElementById("numbers");
  if (!inputEl) return;
  const inputString = inputEl.value;

  const specialPrizeEl = document.getElementById("specialPrizeInput") || document.getElementById("specialPrize");
  const specialPrizeRaw = specialPrizeEl ? specialPrizeEl.value.trim() : "";
  const specialPrizeLast2 = specialPrizeRaw ? specialPrizeRaw.slice(-2) : "";
  const specialPrizeLast3 = specialPrizeRaw ? specialPrizeRaw.slice(-3) : "";

  const allPrizesEl = document.getElementById("allPrizesInput") || document.getElementById("twentySevenNumbers");
  const allPrizesRaw = allPrizesEl ? allPrizesEl.value.trim() : "";
  const allPrizes = allPrizesRaw ? allPrizesRaw.split(/[\s,]+/).filter(Boolean) : [];
  const allPrizesLast2 = allPrizes.map(p => p.slice(-2));
  const allPrizesLast3 = allPrizes.filter(p => p.length >= 3).map(p => p.slice(-3));

  const parsedBets = parseCombinedInput(inputString);

  const resultDiv = document.getElementById("result");
  const modifiedResultDiv = document.getElementById("modifiedResult");
  const inputListDiv = document.getElementById("inputList");

  if (resultDiv) resultDiv.innerHTML = "";
  if (modifiedResultDiv) modifiedResultDiv.innerHTML = "";
  if (inputListDiv) inputListDiv.innerHTML = "";
  let deBetSum = 0;
  let deWinSum = 0;
  let loBetSum = 0;
  let loWinSum = 0;
  let xienBetSum = 0;
  let xienWinSum = 0;
  let baCangBetSum = 0;
  let baCangWinSum = 0;

  // New variables for detailed calculations
  let baCangDeBetSum = 0;
  let baCangDeWinSum = 0;
  let baCangDeApMaWinSum = 0;
  let baCangLoBetSum = 0;
  let baCangLoWinSum = 0;

  let totalUniquePairs = 0;
  let totalBetCount = 0;
  let totalBetValue = 0;

  const renderDetail = (numStr, amount, type, occurrences = 0) => {
    if (!inputListDiv) return;
    const li = document.createElement("li");
    let text = `${type} ${numStr}x${amount}`;
    if (occurrences > 0) {
      li.innerHTML = `<span class="matching-number">${type} ${numStr}x${amount}</span>`;
      if (occurrences > 1) {
        li.innerHTML += ` <span class="matching-number">(${occurrences} nháy)</span>`;
      }
    } else {
      li.textContent = text;
    }
    inputListDiv.appendChild(li);
    totalBetCount++;
    totalBetValue += amount;
  };

  // 1. Đề
  const deSums = {};
  parsedBets.de.forEach(bet => {
    const num = bet.numbers[0];
    deSums[num] = (deSums[num] || 0) + bet.amount;
    deBetSum += bet.amount;

    const isMatch = num === specialPrizeLast2;
    if (isMatch) {
      deWinSum += bet.amount;
    }
    renderDetail(num, bet.amount, "Đề", isMatch ? 1 : 0);
  });

  // 2. Lô
  const loSums = {};
  parsedBets.lo.forEach(bet => {
    const num = bet.numbers[0];
    loSums[num] = (loSums[num] || 0) + bet.amount;
    loBetSum += bet.amount;

    const occurrences = allPrizesLast2.filter(p => p === num).length;
    if (occurrences > 0) {
      loWinSum += occurrences * bet.amount;
    }
    renderDetail(num, bet.amount, "Lô", occurrences);
  });

  // 3. Xiên
  const xienBets = [...parsedBets.xien2, ...parsedBets.xien3, ...parsedBets.xien4];
  xienBets.forEach(bet => {
    const size = bet.numbers.length;
    xienBetSum += bet.amount;

    const allHit = bet.numbers.every(num => allPrizesLast2.includes(num));
    if (allHit) {
      // old fallback calculations
      const winRate = size === 2 ? 15 : (size === 3 ? 50 : 120);
      xienWinSum += bet.amount * winRate;
    }
    renderDetail(bet.numbers.join('-'), bet.amount, `Xiên${size}`, allHit ? 1 : 0);
  });

  // 4. 3 Càng & 3 Càng Lô
  const baCangSums = {};
  parsedBets.bacang.forEach(bet => {
    const num = bet.numbers[0];
    baCangSums[num] = (baCangSums[num] || 0) + bet.amount;
    baCangBetSum += bet.amount;
    baCangDeBetSum += bet.amount;

    const match3 = num === specialPrizeLast3;
    const match2 = num.slice(-2) === specialPrizeLast2;
    if (match3) {
      baCangWinSum += bet.amount * 400;
      baCangDeWinSum += bet.amount;
    } else if (match2) {
      baCangWinSum += bet.amount * 5;
      baCangDeApMaWinSum += bet.amount;
    }
    renderDetail(num, bet.amount, "3C", match3 ? 1 : (match2 ? 0.5 : 0));
  });

  // 3 Càng Lô
  parsedBets.bacang_lo.forEach(bet => {
    const num = bet.numbers[0];
    const costInThousands = bet.amount * 23;
    baCangBetSum += costInThousands;
    baCangLoBetSum += bet.amount;

    const occurrences = allPrizesLast3.filter(p => p === num).length;
    if (occurrences > 0) {
      baCangWinSum += occurrences * bet.amount * 960;
      baCangLoWinSum += occurrences * bet.amount;
    }
    renderDetail(num, bet.amount, "3CLô", occurrences);
  });

  // Render Kết quả column
  const renderGroupResult = (title, sumsMap, isLoto = false) => {
    if (!resultDiv) return;
    const sorted = Object.entries(sumsMap).sort((a, b) => b[1] - a[1]);
    if (sorted.length === 0) return;

    const header = document.createElement("div");
    header.innerHTML = `<strong>${title}</strong>`;
    header.className = "mt-2 border-b border-gray-100 dark:border-gray-700 pb-1 text-gray-500 text-xs";
    resultDiv.appendChild(header);

    sorted.forEach(([key, value]) => {
      const div = document.createElement("div");
      div.textContent = `${key} = ${value}${isLoto ? 'đ' : 'k'}`;
      totalUniquePairs++;

      let isWin = false;
      let hitText = "";
      if (isLoto) {
        const targetList = key.length === 3 ? allPrizesLast3 : allPrizesLast2;
        const occurrences = targetList.filter(p => p === key).length;
        if (occurrences > 0) {
          isWin = true;
          hitText = occurrences > 1 ? ` (${occurrences} nháy)` : " (Trúng)";
        }
      } else {
        if (key === specialPrizeLast2) {
          isWin = true;
          hitText = " (Trúng)";
        }
      }

      if (isWin) {
        div.className = "matching-number";
        div.textContent += hitText;
      }
      resultDiv.appendChild(div);
    });
  };

  renderGroupResult("🔴 Đề", deSums, false);
  renderGroupResult("🔵 Lô (điểm)", loSums, true);

  if (xienBets.length > 0 && resultDiv) {
    const header = document.createElement("div");
    header.innerHTML = `<strong>🟢 Xiên</strong>`;
    header.className = "mt-2 border-b border-gray-100 dark:border-gray-700 pb-1 text-gray-500 text-xs";
    resultDiv.appendChild(header);
    xienBets.forEach(bet => {
      const div = document.createElement("div");
      const allHit = bet.numbers.every(num => allPrizesLast2.includes(num));
      div.textContent = `${bet.numbers.join('-')} = ${bet.amount}k`;
      if (allHit) {
        div.className = "matching-number";
        div.textContent += " (Trúng)";
      }
      resultDiv.appendChild(div);
    });
  }

  if (Object.keys(baCangSums).length > 0 && resultDiv) {
    const header = document.createElement("div");
    header.innerHTML = `<strong>🟣 3 Càng</strong>`;
    header.className = "mt-2 border-b border-gray-100 dark:border-gray-700 pb-1 text-gray-500 text-xs";
    resultDiv.appendChild(header);
    Object.entries(baCangSums).sort((a,b) => b[1]-a[1]).forEach(([key, value]) => {
      const div = document.createElement("div");
      const match3 = key === specialPrizeLast3;
      const match2 = key.slice(-2) === specialPrizeLast2;
      div.textContent = `${key} = ${value}k`;
      if (match3) {
        div.className = "matching-number";
        div.textContent += " (Trúng 3C)";
      } else if (match2) {
        div.className = "matching-number";
        div.textContent += " (Áp Má)";
      }
      resultDiv.appendChild(div);
    });
  }

  // 3 Càng Lô sums map
  const baCangLoSums = {};
  parsedBets.bacang_lo.forEach(bet => {
    const num = bet.numbers[0];
    baCangLoSums[num] = (baCangLoSums[num] || 0) + bet.amount;
  });

  if (Object.keys(baCangLoSums).length > 0 && resultDiv) {
    renderGroupResult("🟤 3 Càng Lô (điểm)", baCangLoSums, true);
  }

  // Render Chuyển (Layoff) column
  const retainNumber = parseInt(document.getElementById("retainNumber")?.value) || 0;
  const retainType = document.querySelector('input[name="retainType"]:checked')?.value || "money";

  const renderGroupLayoff = (title, sumsMap, isLoto = false) => {
    if (!modifiedResultDiv) return;
    const sorted = Object.entries(sumsMap);
    let groupHtml = "";

    sorted.forEach(([key, value]) => {
      let modifiedSum;
      if (retainType === "money") {
        modifiedSum = value - retainNumber;
      } else {
        modifiedSum = value - (value * (retainNumber / 100));
      }

      if (modifiedSum >= 1) {
        modifiedSum = Math.trunc(modifiedSum);
        let isWin = false;
        let hitText = "";
        if (isLoto) {
          const targetList = key.length === 3 ? allPrizesLast3 : allPrizesLast2;
          const occurrences = targetList.filter(p => p === key).length;
          if (occurrences > 0) {
            isWin = true;
            hitText = occurrences > 1 ? ` (${occurrences} nháy)` : " (Trúng)";
          }
        } else {
          if (key === specialPrizeLast2) {
            isWin = true;
            hitText = " (Trúng)";
          }
        }

        if (isWin) {
          groupHtml += `<div class="matching-number">${key}x${modifiedSum}${isLoto ? 'đ' : 'k'}${hitText}</div>`;
        } else {
          groupHtml += `<div>${key}x${modifiedSum}${isLoto ? 'đ' : 'k'}</div>`;
        }
      }
    });

    if (groupHtml) {
      const header = document.createElement("div");
      header.innerHTML = `<strong>${title}</strong>`;
      header.className = "mt-2 border-b border-gray-100 dark:border-gray-700 pb-1 text-gray-500 text-xs";
      modifiedResultDiv.appendChild(header);
      
      const listContainer = document.createElement("div");
      listContainer.innerHTML = groupHtml;
      modifiedResultDiv.appendChild(listContainer);
    }
  };

  renderGroupLayoff("🔴 Đề", deSums, false);
  renderGroupLayoff("🔵 Lô", loSums, true);
  renderGroupLayoff("🟤 3 Càng Lô", baCangLoSums, true);

  let xienLayoffHtml = "";
  xienBets.forEach(bet => {
    let modifiedSum;
    if (retainType === "money") {
      modifiedSum = bet.amount - retainNumber;
    } else {
      modifiedSum = bet.amount - (bet.amount * (retainNumber / 100));
    }
    if (modifiedSum >= 1) {
      modifiedSum = Math.trunc(modifiedSum);
      const allHit = bet.numbers.every(num => allPrizesLast2.includes(num));
      if (allHit) {
        xienLayoffHtml += `<div class="matching-number">${bet.numbers.join('-')}x${modifiedSum}k (Trúng)</div>`;
      } else {
        xienLayoffHtml += `<div>${bet.numbers.join('-')}x${modifiedSum}k</div>`;
      }
    }
  });
  if (xienLayoffHtml && modifiedResultDiv) {
    const header = document.createElement("div");
    header.innerHTML = `<strong>🟢 Xiên</strong>`;
    header.className = "mt-2 border-b border-gray-100 dark:border-gray-700 pb-1 text-gray-500 text-xs";
    modifiedResultDiv.appendChild(header);
    const listContainer = document.createElement("div");
    listContainer.innerHTML = xienLayoffHtml;
    modifiedResultDiv.appendChild(listContainer);
  }

  let baCangLayoffHtml = "";
  Object.entries(baCangSums).forEach(([key, value]) => {
    let modifiedSum;
    if (retainType === "money") {
      modifiedSum = value - retainNumber;
    } else {
      modifiedSum = value - (value * (retainNumber / 100));
    }
    if (modifiedSum >= 1) {
      modifiedSum = Math.trunc(modifiedSum);
      const match3 = key === specialPrizeLast3;
      const match2 = key.slice(-2) === specialPrizeLast2;
      if (match3) {
        baCangLayoffHtml += `<div class="matching-number">${key}x${modifiedSum}k (Trúng 3C)</div>`;
      } else if (match2) {
        baCangLayoffHtml += `<div class="matching-number">${key}x${modifiedSum}k (Áp Má)</div>`;
      } else {
        baCangLayoffHtml += `<div>${key}x${modifiedSum}k</div>`;
      }
    }
  });
  if (baCangLayoffHtml && modifiedResultDiv) {
    const header = document.createElement("div");
    header.innerHTML = `<strong>🟣 3 Càng</strong>`;
    header.className = "mt-2 border-b border-gray-100 dark:border-gray-700 pb-1 text-gray-500 text-xs";
    modifiedResultDiv.appendChild(header);
    const listContainer = document.createElement("div");
    listContainer.innerHTML = baCangLayoffHtml;
    modifiedResultDiv.appendChild(listContainer);
  }

  const isNewLayout = document.getElementById("tblDeXac") !== null;

  if (isNewLayout) {
    // 1. Get rates
    const deComm = parseFloat(document.getElementById('rateDeComm')?.value) || 82;
    const dePayout = parseFloat(document.getElementById('rateDePayout')?.value) || 80;
    const loCost = parseFloat(document.getElementById('rateLoCost')?.value) || 23000;
    const loPayout = parseFloat(document.getElementById('rateLoPayout')?.value) || 80000;
    const xienComm = parseFloat(document.getElementById('rateXienComm')?.value) || 65;
    const x2Payout = parseFloat(document.getElementById('rateXien2Payout')?.value) || 15;
    const x3Payout = parseFloat(document.getElementById('rateXien3Payout')?.value) || 50;
    const x4Payout = parseFloat(document.getElementById('rateXien4Payout')?.value) || 120;
    const baCangComm = parseFloat(document.getElementById('rate3CComm')?.value) || 75;
    const baCangPayout = parseFloat(document.getElementById('rate3CPayout')?.value) || 400;
    const baCangApMa = parseFloat(document.getElementById('rate3CApMa')?.value) || 5;
    const baCangLoCost = parseFloat(document.getElementById('rate3CLoCost')?.value) || 23000;
    const baCangLoPayout = parseFloat(document.getElementById('rate3CLoPayout')?.value) || 960000;

    // Recalculate xiên winnings based on config rates!
    let configuredXienWinSum = 0;
    xienBets.forEach(bet => {
      const size = bet.numbers.length;
      const allHit = bet.numbers.every(num => allPrizesLast2.includes(num));
      if (allHit) {
        const winRate = size === 2 ? x2Payout : (size === 3 ? x3Payout : x4Payout);
        configuredXienWinSum += bet.amount * winRate;
      }
    });

    // 2. Calculations
    const deXac = deBetSum;
    const deVon = deBetSum * (deComm / 100);
    const deTrung = deWinSum * dePayout;
    const deNet = deVon - deTrung;

    const loXac = loBetSum;
    const loVon = loBetSum * (loCost / 1000);
    const loTrung = loWinSum * (loPayout / 1000);
    const loNet = loVon - loTrung;

    const xienXac = xienBetSum;
    const xienVon = xienBetSum * (xienComm / 100);
    const xienTrung = configuredXienWinSum;
    const xienNet = xienVon - xienTrung;

    const baCangXac = baCangDeBetSum;
    const baCangVon = baCangDeBetSum * (baCangComm / 100);
    const baCangTrung = baCangDeWinSum * baCangPayout + baCangDeApMaWinSum * baCangApMa;
    const baCangNet = baCangVon - baCangTrung;

    const baCangLoXac = baCangLoBetSum;
    const baCangLoVon = baCangLoBetSum * (baCangLoCost / 1000);
    const baCangLoTrung = baCangLoWinSum * (baCangLoPayout / 1000);
    const baCangLoNet = baCangLoVon - baCangLoTrung;

    const totalVon = deVon + loVon + xienVon + baCangVon + baCangLoVon;
    const totalTrung = deTrung + loTrung + xienTrung + baCangTrung + baCangLoTrung;
    const totalNet = totalVon - totalTrung;

    // 3. Update Table Cells
    const setCell = (id, val, isFormat = true) => {
      const el = document.getElementById(id);
      if (el) {
        if (isFormat) {
          el.textContent = Math.round(val).toLocaleString('vi-VN');
        } else {
          el.textContent = val;
        }
      }
    };

    setCell("tblDeXac", deXac, false);
    setCell("tblDeVon", deVon);
    setCell("tblDeTrung", deTrung);
    setCell("tblDeNet", deNet);
    if (document.getElementById("tblDeNet")) {
      document.getElementById("tblDeNet").className = deNet < 0 ? "p-2 border border-gray-200 dark:border-gray-700 text-right font-bold text-emerald-600 dark:text-emerald-400" : "p-2 border border-gray-200 dark:border-gray-700 text-right font-bold text-red-500 dark:text-red-400";
    }

    setCell("tblLoXac", loXac, false);
    setCell("tblLoVon", loVon);
    setCell("tblLoTrung", loTrung);
    setCell("tblLoNet", loNet);
    if (document.getElementById("tblLoNet")) {
      document.getElementById("tblLoNet").className = loNet < 0 ? "p-2 border border-gray-200 dark:border-gray-700 text-right font-bold text-emerald-600 dark:text-emerald-400" : "p-2 border border-gray-200 dark:border-gray-700 text-right font-bold text-red-500 dark:text-red-400";
    }

    setCell("tblXienXac", xienXac, false);
    setCell("tblXienVon", xienVon);
    setCell("tblXienTrung", xienTrung);
    setCell("tblXienNet", xienNet);
    if (document.getElementById("tblXienNet")) {
      document.getElementById("tblXienNet").className = xienNet < 0 ? "p-2 border border-gray-200 dark:border-gray-700 text-right font-bold text-emerald-600 dark:text-emerald-400" : "p-2 border border-gray-200 dark:border-gray-700 text-right font-bold text-red-500 dark:text-red-400";
    }

    setCell("tbl3CXac", baCangXac, false);
    setCell("tbl3CVon", baCangVon);
    setCell("tbl3CTrung", baCangTrung);
    setCell("tbl3CNet", baCangNet);
    if (document.getElementById("tbl3CNet")) {
      document.getElementById("tbl3CNet").className = baCangNet < 0 ? "p-2 border border-gray-200 dark:border-gray-700 text-right font-bold text-emerald-600 dark:text-emerald-400" : "p-2 border border-gray-200 dark:border-gray-700 text-right font-bold text-red-500 dark:text-red-400";
    }

    setCell("tbl3CLXac", baCangLoXac, false);
    setCell("tbl3CLVon", baCangLoVon);
    setCell("tbl3CLTrung", baCangLoTrung);
    setCell("tbl3CLNet", baCangLoNet);
    if (document.getElementById("tbl3CLNet")) {
      document.getElementById("tbl3CLNet").className = baCangLoNet < 0 ? "p-2 border border-gray-200 dark:border-gray-700 text-right font-bold text-emerald-600 dark:text-emerald-400" : "p-2 border border-gray-200 dark:border-gray-700 text-right font-bold text-red-500 dark:text-red-400";
    }

    setCell("tblTotalVon", totalVon);
    setCell("tblTotalTrung", totalTrung);
    setCell("tblTotalNet", totalNet);
    if (document.getElementById("tblTotalNet")) {
      document.getElementById("tblTotalNet").className = totalNet < 0 ? "p-2 border border-gray-200 dark:border-gray-700 text-right font-black text-emerald-600 dark:text-emerald-400" : "p-2 border border-gray-200 dark:border-gray-700 text-right font-black text-red-500 dark:text-red-400";
    }

    // 4. Update Financial Figures card
    setCell("summaryTotalCost", totalVon);
    setCell("summaryTotalWinnings", totalTrung);
    setCell("summaryNetValue", Math.abs(totalNet));

    const summaryNetLabel = document.getElementById("summaryNetLabel");
    const summaryNetValue = document.getElementById("summaryNetValue");
    if (summaryNetLabel && summaryNetValue) {
      if (totalNet < 0) {
        summaryNetLabel.innerText = "Chủ thầu bù";
        summaryNetLabel.className = "text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-0.5 uppercase tracking-wider";
        summaryNetValue.className = "text-lg font-extrabold text-emerald-600 dark:text-emerald-400";
      } else if (totalNet > 0) {
        summaryNetLabel.innerText = "Đại lý Nộp";
        summaryNetLabel.className = "text-xs font-bold text-red-500 dark:text-red-400 block mb-0.5 uppercase tracking-wider";
        summaryNetValue.className = "text-lg font-extrabold text-red-500 dark:text-red-400";
      } else {
        summaryNetLabel.innerText = "Hòa vốn";
        summaryNetLabel.className = "text-xs font-bold text-gray-500 block mb-0.5 uppercase tracking-wider";
        summaryNetValue.className = "text-lg font-extrabold text-gray-500";
      }
    }

    // Save calculation result for report copy
    window.lastCalculatedReport = {
      date: fetchedPrizesData ? fetchedPrizesData.dateText : (new Date()).toLocaleDateString('vi-VN'),
      deXac, deTrung,
      loXac, loTrung,
      xienXac, xienTrung,
      baCangXac, baCangTrung,
      baCangLoXac, baCangLoTrung,
      totalVon, totalTrung, totalNet
    };

    // Update top header labels if present
    const totalSumLabel = document.getElementById("totalSum");
    const modifiedTotalSumLabel = document.getElementById("modifiedTotalSum");
    if (totalSumLabel) {
      totalSumLabel.textContent = `${Math.round(totalVon).toLocaleString("vi-VN")} / ${Math.round(totalTrung).toLocaleString("vi-VN")}`;
    }
    if (modifiedTotalSumLabel) {
      modifiedTotalSumLabel.textContent = Math.round(totalNet).toLocaleString("vi-VN");
    }

  } else {
    // Old Layout Fallback
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");
    const input4 = document.getElementById("input4");

    const bonus1 = document.getElementById("bonus1");
    const bonus2 = document.getElementById("bonus2");
    const bonus3 = document.getElementById("bonus3");
    const bonus4 = document.getElementById("bonus4");

    if (input1) input1.value = deBetSum || "0";
    if (input2) input2.value = loBetSum || "0";
    if (input3) input3.value = xienBetSum || "0";
    if (input4) input4.value = Math.round(baCangDeBetSum + baCangLoBetSum * 23) || "0"; // using old logic fallback

    if (bonus1) bonus1.value = deWinSum || "0";
    if (bonus2) bonus2.value = loWinSum || "0";
    if (bonus3) bonus3.value = Math.round(xienWinSum) || "0";
    if (bonus4) bonus4.value = Math.round(baCangDeWinSum * 400 + baCangDeApMaWinSum * 5 + baCangLoWinSum * 960) || "0";

    for (let i = 1; i <= 4; i++) {
      calculateResult(i);
    }

    const totalSumLabel = document.getElementById("totalSum");
    const modifiedTotalSumLabel = document.getElementById("modifiedTotalSum");

    const totalSumText = document.getElementById("total")?.textContent || "0";
    const totalWinningsText = document.getElementById("bonusTotal")?.textContent || "0";
    const finalResultText = document.getElementById("finalResult")?.textContent || "0";

    if (totalSumLabel) {
      totalSumLabel.textContent = `${parseInt(totalSumText).toLocaleString("vi-VN")} / ${parseInt(totalWinningsText).toLocaleString("vi-VN")}`;
    }
    if (modifiedTotalSumLabel) {
      modifiedTotalSumLabel.textContent = parseInt(finalResultText).toLocaleString("vi-VN");
    }
  }

  const numResultsDiv = document.getElementById("numResults");
  if (numResultsDiv) {
    numResultsDiv.textContent = `${totalUniquePairs} con`;
  }

  // Input lists count and total
  const inputListCountSpan = document.getElementById("inputListCount");
  const inputListTotalSpan = document.getElementById("inputListTotal");
  if (inputListCountSpan) inputListCountSpan.textContent = `${totalBetCount} con`;
  if (inputListTotalSpan) inputListTotalSpan.textContent = totalBetValue.toLocaleString("vi-VN");
}

function calculateResult(row) {
  const input = parseFloat(document.getElementById(`input${row}`).value) || 0;
  const bonus = parseFloat(document.getElementById(`bonus${row}`).value) || 0;
  const percentage = parseFloat(document.getElementById(`percentage${row}`).value) || 0;

  let result = 0;
  let bonusResult = 0;

  if (row === 2) {
    // For Lô, percentage is price per point, e.g. 21.7 (which is 21.7k)
    // Cost = points * cost_per_point
    result = Math.round(input * percentage);
    // Payout = winning points * 80
    bonusResult = Math.round(bonus * 80);
  } else if (row === 1) {
    // For Đề, percentage is commission, e.g. 82%
    // Cost = input * 82%
    result = Math.round(input * percentage / 100);
    // Payout = winning amount * 80
    bonusResult = Math.round(bonus * 80);
  } else if (row === 3 || row === 4) {
    // For Xiên and Ba Càng, percentage is commission
    result = Math.round(input * percentage / 100);
    // Payout is calculated automatically and set as bonus value in thousands
    bonusResult = bonus;
  }

  const rEl = document.getElementById(`result${row}`);
  const bEl = document.getElementById(`bonusResult${row}`);
  if (rEl) rEl.textContent = isNaN(result) ? "0" : result;
  if (bEl) bEl.textContent = isNaN(bonusResult) ? "0" : bonusResult;

  calculateTotal();
}

function calculateTotal() {
  let total = 0;
  let bonusTotal = 0;

  for (let i = 1; i <= 4; i++) {
    const rEl = document.getElementById(`result${i}`);
    const bEl = document.getElementById(`bonusResult${i}`);
    total += rEl ? (parseInt(rEl.textContent) || 0) : 0;
    bonusTotal += bEl ? (parseInt(bEl.textContent) || 0) : 0;
  }

  const tEl = document.getElementById('total');
  const btEl = document.getElementById('bonusTotal');
  if (tEl) tEl.textContent = total;
  if (btEl) btEl.textContent = bonusTotal;
  
  calculateFinalResult();
}

function calculateFinalResult() {
  const tEl = document.getElementById('total');
  const btEl = document.getElementById('bonusTotal');
  const fEl = document.getElementById('finalResult');

  const total = tEl ? (parseInt(tEl.textContent) || 0) : 0;
  const bonusTotal = btEl ? (parseInt(btEl.textContent) || 0) : 0;
  const finalResult = total - bonusTotal;

  if (fEl) fEl.textContent = finalResult;
}

function normalizeTwentySevenNumbers() {
  const el = document.getElementById("allPrizesInput") || document.getElementById("twentySevenNumbers");
  if (!el) return;
  const raw = el.value.trim();
  if (!raw) return;
  const tokens = raw.split(/[\s,;\t\n\r.\-+*]+/).map(n => n.trim());
  const numbers = tokens.filter(n => n.length >= 2 && n.length <= 5 && /^\d+$/.test(n));
  el.value = numbers.join(', ');
  updateTwoDigitBoard();
}

function copyText() {
  const textToCopy = document.getElementById("modifiedResult").innerText;
  copyToClipboard(textToCopy, "Đã sao chép kết quả thành công!");
}

function copyInputList() {
  const inputListContent = document.getElementById("inputList").innerText;
  copyToClipboard(inputListContent, "Đã sao chép input thành công!");
}

function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => alert(successMessage))
      .catch(err => {
        console.error("Lỗi sao chép: ", err);
        alert("Sao chép thất bại. Vui lòng thử lại.");
      });
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        alert(successMessage);
      } else {
        throw new Error("Sao chép không thành công");
      }
    } catch (err) {
      console.error("Lỗi sao chép: ", err);
      alert("Sao chép thất bại. Vui lòng thử lại.");
    } finally {
      document.body.removeChild(textArea);
    }
  }
}

function clearDefaultValue(inputField) {
  if (inputField.value === "0") {
    inputField.value = "";
  }
}

function restoreDefaultValue(inputField) {
  if (inputField.value === "") {
    inputField.value = "0";
    const rowNumber = parseInt(inputField.id.replace("input", "").replace("bonus", "").replace("percentage", ""));
    if (!isNaN(rowNumber)) {
      calculateResult(rowNumber);
    }
  }
}

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

function checkDarkModePreference() {
  if (localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
}

const RATES_STORAGE_KEY = 'lucky_wheel_rates';
const DEFAULT_RATES = {
  rateDeComm: 82,
  rateDePayout: 80,
  rateLoCost: 21700,
  rateLoPayout: 80000,
  rateXienComm: 65,
  rateXien2Payout: 15,
  rateXien3Payout: 50,
  rateXien4Payout: 120,
  rate3CComm: 75,
  rate3CPayout: 400,
  rate3CApMa: 5,
  rate3CLoCost: 23000,
  rate3CLoPayout: 960000
};

function loadRates() {
  const saved = localStorage.getItem(RATES_STORAGE_KEY);
  let rates = DEFAULT_RATES;
  if (saved) {
    try {
      rates = { ...DEFAULT_RATES, ...JSON.parse(saved) };
    } catch (e) {
      console.error("Error parsing saved rates", e);
    }
  }
  Object.entries(rates).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  });
}

function saveRates() {
  const rates = {};
  Object.keys(DEFAULT_RATES).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      rates[id] = parseFloat(el.value) || DEFAULT_RATES[id];
    }
  });
  localStorage.setItem(RATES_STORAGE_KEY, JSON.stringify(rates));
}

// Setup Event Listeners
function setupEventListeners() {
  const calcBtn = document.getElementById('calculateButton');
  if (calcBtn) {
    calcBtn.addEventListener('click', calculateSum);
  }
  
  const normBtn = document.getElementById('normalizeButton');
  if (normBtn) {
    normBtn.addEventListener('click', normalizeTwentySevenNumbers);
  }

  const cpBtn = document.getElementById('copyButton');
  if (cpBtn) {
    cpBtn.addEventListener('click', copyText);
  }

  const cpInputBtn = document.getElementById('copyInputListButton');
  if (cpInputBtn) {
    cpInputBtn.addEventListener('click', copyInputList);
  }

  // Auto-normalize allPrizesInput on blur
  const allPrizesInput = document.getElementById('allPrizesInput');
  if (allPrizesInput) {
    allPrizesInput.addEventListener('blur', () => {
      const raw = allPrizesInput.value.trim();
      if (!raw) return;
      const tokens = raw.split(/[\s,;\t\n\r.\-+*]+/).map(n => n.trim());
      const numbers = tokens.filter(n => n.length >= 2 && n.length <= 5 && /^\d+$/.test(n));
      allPrizesInput.value = numbers.join(', ');
      updateTwoDigitBoard();
    });
  }

  const specialPrizeInput = document.getElementById('specialPrizeInput');
  if (specialPrizeInput) {
    specialPrizeInput.addEventListener('input', updateTwoDigitBoard);
  }

  // Date and Source selectors for crawler
  const resultDateInput = document.getElementById('resultDateInput');
  if (resultDateInput) {
    // Default date YYYY-MM-DD
    const localDate = new Date(Date.now() - (new Date().getTimezoneOffset()*60*1000)).toISOString().split('T')[0];
    resultDateInput.value = localDate;
  }

  document.querySelectorAll('input[name="resultMode"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const btnFetchResults = document.getElementById('btnFetchResults');
      const autoResultStatus = document.getElementById('autoResultStatus');
      const manualFields = document.getElementById('manualFields');
      if (e.target.value === 'auto') {
        if (btnFetchResults) btnFetchResults.classList.remove('hidden');
        if (autoResultStatus) autoResultStatus.classList.remove('hidden');
        if (manualFields) manualFields.classList.add('hidden');
      } else {
        if (btnFetchResults) btnFetchResults.classList.add('hidden');
        if (autoResultStatus) autoResultStatus.classList.add('hidden');
        if (manualFields) manualFields.classList.remove('hidden');
      }
    });
  });

  const btnFetchResults = document.getElementById('btnFetchResults');
  if (btnFetchResults) {
    btnFetchResults.addEventListener('click', triggerAutoFetch);
  }

  const btnSourceMinhNgoc = document.getElementById('btnSourceMinhNgoc');
  if (btnSourceMinhNgoc) btnSourceMinhNgoc.addEventListener('click', () => updateSourceButtons("Minh Ngọc"));

  const btnSourceXSKT = document.getElementById('btnSourceXSKT');
  if (btnSourceXSKT) btnSourceXSKT.addEventListener('click', () => updateSourceButtons("XSKT.com.vn"));

  const btnSourceMKetqua = document.getElementById('btnSourceMKetqua');
  if (btnSourceMKetqua) btnSourceMKetqua.addEventListener('click', () => updateSourceButtons("mketqua.net"));

  // Retain number & type listeners
  const retainNumber = document.getElementById('retainNumber');
  if (retainNumber) {
    retainNumber.addEventListener('focus', () => clearDefaultValue(retainNumber));
    retainNumber.addEventListener('blur', () => {
      if (retainNumber.value === "") retainNumber.value = "0";
    });
    retainNumber.addEventListener('input', calculateSum);
  }

  document.querySelectorAll('input[name="retainType"]').forEach(radio => {
    radio.addEventListener('change', calculateSum);
  });

  // Summary Table listeners
  for (let i = 1; i <= 4; i++) {
    const input = document.getElementById(`input${i}`);
    const bonus = document.getElementById(`bonus${i}`);
    const percentage = document.getElementById(`percentage${i}`);
    
    if (input) {
      input.addEventListener('focus', () => clearDefaultValue(input));
      input.addEventListener('blur', () => restoreDefaultValue(input));
      input.addEventListener('input', () => calculateResult(i));
    }
    
    if (bonus) {
      bonus.addEventListener('focus', () => clearDefaultValue(bonus));
      bonus.addEventListener('blur', () => restoreDefaultValue(bonus));
      bonus.addEventListener('input', () => calculateResult(i));
    }
    
    if (percentage) {
      percentage.addEventListener('focus', () => clearDefaultValue(percentage));
      percentage.addEventListener('blur', () => restoreDefaultValue(percentage));
      percentage.addEventListener('input', () => calculateResult(i));
    }
  }

  // Dark mode
  const modeToggle = document.getElementById('darkModeToggle');
  if (modeToggle) {
    modeToggle.addEventListener('click', toggleDarkMode);
  }

  // Modal Price Config listeners
  const btnPriceConfig = document.getElementById('btnPriceConfig');
  const modalPriceConfig = document.getElementById('modalPriceConfig');
  const btnClosePriceConfig = document.getElementById('btnClosePriceConfig');
  const btnClosePriceConfigBtn = document.getElementById('btnClosePriceConfigBtn');
  const btnResetRates = document.getElementById('btnResetRates');

  if (btnPriceConfig && modalPriceConfig) {
    btnPriceConfig.addEventListener('click', () => {
      loadRates();
      modalPriceConfig.classList.remove('hidden');
    });

    const closeModal = () => {
      saveRates();
      modalPriceConfig.classList.add('hidden');
      calculateSum(); // recalculate automatically on close!
    };

    if (btnClosePriceConfig) btnClosePriceConfig.addEventListener('click', closeModal);
    if (btnClosePriceConfigBtn) btnClosePriceConfigBtn.addEventListener('click', closeModal);

    modalPriceConfig.addEventListener('click', (e) => {
      if (e.target === modalPriceConfig) {
        closeModal();
      }
    });
  }

  if (btnResetRates) {
    btnResetRates.addEventListener('click', () => {
      if (confirm("Bạn có chắc chắn muốn khôi phục giá trị cấu hình mặc định không?")) {
        localStorage.removeItem(RATES_STORAGE_KEY);
        loadRates();
        calculateSum();
      }
    });
  }

  // Copy report listener
  const btnCopyTextReport = document.getElementById("btnCopyTextReport");
  if (btnCopyTextReport) {
    btnCopyTextReport.addEventListener("click", () => {
      const data = window.lastCalculatedReport;
      if (!data) {
        alert("Vui lòng thực hiện tính toán báo cáo trước!");
        return;
      }

      const formatMoneyK = (val) => {
        return Math.round(val).toLocaleString('vi-VN');
      };

      const rawDate = data.date;
      const dayMonthText = rawDate.split('/').slice(0, 2).join('/'); // "29/06"

      const headerText = `BÁO CÁO - ${dayMonthText}`;

      const deStr = `Đề: ${formatMoneyK(data.deXac)} / ${formatMoneyK(data.deTrung)}`;
      const loStr = `Lô: ${data.loXac} / ${data.loTrung}`;
      const xienStr = `Xiên: ${formatMoneyK(data.xienXac)} / ${formatMoneyK(data.xienTrung)}`;
      const baCangStr = `3c: ${formatMoneyK(data.baCangXac)} / ${formatMoneyK(data.baCangTrung)}`;
      const baCangLoStr = `3c Lô: ${data.baCangLoXac} / ${data.baCangLoTrung}`;
      
      const netLabelText = data.totalNet < 0 ? "LẤY VỀ" : "NỘP";
      const netValK = formatMoneyK(Math.abs(data.totalNet));

      const reportText = `${headerText}\n` +
        `${deStr}\n` +
        `${loStr}\n` +
        `${xienStr}\n` +
        `${baCangStr}\n` +
        `${baCangLoStr}\n` +
        `${netLabelText}: ${netValK}`;

      navigator.clipboard.writeText(reportText).then(() => {
        alert("Đã copy báo cáo vào clipboard!");
      }).catch(err => {
        console.error("Lỗi copy báo cáo:", err);
        // Fallback using prompt
        window.prompt("Copy báo cáo tại đây:", reportText);
      });
    });
  }
}

// DOM loaded hooks
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById('calculateButton')) {
    // Populate default percentages if they are 0 or empty
    for (let i = 1; i <= 4; i++) {
      const p = document.getElementById(`percentage${i}`);
      if (p && (p.value === "0" || p.value === "")) {
        if (i === 1) p.value = "82";
        if (i === 2) p.value = "21.7";
        if (i === 3) p.value = "65";
        if (i === 4) p.value = "75";
      }
    }

    loadRates(); // Load price configurations on page load!
    initializeDefaultValues();
    loadShortcuts();
    setupEventListeners();
    checkDarkModePreference();

    // Auto-fetch results on page load
    triggerAutoFetch();
  }
});

// Helpers for ex.html compatibility
function updateRowNumbers() {
  const rows = document.querySelectorAll('tbody tr');
  rows.forEach((row, index) => {
    const numberCell = row.querySelector('.row-number');
    if (numberCell) numberCell.textContent = index + 1;
  });
}

function calculateNSum() {
  const rows = document.querySelectorAll('tbody tr');
  let sum = 0;
  rows.forEach((row) => {
    const input = row.querySelector('.col1');
    if (input) {
      const inputValue = parseFloat(input.value.replace(',', '.')) || 0;
      sum += inputValue;
    }
  });
  const formattedSum = sum.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
  });
  const totalCell = document.getElementById('totalCol1');
  if (totalCell) totalCell.textContent = formattedSum;
}

function handleKeyDown(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    const currentInput = event.target;
    const currentValue = currentInput.value.trim();
    if (currentValue !== '') {
      const currentRow = currentInput.closest('tr');
      const isLastRow = currentRow === document.querySelector('tbody tr:last-child');
      if (isLastRow) {
        addNewRow();
        setTimeout(() => {
          const newRowInput = document.querySelector('tbody tr:last-child .col1');
          if (newRowInput) newRowInput.focus();
        }, 0);
      } else {
        const nextRow = currentRow.nextElementSibling;
        if (nextRow) {
          const nextInput = nextRow.querySelector('.col1');
          if (nextInput) nextInput.focus();
        }
      }
    }
  }
}

function addNewRow() {
  const tableBody = document.querySelector('tbody');
  if (!tableBody) return;
  const newRow = document.createElement('tr');

  const numberCell = document.createElement('td');
  numberCell.className = 'row-number p-2 border border-gray-300 text-center';
  numberCell.textContent = tableBody.children.length + 1;
  newRow.appendChild(numberCell);

  const newCell = document.createElement('td');
  newCell.className = 'p-2 border border-gray-300';
  const newInput = document.createElement('input');
  newInput.type = 'number';
  newInput.className = 'col1 w-full p-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500';
  newInput.oninput = function () {
    calculateNSum();
  };
  newInput.onkeydown = function (event) {
    handleKeyDown(event);
  };
  newCell.appendChild(newInput);
  newRow.appendChild(newCell);
  tableBody.appendChild(newRow);

  updateRowNumbers();
}

if (document.querySelector('tbody')) {
  document.addEventListener('DOMContentLoaded', function() {
    const firstInput = document.querySelector('tbody tr:first-child .col1');
    if (firstInput) {
      firstInput.focus();
    }
  });
}

function resetTable() {
  const tableBody = document.querySelector('tbody');
  if (!tableBody) return;
  while (tableBody.children.length > 1) {
    tableBody.removeChild(tableBody.lastChild);
  }
  const firstInput = tableBody.querySelector('.col1');
  if (firstInput) {
    firstInput.value = '';
    firstInput.focus();
  }
  const totalCol1 = document.getElementById('totalCol1');
  if (totalCol1) totalCol1.textContent = '0';
}