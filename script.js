// Base de datos (Se eliminó "Delta")
const codigosObra = {
    resto: ["COD 01", "COD 02", "COD 03", "COD 04", "COD 05", "COD 06", "COD 07", "COD 09", "COD 10", "COD 12", "COD 13", "COD 15", "COD 16", "COD 17", "COD 21", "COD 22", "COD 23", "COD 25", "COD 26", "COD 28", "COD 29", "COD 31", "COD 312", "COD 313", "COD 314", "COD 33", "COD 51", "COD 61", "COD 62", "COD 63", "COD 71", "COD 92", "COD 200 (hs)","COD 220", "COD 250", "COD 1001", "COD 1007", "COD 71S", "COD 1008"],
    subestaciones: ["COD 100", "COD 1001", "COD 1001A", "COD 1003", "COD 1004", "COD 1005", "COD 1006", "COD 1007", "COD 1008", "COD 1009", "COD 1010", "COD 1011", "COD 1012", "COD 1013", "COD 1014", "COD 1015", "COD 1016", "COD 1017", "COD 1018", "COD 1020", "COD 1021", "COD 1021 A", "COD 1021 B", "COD 110", "COD 111", "COD 112", "COD 113", "COD 20", "COD 200", "COD 200 (hs)", "COD 200L", "COD 21", "COD 250", "COD 701", "COD 702"]
};

