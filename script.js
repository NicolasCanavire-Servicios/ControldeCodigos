const codigosObra = {
    resto: ["COD 01", "COD 02", "COD 03", "COD 04", "COD 05", "COD 06", "COD 07", "COD 09", "COD 10", "COD 12", "COD 13", "COD 15", "COD 16", "COD 17", "COD 21", "COD 22", "COD 23", "COD 25", "COD 26", "COD 28", "COD 29", "COD 31", "COD 312", "COD 313", "COD 314", "COD 33", "COD 51", "COD 61", "COD 62", "COD 63", "COD 71", "COD 92", "COD 200 (hs)","COD 220", "COD 250", "COD 1001", "COD 1007", "COD 71S", "COD 1008"],
    subestaciones: ["COD 100", "COD 1001", "COD 1001A", "COD 1003", "COD 1004", "COD 1005", "COD 1006", "COD 1007", "COD 1008", "COD 1009", "COD 1010", "COD 1011", "COD 1012", "COD 1013", "COD 1014", "COD 1015", "COD 1016", "COD 1017", "COD 1018", "COD 1020", "COD 1021", "COD 1021 A", "COD 1021 B", "COD 110", "COD 111", "COD 112", "COD 113", "COD 20", "COD 200", "COD 200 (hs)", "COD 200L", "COD 21", "COD 250", "COD 701", "COD 702"]
};

// ============================================================
// PRECIOS = VALOR HORA DE LA CATEGORÍA x COEFICIENTE DEL CÓDIGO
// Para actualizar un mes nuevo: cambiar SOLO los valores de horaCategoria.
// ============================================================

// Valor hora (COD 200 (hs)) por categoría - 09/2026 provisorio
const horaCategoria = {
    "OFICIAL ESPECIALIZADO": 8103.34,
    "OFICIAL": 6915.52,
    "MEDIO Oficial": 6381.93,
    "AYUDANTE": 5865.72,
    "Adic. Cond.": 1022.49
};

// Coeficiente por código (0 = sin valor / "-")
const coefCodigos = {
    "COD 01":1, "COD 02":0.67, "COD 03":0.20, "COD 04":0.33, "COD 05":0.17, "COD 06":0.13, "COD 07":0.25,
    "COD 09":0.47, "COD 10":0.80, "COD 100":0.50, "COD 1001":2, "COD 1001A":2.60, "COD 1002":0,
    "COD 1003":0.75, "COD 1004":2.25, "COD 1004A":2.93, "COD 1005":0.83, "COD 1006":1, "COD 1007":0.75,
    "COD 1008":0.50, "COD 1009":1, "COD 101":1, "COD 101.1":1, "COD 101.2":1, "COD 1010":0.75,
    "COD 1011":0.50, "COD 1012":1.50, "COD 1013":0.75, "COD 1014":0.58, "COD 1015":0.75, "COD 1016":0.75,
    "COD 1017":0.17, "COD 102":0.25, "COD 1020":0.33, "COD 1021":0.75, "COD 1021 A":1, "COD 1021 B":1.25,
    "COD 103":0.17, "COD 104":0.17, "COD 107":1.08, "COD 108":1.17, "COD 109":1.58, "COD 11":0.05,
    "COD 110":0.75, "COD 110.1":1.67, "COD 111":0.75, "COD 111.1":2, "COD 112":2, "COD 112.1":0.75,
    "COD 113":2, "COD 113.1":0.75, "COD 12":0.71, "COD 13":0.22, "COD 14":0.25, "COD 15":1, "COD 16":1.80,
    "COD 17":0.85, "COD 18":0.80, "COD 19":0.58, "COD 20":0.40, "COD 200":1, "COD 200 (hs)":1,
    "COD 200.1":1, "COD 200.2":1, "COD 201":0.50, "COD 202":0.50, "COD 203":5, "COD 204":0.33,
    "COD 205":0, "COD 209":1.58, "COD 21":0.05, "COD 210":2.17, "COD 211":2.75, "COD 212":0, "COD 215":0,
    "COD 22":0.47, "COD 220":0.20, "COD 23":0.20, "COD 24":0.67, "COD 25":0.67, "COD 250":1.50,
    "COD 26":0.50, "COD 27":0.47, "COD 28":0.25, "COD 29":0.33, "COD 300.1":20, "COD 300.2":20,
    "COD 300.3":20, "COD 31":0.05, "COD 312":0.22, "COD 313":0.22, "COD 314":0.22, "COD 33":0.25,
    "COD 35":0.25, "COD 41":0.33, "COD 43":0.33, "COD 44":0.33, "COD 51":0.05, "COD 61":0.13,
    "COD 62":0.05, "COD 63":0.25, "COD 71S":0.82, "COD 701":0.75, "COD 702":0.17, "COD 71":0.25,
    "COD 91":1.05, "COD 200L":1, "COD 92":1.05, "COD 94":0.42, "COD 96":0, "COD LUM AP":0.75, "COD 1018":0
};