const basePrecios = {
    "resto": {
        "Adic. Cond.": {"COD 01": 793.1, "COD 02": 531.4, "COD 03": 158.6, "COD 04": 261.8, "COD 05": 134.8, "COD 06": 103.1, "COD 07": 198.3, "COD 09": 372.8, "COD 10": 634.5, "COD 12": 563.1, "COD 13": 174.5, "COD 15": 793.1, "COD 16": 1427.7, "COD 17": 674.2, "COD 200 (hs)": 793.1, "COD 220": 158.63, "COD 21": 39.7, "COD 22": 372.8, "COD 23": 158.6, "COD 25": 531.4, "COD 250": 1189.7, "COD 26": 396.6, "COD 28": 198.3, "COD 29": 261.8, "COD 31": 39.7, "COD 312": 174.5, "COD 313": 174.5, "COD 314": 174.5, "COD 33": 198.3, "COD 51": 39.7, "COD 61": 103.1, "COD 62": 39.7, "COD 71": 198.3, "COD 71S": 630.15, "COD 92": 832.8},
        "AYUDANTE": {"COD 01": 4309.9, "COD 02": 2887.6, "COD 03": 862, "COD 04": 1422.2, "COD 05": 732.7, "COD 06": 560.3, "COD 07": 1077.5, "COD 09": 2025.6, "COD 10": 3447.9, "COD 12": 3060, "COD 13": 948.1, "COD 15": 4309.9, "COD 16": 7757.7, "COD 17": 3663.4, "COD 200 (hs)": 4309.9, "COD 220": 861.97, "COD 21": 215.5, "COD 22": 2025.6, "COD 23": 862, "COD 25": 2887.6, "COD 250": 6464.8, "COD 26": 2154.9, "COD 28": 1077.5, "COD 29": 1422.2, "COD 31": 215.5, "COD 312": 948.1, "COD 313": 948.1, "COD 314": 948.1, "COD 33": 1077.5, "COD 51": 215.5, "COD 61": 560.3, "COD 62": 215.5, "COD 63": 1077.5, "COD 71": 1077.5, "COD 71S": 3522.1, "COD 92": 4525.4},
        "MEDIO Oficial": {"COD 01": 4881.3, "COD 02": 3270.5, "COD 03": 976.3, "COD 04": 1610.8, "COD 05": 829.8, "COD 06": 634.6, "COD 07": 1220.3, "COD 09": 2294.2, "COD 10": 3905.1, "COD 12": 3465.7, "COD 13": 1073.9, "COD 15": 4881.3, "COD 16": 8786.4, "COD 17": 4149.1, "COD 200 (hs)": 4881.3, "COD 220": 976.26, "COD 21": 244.1, "COD 22": 2294.2, "COD 23": 976.3, "COD 25": 3270.5, "COD 250": 7322, "COD 26": 2440.7, "COD 28": 1220.3, "COD 29": 1610.8, "COD 31": 244.1, "COD 312": 1073.9, "COD 313": 1073.9, "COD 314": 1073.9, "COD 33": 1220.3, "COD 51": 244.1, "COD 61": 634.6, "COD 62": 244.1, "COD 63": 1220.3, "COD 71": 1220.3, "COD 71S": 3989.2, "COD 92": 5125.4},
        "OFICIAL": {"COD 01": 5498.8, "COD 02": 3684.2, "COD 03": 1099.8, "COD 04": 1814.6, "COD 05": 934.8, "COD 06": 714.9, "COD 07": 1374.7, "COD 09": 2584.4, "COD 10": 4399, "COD 12": 3904.2, "COD 13": 1209.7, "COD 15": 5498.8, "COD 16": 9897.8, "COD 17": 4674, "COD 200 (hs)": 5498.8, "COD 220": 1099.76, "COD 21": 274.9, "COD 22": 2584.4, "COD 23": 1099.8, "COD 25": 3684.2, "COD 250": 8248.2, "COD 26": 2749.4, "COD 28": 1374.7, "COD 29": 1814.6, "COD 31": 274.9, "COD 312": 1209.7, "COD 313": 1209.7, "COD 314": 1209.7, "COD 33": 1374.7, "COD 51": 274.9, "COD 61": 714.9, "COD 62": 274.9, "COD 63": 1374.7, "COD 71": 1374.7, "COD 71S": 4491.7, "COD 92": 5773.7},
        "OFICIAL ESPECIALIZADO": {"COD 01": 6445.3, "COD 02": 4318.4, "COD 03": 1289.1, "COD 04": 2126.9, "COD 05": 1095.7, "COD 06": 837.9, "COD 07": 1611.3, "COD 09": 3029.3, "COD 10": 5156.3, "COD 12": 4576.2, "COD 13": 1418, "COD 15": 6445.3, "COD 16": 11601.6, "COD 17": 5478.5, "COD 200 (hs)": 6445.3, "COD 220": 1289.07, "COD 21": 322.3, "COD 22": 3029.3, "COD 23": 1289.1, "COD 25": 4318.4, "COD 250": 9668, "COD 26": 3222.7, "COD 28": 1611.3, "COD 29": 2126.9, "COD 31": 322.3, "COD 312": 1418, "COD 313": 1418, "COD 314": 1418, "COD 33": 1611.3, "COD 51": 322.3, "COD 61": 837.9, "COD 62": 322.3, "COD 63": 1610.7, "COD 71": 1611.3, "COD 71S": 5263.3, "COD 92": 6767.6}
    },
    "subestaciones": {
        "Adic. Cond.": {"COD 100": 396.6, "COD 1001": 1586.3, "COD 1001A": 2062.2, "COD 1003": 594.9, "COD 1004": 1784.6, "COD 1005": 658.3, "COD 1006": 793.1, "COD 1007": 594.9, "COD 1008": 396.6, "COD 1009": 793.1, "COD 1010": 594.9, "COD 1011": 396.6, "COD 1012": 1189.7, "COD 1013": 594.9, "COD 1014": 460, "COD 1015": 594.9, "COD 1016": 594.9, "COD 1017": 134.8, "COD 1018": 134.8, "COD 1020": 261.8, "COD 1021": 594.9, "COD 1021 A": 793.1, "COD 1021 B": 990.7, "COD 110": 594.9, "COD 111": 594.9, "COD 112": 1586.3, "COD 113": 1586.3, "COD 20": 317.3, "COD 200": 793.1, "COD 200 (hs)": 793.1, "COD 200L": 793.1, "COD 21": 39.7, "COD 250": 1189.7, "COD 701": 594.86, "COD 702": 134.83},
        "AYUDANTE": {"COD 100": 2154.9, "COD 1001": 8619.7, "COD 1001A": 11205.6, "COD 1003": 3232.4, "COD 1004": 9697.2, "COD 1005": 3577.2, "COD 1006": 4309.9, "COD 1007": 3232.4, "COD 1008": 2154.9, "COD 1009": 4309.9, "COD 1010": 3232.4, "COD 1011": 2154.9, "COD 1012": 6464.8, "COD 1013": 3232.4, "COD 1014": 2499.7, "COD 1015": 3232.4, "COD 1016": 3232.4, "COD 1017": 732.7, "COD 1018": 732.7, "COD 1020": 1422.2, "COD 1021": 3232.4, "COD 1021 A": 4309.9, "COD 1021 B": 5388.2, "COD 110": 3232.4, "COD 111": 3232.4, "COD 112": 8619.7, "COD 113": 8619.7, "COD 20": 1724, "COD 200": 4309.9, "COD 200 (hs)": 4309.9, "COD 200L": 4309.9, "COD 21": 215.5, "COD 250": 6464.8, "COD 701": 3232.40, "COD 702": 732.68},
        "MEDIO Oficial": {"COD 100": 2440.7, "COD 1001": 9762.7, "COD 1001A": 12691.5, "COD 1003": 3661, "COD 1004": 10983, "COD 1005": 4051.5, "COD 1006": 4881.3, "COD 1007": 3661, "COD 1008": 2440.7, "COD 1009": 4881.3, "COD 1010": 3661, "COD 1011": 2440.7, "COD 1012": 7322, "COD 1013": 3661, "COD 1014": 2831.2, "COD 1015": 3661, "COD 1016": 3661, "COD 1017": 829.8, "COD 1018": 829.8, "COD 1020": 1610.8, "COD 1021": 3661, "COD 1021 A": 4881.3, "COD 1021 B": 6104.1, "COD 110": 3661, "COD 111": 3661, "COD 112": 9762.7, "COD 113": 9762.7, "COD 20": 1952.5, "COD 200": 4881.3, "COD 200 (hs)": 4881.3, "COD 200L": 4881.3, "COD 21": 244.1, "COD 250": 7322, "COD 701": 3661.00, "COD 702": 829.82},
        "OFICIAL": {"COD 100": 2749.4, "COD 1001": 10997.6, "COD 1001A": 14296.9, "COD 1003": 4124.1, "COD 1004": 12372.3, "COD 1005": 4564, "COD 1006": 5498.8, "COD 1007": 4124.1, "COD 1008": 2749.4, "COD 1009": 5498.8, "COD 1010": 4124.1, "COD 1011": 2749.4, "COD 1012": 8248.2, "COD 1013": 4124.1, "COD 1014": 3189.3, "COD 1015": 4124.1, "COD 1016": 4124.1, "COD 1017": 934.8, "COD 1018": 934.8, "COD 1020": 1814.6, "COD 1021": 4124.1, "COD 1021 A": 5498.8, "COD 1021 B": 6872.9, "COD 110": 4124.1, "COD 111": 4124.1, "COD 112": 10997.6, "COD 113": 10997.6, "COD 20": 2199.5, "COD 200": 5498.8, "COD 200 (hs)": 5498.8, "COD 200L": 5498.8, "COD 21": 274.9, "COD 250": 8248.2, "COD 701": 4124.11, "COD 702": 934.79},
        "OFICIAL ESPECIALIZADO": {"COD 100": 3222.7, "COD 1001": 12890.7, "COD 1001A": 16757.9, "COD 1003": 4834, "COD 1004": 14502, "COD 1005": 5349.6, "COD 1006": 6445.3, "COD 1007": 4834, "COD 1008": 3222.7, "COD 1009": 6445.3, "COD 1010": 4834, "COD 1011": 3222.7, "COD 1012": 9668, "COD 1013": 4834, "COD 1014": 3738.3, "COD 1015": 4834, "COD 1016": 4834, "COD 1017": 1095.7, "COD 1018": 1095.7, "COD 1020": 2127, "COD 1021": 4834, "COD 1021 A": 6445.3, "COD 1021 B": 8052.9, "COD 110": 4834, "COD 111": 4834, "COD 112": 12890.7, "COD 113": 12890.7, "COD 20": 2578.2, "COD 200": 6445.3, "COD 200 (hs)": 6445.3, "COD 200L": 6445.3, "COD 21": 322.3, "COD 250": 9668, "COD 701": 4834.01, "COD 702": 1095.69}
    }
};