// Genera basePrecios con la estructura: basePrecios[obra][categoria][codigo]
const basePrecios = {};
for (const obra of Object.keys(codigosObra)) {
    basePrecios[obra] = {};
    for (const cat of Object.keys(horaCategoria)) {
        basePrecios[obra][cat] = {};
        for (const cod of codigosObra[obra]) {
            const coef = coefCodigos[cod] || 0;
            basePrecios[obra][cat][cod] = Math.round(horaCategoria[cat] * coef * 100) / 100;
        }
    }
}

let db = JSON.parse(localStorage.getItem('app_prod_conectar_v5')) || {};
let selectedDate = null;
let selectedMonth = null;

function parseDate(dateStr) {
    const [y, m, d] = dateStr.split('-');
    return new Date(y, m - 1, d);
}

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
    
    const today = new Date();
    selectedMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
    document.getElementById('selMes').value = selectedMonth;
    
    if (!db[selectedMonth]) {
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        db[selectedMonth] = {
            config: { 
                inicio: `${selectedMonth}-01`, 
                fin: `${selectedMonth}-${String(lastDay).padStart(2,'0')}` 
            },
            obras: {}
        };
    }
    
    document.getElementById('fechaInicio').value = db[selectedMonth].config.inicio;
    document.getElementById('fechaFin').value = db[selectedMonth].config.fin;
    
    renderApp();
});

function cambiarMes() {
    selectedMonth = document.getElementById('selMes').value;
    if (!selectedMonth) return;
    selectedDate = null; 
    
    if (!db[selectedMonth]) {
        const [y, m] = selectedMonth.split('-');
        const lastDay = new Date(y, m, 0).getDate();
        db[selectedMonth] = {
            config: { 
                inicio: `${selectedMonth}-01`, 
                fin: `${selectedMonth}-${String(lastDay).padStart(2,'0')}` 
            },
            obras: {}
        };
    }
    
    document.getElementById('fechaInicio').value = db[selectedMonth].config.inicio;
    document.getElementById('fechaFin').value = db[selectedMonth].config.fin;
    
    saveDb();
    renderApp();
}