// Lógica de Estado y Persistencia
let db = JSON.parse(localStorage.getItem('app_prod_conectar_v3')) || {};
let selectedDate = null;
let selectedMonth = null;

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.getElementById('btn-theme').innerText = isDark ? '☀️' : '🌙';
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('btn-theme').innerText = '☀️';
    }
    
    // Mes actual por defecto
    const today = new Date();
    selectedMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
    document.getElementById('selMes').value = selectedMonth;
    
    renderApp();
});

function cambiarMes() {
    selectedMonth = document.getElementById('selMes').value;
    selectedDate = null; 
    renderApp();
}

function showTab(tab) {
    document.getElementById('view-carga').classList.toggle('hidden', tab !== 'carga');
    document.getElementById('view-resumen').classList.toggle('hidden', tab !== 'resumen');
    
    document.getElementById('btn-carga').classList.toggle('active', tab === 'carga');
    document.getElementById('btn-resumen').classList.toggle('active', tab === 'resumen');
    
    if (tab === 'resumen') renderResumen();
}

function renderApp() {
    renderCalendar();
    if (selectedDate) {
        renderDayForm();
    } else {
        document.getElementById('daily-form-container').innerHTML = '<p class="text-label-small" style="padding: 20px;">Selecciona un día en el calendario para cargar la producción.</p>';
    }
    calculateMonthTotal();
}