function cambiarFechas() {
    const inicio = document.getElementById('fechaInicio').value;
    const fin = document.getElementById('fechaFin').value;
    
    if(inicio && fin && selectedMonth) {
        if(!db[selectedMonth]) {
            db[selectedMonth] = { config: {}, obras: {} };
        }
        db[selectedMonth].config.inicio = inicio;
        db[selectedMonth].config.fin = fin;
        
        const s = parseDate(inicio);
        const e = parseDate(fin);
        if(selectedDate) {
            const current = parseDate(selectedDate);
            if(current < s || current > e) {
                selectedDate = null;
            }
        }
        
        saveDb(); 
        renderApp();
    }
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
    if (!selectedMonth || !db[selectedMonth]) return;
    const config = db[selectedMonth].config;
    if(!config.inicio || !config.fin) return;
    
    let gridHtml = '<div class="cal-day-header">DOM</div><div class="cal-day-header">LUN</div><div class="cal-day-header">MAR</div><div class="cal-day-header">MIE</div><div class="cal-day-header">JUE</div><div class="cal-day-header">VIE</div><div class="cal-day-header">SAB</div>';
    
    const startD = parseDate(config.inicio);
    const endD = parseDate(config.fin);
    
    const firstDayOfWeek = startD.getDay(); 
    
    for (let i = 0; i < firstDayOfWeek; i++) {
        gridHtml += `<div></div>`;
    }
    
    let d = new Date(startD);
    while (d <= endD) {
        const currentStr = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        const isActive = selectedDate === currentStr ? 'active' : '';
        gridHtml += `<button class="cal-btn ${isActive}" onclick="seleccionarDia('${currentStr}')">${d.getDate()}/${d.getMonth()+1}</button>`;
        d.setDate(d.getDate() + 1);
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
    
    if(!db[selectedMonth].obras) db[selectedMonth].obras = {};
    if(!db[selectedMonth].obras[obra]) db[selectedMonth].obras[obra] = {};
    if(!db[selectedMonth].obras[obra][selectedDate]) db[selectedMonth].obras[obra][selectedDate] = { conductor: false, codes: {} };
    
    const dayData = db[selectedMonth].obras[obra][selectedDate];
    
    const dObj = parseDate(selectedDate);
    const dateVisual = `${String(dObj.getDate()).padStart(2,'0')}/${String(dObj.getMonth()+1).padStart(2,'0')}/${dObj.getFullYear()}`;
    
    let html = `
    <h3 class="text-label-small" style="margin-bottom: 15px; font-size:1rem; color:var(--accent)">Carga del día: ${dateVisual}</h3>
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
    db[selectedMonth].obras[obra][selectedDate].conductor = isChecked;
    saveDb();
}

function saveCodeQty(cod, val) {
    const obra = document.getElementById('selObra').value;
    if(val === '' || val === '0') {
        delete db[selectedMonth].obras[obra][selectedDate].codes[cod];
    } else {
        db[selectedMonth].obras[obra][selectedDate].codes[cod] = val;
    }
    saveDb();
}

function saveDb() {
    localStorage.setItem('app_prod_conectar_v5', JSON.stringify(db));
    clearTimeout(window.t_u);
    window.t_u = setTimeout(() => {
        if(selectedDate) renderDayForm();
        calculateMonthTotal();
    }, 300);
}

function calculateMonthTotal() {
    if (!selectedMonth || !db[selectedMonth]) return;
    const obra = document.getElementById('selObra').value;
    const cat = document.getElementById('selCat').value;
    
    let totalMes = 0;
    if(db[selectedMonth].obras && db[selectedMonth].obras[obra]) {
        const monthData = db[selectedMonth].obras[obra];
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
    if (!selectedMonth || !db[selectedMonth]) return;
    const obra = document.getElementById('selObra').value;
    const cat = document.getElementById('selCat').value;
    const tbody = document.getElementById('tbodyResumen');
    const tfoot = document.getElementById('tfootResumen');
    const lista = codigosObra[obra];
    
    const config = db[selectedMonth].config;
    if(!config.inicio || !config.fin) return;
    
    const startD = parseDate(config.inicio);
    const endD = parseDate(config.fin);
    
    let weeks = [];
    let currentWeek = 0;
    weeks[currentWeek] = {};
    
    let d = new Date(startD);
    while (d <= endD) {
        const currentStr = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        weeks[currentWeek][currentStr] = true;
        
        if (d.getDay() === 0 && d < endD) {
            currentWeek++;
            weeks[currentWeek] = {};
        }
        d.setDate(d.getDate() + 1);
    }
    
    let theadHtml = `<tr><th class="col-code">COD</th>`;
    for(let w=0; w<=currentWeek; w++) {
        theadHtml += `<th scope="col">SEM ${w+1}</th>`;
    }
    theadHtml += `<th class="bg-light-gray" scope="col">TOTAL U.</th><th class="bg-success-light" scope="col">MONTO $</th></tr>`;
    document.querySelector('#tableResumen thead').innerHTML = theadHtml;
    
    let tMes = 0;
    tbody.innerHTML = "";
    const monthData = (db[selectedMonth].obras && db[selectedMonth].obras[obra]) ? db[selectedMonth].obras[obra] : {};

    lista.forEach(cod => {
        let uMes = 0;
        let subtotalCodMes = 0;
        const prBase = getPrecio(obra, cat, cod);
        const prCond = getPrecio(obra, "Adic. Cond.", cod);
        
        let rowH = `<td class="col-code">${cod}</td>`;
        
        for(let w=0; w<=currentWeek; w++) {
            let uS = 0;
            let subS = 0;
            
            Object.keys(weeks[w]).forEach(dateStr => {
                if(monthData[dateStr] && monthData[dateStr].codes && monthData[dateStr].codes[cod]) {
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
    
    tfoot.innerHTML = `<tr><td colspan="${currentWeek + 2}" style="text-align:right; font-weight:bold; padding: 15px;">TOTAL ACUMULADO DEL PERIODO:</td><td style="font-weight:bold; color: var(--success); font-size: 1.1rem; background-color: var(--bg-table-header)">$ ${tMes.toLocaleString('es-AR', {minimumFractionDigits:1})}</td></tr>`;
    
    const startVisual = `${String(startD.getDate()).padStart(2,'0')}/${String(startD.getMonth()+1).padStart(2,'0')}/${startD.getFullYear()}`;
    const endVisual = `${String(endD.getDate()).padStart(2,'0')}/${String(endD.getMonth()+1).padStart(2,'0')}/${endD.getFullYear()}`;
    
    document.getElementById('pdf-meta').innerText = `Periodo del ${startVisual} al ${endVisual} | Obra: ${obra.toUpperCase()} | Categoría: ${cat}`;
    document.getElementById('totalMensual').innerText = `$ ${tMes.toLocaleString('es-AR', {minimumFractionDigits:1})}`;
}

// Función de descarga en Excel (.xlsx) con nombre
function exportarExcel() {
    try {
        let nombreOperario = prompt("Por favor, ingresa el nombre del operario (Ej: Juan Perez):");
        
        if (nombreOperario === null) {
            return; 
        }
        
        nombreOperario = nombreOperario.trim();
        
        if (nombreOperario === "") {
            nombreOperario = "Sin_Nombre";
        } else {
            nombreOperario = nombreOperario.replace(/\s+/g, '_');
        }

        const obra = document.getElementById('selObra').value;
        const tabla = document.getElementById('tableResumen');
        
        const wb = XLSX.utils.table_to_book(tabla, { sheet: "Resumen Produccion" });
        
        const nombreArchivo = `Resumen_${selectedMonth}_${obra.toUpperCase()}_${nombreOperario}.xlsx`;
        
        XLSX.writeFile(wb, nombreArchivo);
        
    } catch (error) {
        alert("⚠️ Error al descargar. Es posible que falte la conexión a la librería Excel (SheetJS).");
        console.error("Detalle del error:", error);
    }
}

function borrarMes() {
    const obra = document.getElementById('selObra').value;
    if(confirm(`¿Estás seguro de borrar TODOS los datos cargados en la carpeta ${selectedMonth} para la obra ${obra.toUpperCase()}?`)) {
        if(db[selectedMonth] && db[selectedMonth].obras && db[selectedMonth].obras[obra]) {
            delete db[selectedMonth].obras[obra];
            localStorage.setItem('app_prod_conectar_v5', JSON.stringify(db));
            selectedDate = null;
            renderApp();
        }
    }
}