function renderCalendar() {
    if (!selectedMonth) return;
    const [year, month] = selectedMonth.split('-');
    const daysInMonth = new Date(year, month, 0).getDate();
    
    let gridHtml = '<div class="cal-day-header">DOM</div><div class="cal-day-header">LUN</div><div class="cal-day-header">MAR</div><div class="cal-day-header">MIE</div><div class="cal-day-header">JUE</div><div class="cal-day-header">VIE</div><div class="cal-day-header">SAB</div>';
    
    const firstDay = new Date(year, month - 1, 1).getDay(); 
    
    for (let i = 0; i < firstDay; i++) {
        gridHtml += `<div></div>`;
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${selectedMonth}-${String(day).padStart(2, '0')}`;
        const isActive = selectedDate === dateStr ? 'active' : '';
        gridHtml += `<button class="cal-btn ${isActive}" onclick="seleccionarDia('${dateStr}')">${day}</button>`;
    }
    
    document.getElementById('calendar-grid').innerHTML = gridHtml;
}

function seleccionarDia(dateStr) {
    selectedDate = dateStr;
    renderApp();
}

function getPrecio(obra, cat, cod) {
    if (basePrecios[obra] && basePrecios[obra][cat] && basePrecios[obra][cat][cod] !== undefined) {
        return basePrecios[obra][cat][cod];
    }
    return 0;
}

function renderDayForm() {
    const obra = document.getElementById('selObra').value;
    const cat = document.getElementById('selCat').value;
    const container = document.getElementById('daily-form-container');
    const lista = codigosObra[obra];
    
    if(!db[selectedMonth]) db[selectedMonth] = {};
    if(!db[selectedMonth][obra]) db[selectedMonth][obra] = {};
    if(!db[selectedMonth][obra][selectedDate]) db[selectedMonth][obra][selectedDate] = { conductor: false, codes: {} };
    
    const dayData = db[selectedMonth][obra][selectedDate];
    
    let html = `
    <h3 class="text-label-small" style="margin-bottom: 15px; font-size:1rem; color:var(--accent)">Carga: ${selectedDate}</h3>
    <label class="row-driver" style="display:flex; align-items:center; gap:10px; padding:10px; border-radius:6px; margin-bottom:15px; cursor:pointer;">
        <input type="checkbox" class="check-driver" ${dayData.conductor ? 'checked' : ''} onchange="saveConductor(this.checked)">
        <span>¿Conductor en este día? (Suma adicional a todo lo cargado hoy)</span>
    </label>
    <table>
        <thead>
            <tr>
                <th class="col-code">CÓDIGO</th>
                <th>CANTIDAD</th>
                <th>SUBTOTAL $</th>
            </tr>
        </thead>
        <tbody>
    `;
    
    let totalDay = 0;
    
    lista.forEach(cod => {
        const prBase = getPrecio(obra, cat, cod);
        const prCond = getPrecio(obra, "Adic. Cond.", cod);
        const qty = dayData.codes[cod] || '';
        const qtyNum = Number(qty) || 0;
        
        const subtotal = (qtyNum * prBase) + (dayData.conductor ? qtyNum * prCond : 0);
        totalDay += subtotal;
        
        html += `
            <tr>
                <td class="col-code">${cod}</td>
                <td><input type="number" min="0" value="${qty}" oninput="saveCodeQty('${cod}', this.value)"></td>
                <td class="subtotal-col">$ ${subtotal.toLocaleString('es-AR', {minimumFractionDigits:1})}</td>
            </tr>
        `;
    });
    
    html += `
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2" style="text-align:right; font-weight:bold; padding:10px; border-bottom:none;">TOTAL DEL DÍA:</td>
                <td style="font-weight:bold; color:var(--success); font-size:1.1rem; border-bottom:none;">$ ${totalDay.toLocaleString('es-AR', {minimumFractionDigits:1})}</td>
            </tr>
        </tfoot>
    </table>
    `;
    
    container.innerHTML = html;
}

function saveConductor(isChecked) {
    const obra = document.getElementById('selObra').value;
    db[selectedMonth][obra][selectedDate].conductor = isChecked;
    saveDb();
}

function saveCodeQty(cod, val) {
    const obra = document.getElementById('selObra').value;
    if(val === '' || val === '0') {
        delete db[selectedMonth][obra][selectedDate].codes[cod];
    } else {
        db[selectedMonth][obra][selectedDate].codes[cod] = val;
    }
    saveDb();
}

function saveDb() {
    localStorage.setItem('app_prod_conectar_v3', JSON.stringify(db));
    clearTimeout(window.t_u);
    window.t_u = setTimeout(() => {
        if(selectedDate) renderDayForm();
        calculateMonthTotal();
    }, 300);
}

function calculateMonthTotal() {
    if (!selectedMonth) return;
    const obra = document.getElementById('selObra').value;
    const cat = document.getElementById('selCat').value;
    
    let totalMes = 0;
    if(db[selectedMonth] && db[selectedMonth][obra]) {
        const monthData = db[selectedMonth][obra];
        for (const [date, dayData] of Object.entries(monthData)) {
            for (const [cod, qtyStr] of Object.entries(dayData.codes)) {
                const prBase = getPrecio(obra, cat, cod);
                const prCond = getPrecio(obra, "Adic. Cond.", cod);
                const qtyNum = Number(qtyStr) || 0;
                totalMes += (qtyNum * prBase) + (dayData.conductor ? qtyNum * prCond : 0);
            }
        }
    }
    document.getElementById('totalMesResumen').innerText = `$ ${totalMes.toLocaleString('es-AR', {minimumFractionDigits:1})}`;
}

function renderResumen() {
    if (!selectedMonth) return;
    const obra = document.getElementById('selObra').value;
    const cat = document.getElementById('selCat').value;
    const tbody = document.getElementById('tbodyResumen');
    const lista = codigosObra[obra];
    
    const [year, month] = selectedMonth.split('-');
    const daysInMonth = new Date(year, month, 0).getDate();
    const weeks = [{}, {}, {}, {}, {}, {}]; 
    
    let currentWeek = 0;
    for (let day = 1; day <= daysInMonth; day++) {
        const d = new Date(year, month - 1, day);
        const dateStr = `${selectedMonth}-${String(day).padStart(2, '0')}`;
        
        weeks[currentWeek][dateStr] = true;
        if (d.getDay() === 0 && day !== daysInMonth) { 
            currentWeek++;
        }
    }
    
    let tMes = 0;
    tbody.innerHTML = "";
    
    const monthData = (db[selectedMonth] && db[selectedMonth][obra]) ? db[selectedMonth][obra] : {};

    lista.forEach(cod => {
        let uMes = 0;
        let subtotalCodMes = 0;
        const prBase = getPrecio(obra, cat, cod);
        const prCond = getPrecio(obra, "Adic. Cond.", cod);
        
        let rowH = `<td class="col-code">${cod}</td>`;
        
        for(let w=0; w<6; w++) {
            let uS = 0;
            let subS = 0;
            
            Object.keys(weeks[w]).forEach(dateStr => {
                if(monthData[dateStr] && monthData[dateStr].codes[cod]) {
                    const qtyNum = Number(monthData[dateStr].codes[cod]) || 0;
                    const isCond = monthData[dateStr].conductor;
                    uS += qtyNum;
                    subS += (qtyNum * prBase) + (isCond ? qtyNum * prCond : 0);
                }
            });
            
            uMes += uS;
            subtotalCodMes += subS;
            rowH += `<td>${uS > 0 ? uS : '-'}</td>`;
        }

        if(uMes > 0) {
            tMes += subtotalCodMes;
            let tr = document.createElement('tr');
            tr.innerHTML = rowH + `<td class="bg-light-gray" style="font-weight:bold;">${uMes}</td><td class="subtotal-col bg-success-light">$ ${subtotalCodMes.toLocaleString('es-AR', {minimumFractionDigits:1})}</td>`;
            tbody.appendChild(tr);
        }
    });
    
    document.getElementById('pdf-meta').innerText = `Resumen de: ${selectedMonth} | Obra: ${obra.toUpperCase()} | Categoría: ${cat}`;
    document.getElementById('totalMensual').innerText = `$ ${tMes.toLocaleString('es-AR', {minimumFractionDigits:1})}`;
}

function exportarPDF() {
    const element = document.getElementById('pdf-area');
    const opt = {
        margin:       [10, 10],
        filename:     `Resumen_${selectedMonth}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };
    html2pdf().set(opt).from(element).save();
}

function borrarMes() {
    const obra = document.getElementById('selObra').value;
    if(confirm(`¿Estás seguro de borrar todos los datos de ${selectedMonth} para la obra ${obra.toUpperCase()}?`)) {
        if(db[selectedMonth] && db[selectedMonth][obra]) {
            delete db[selectedMonth][obra];
            localStorage.setItem('app_prod_conectar_v3', JSON.stringify(db));
            selectedDate = null;
            renderApp();
        }
    }
}
