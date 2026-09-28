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

let db = JSON.parse(localStorage.getItem('app_prod_final_v3')) || {
    periodos: [], // Ej: { id: 'p1', name: 'Octubre 2026', start: '2026-10-01', end: '2026-10-31' }
    activo: null, // ID del periodo seleccionado
    datos: {}     // Ej: { 'p1': { '2026-10-05': { 'resto': { 'COD 01': 5, 'cond': true } } } }
};

let diaSeleccionado = null; // Guarda la fecha en formato YYYY-MM-DD

// Inicializa con un mes de prueba si está vacío
if (db.periodos.length === 0) {
    let now = new Date();
    let y = now.getFullYear();
    let m = String(now.getMonth() + 1).padStart(2, '0');
    let start = `${y}-${m}-01`;
    let end = new Date(y, now.getMonth() + 1, 0).toISOString().split('T')[0]; // Último día del mes
    
    let defaultPeriod = { id: 'p_' + Date.now(), name: `Mes Actual (${m}/${y})`, start, end };
    db.periodos.push(defaultPeriod);
    db.activo = defaultPeriod.id;
    db.datos[defaultPeriod.id] = {};
    guardarDB();
}

function guardarDB() {
    localStorage.setItem('app_prod_final_v3', JSON.stringify(db));
}

// Evita problemas de zona horaria operando con los strings directamente o con UTC
function formatearFechaVisible(fechaStr) {
    if(!fechaStr) return '';
    const [y, m, d] = fechaStr.split('-');
    return `${d}/${m}/${y}`;
}

function obtenerDiasEnRango(startStr, endStr) {
    let dates = [];
    let current = new Date(startStr + "T12:00:00");
    let end = new Date(endStr + "T12:00:00");
    
    while (current <= end) {
        dates.push(current.toISOString().split('T')[0]);
        current.setDate(current.getDate() + 1);
    }
    return dates;
}

function cargarSelectPeriodos() {
    const sel = document.getElementById('selPeriodo');
    sel.innerHTML = '';
    db.periodos.forEach(p => {
        let opt = document.createElement('option');
        opt.value = p.id;
        opt.innerText = p.name;
        if(p.id === db.activo) opt.selected = true;
        sel.appendChild(opt);
    });
}

function cambiarPeriodo() {
    db.activo = document.getElementById('selPeriodo').value;
    diaSeleccionado = null; // Resetea la vista diaria al cambiar de mes
    guardarDB();
    renderCarga();
}

function abrirModal() {
    document.getElementById('modalPeriodo').showModal();
}

function cerrarModal() {
    document.getElementById('modalPeriodo').close();
    document.getElementById('inPeriodName').value = '';
    document.getElementById('inPeriodStart').value = '';
    document.getElementById('inPeriodEnd').value = '';
}

function guardarPeriodo() {
    const name = document.getElementById('inPeriodName').value;
    const start = document.getElementById('inPeriodStart').value;
    const end = document.getElementById('inPeriodEnd').value;
    
    if(!name || !start || !end) {
        alert("Completa todos los campos");
        return;
    }
    if(start > end) {
        alert("La fecha de inicio debe ser anterior al fin");
        return;
    }

    let newId = 'p_' + Date.now();
    db.periodos.push({ id: newId, name, start, end });
    db.activo = newId;
    db.datos[newId] = {};
    guardarDB();
    
    cargarSelectPeriodos();
    cerrarModal();
    diaSeleccionado = null;
    renderCarga();
}

function showTab(tab) {
    document.getElementById('view-carga').classList.toggle('hidden', tab !== 'carga');
    document.getElementById('view-resumen').classList.toggle('hidden', tab !== 'resumen');
    
    const btnCarga = document.getElementById('btn-carga');
    const btnResumen = document.getElementById('btn-resumen');
    
    btnCarga.classList.toggle('active', tab === 'carga');
    btnCarga.setAttribute('aria-selected', tab === 'carga');
    
    btnResumen.classList.toggle('active', tab === 'resumen');
    btnResumen.setAttribute('aria-selected', tab === 'resumen');

    if(tab === 'resumen') renderResumen();
    else renderCarga();
}

function getPrecio(obra, cat, cod) {
    if (basePrecios[obra] && basePrecios[obra][cat] && basePrecios[obra][cat][cod] !== undefined) {
        return basePrecios[obra][cat][cod];
    }
    return 0;
}

function renderCarga() {
    const periodoActivo = db.periodos.find(p => p.id === db.activo);
    if(!periodoActivo) return;

    renderCalendario(periodoActivo);
    renderFormularioDia();
    actualizarTotalMes();
}

function renderCalendario(periodo) {
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';
    
    const fechas = obtenerDiasEnRango(periodo.start, periodo.end);
    if(fechas.length === 0) return;

    // Rellenar espacios vacíos si el mes no empieza en domingo
    let firstDate = new Date(fechas[0] + "T12:00:00");
    let startDayOfWeek = firstDate.getDay(); // 0 (Dom) a 6 (Sab)
    
    for(let i = 0; i < startDayOfWeek; i++) {
        let empty = document.createElement('div');
        empty.className = 'cal-day empty';
        grid.appendChild(empty);
    }

    // Renderizar días reales
    const obra = document.getElementById('selObra').value;
    const datosPeriodo = db.datos[db.activo] || {};

    fechas.forEach(fecha => {
        let cell = document.createElement('div');
        cell.className = 'cal-day';
        if(fecha === diaSeleccionado) cell.classList.add('selected');
        
        // Verificar si hay datos cargados para este día en la obra actual
        if(datosPeriodo[fecha] && datosPeriodo[fecha][obra]) {
            let info = datosPeriodo[fecha][obra];
            let tieneValores = Object.keys(info).some(k => k !== 'cond' && info[k] > 0);
            if(tieneValores || info.cond) cell.classList.add('has-data');
        }

        const dNum = fecha.split('-')[2];
        cell.innerText = parseInt(dNum); // Quita ceros a la izquierda
        cell.onclick = () => {
            diaSeleccionado = fecha;
            renderCarga();
        };
        grid.appendChild(cell);
    });
}

function renderFormularioDia() {
    const container = document.getElementById('day-form-container');
    
    if(!diaSeleccionado) {
        container.innerHTML = '<div class="empty-state">Selecciona un día en el calendario para cargar la producción.</div>';
        return;
    }

    const obra = document.getElementById('selObra').value;
    const cat = document.getElementById('selCat').value;
    const listaCodigos = codigosObra[obra];
    
    // Obtener datos del día
    if(!db.datos[db.activo]) db.datos[db.activo] = {};
    if(!db.datos[db.activo][diaSeleccionado]) db.datos[db.activo][diaSeleccionado] = {};
    if(!db.datos[db.activo][diaSeleccionado][obra]) db.datos[db.activo][diaSeleccionado][obra] = { cond: false };
    
    const infoDia = db.datos[db.activo][diaSeleccionado][obra];

    let html = `
        <div class="day-form-header">
            <h3>Carga del: ${formatearFechaVisible(diaSeleccionado)}</h3>
            <label class="day-driver-check">
                ¿Conductor? 
                <input type="checkbox" id="check-driver-day" ${infoDia.cond ? 'checked' : ''} onchange="guardarConductorDia(this.checked)" style="width:18px; height:18px; accent-color: var(--accent);">
            </label>
        </div>
        <table>
            <thead>
                <tr>
                    <th class="col-code">CÓDIGO</th>
                    <th>UNIDADES</th>
                    <th>SUBTOTAL $</th>
                </tr>
            </thead>
            <tbody>
    `;

    let totalDia = 0;
    
    listaCodigos.forEach(cod => {
        let prBase = getPrecio(obra, cat, cod);
        let prCond = getPrecio(obra, "Adic. Cond.", cod);
        let val = Number(infoDia[cod] || 0);
        let pagoRow = val * prBase;
        if(infoDia.cond) pagoRow += (val * prCond);
        
        totalDia += pagoRow;

        html += `
            <tr>
                <td class="col-code">${cod}</td>
                <td><input type="number" min="0" value="${val || ''}" oninput="guardarValorDia('${cod}', this.value)" style="width: 80px;"></td>
                <td class="subtotal-col">$ ${pagoRow.toLocaleString('es-AR', {minimumFractionDigits:1})}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
            <tfoot class="tfoot-totals">
                <tr>
                    <td class="label-total-dia" colspan="2" style="text-align:right;">TOTAL DEL DÍA:</td>
                    <td class="day-money" style="font-size:1.1rem; font-weight:900;">$ ${totalDia.toLocaleString('es-AR', {minimumFractionDigits:1})}</td>
                </tr>
            </tfoot>
        </table>
    `;

    container.innerHTML = html;
}

function guardarValorDia(cod, valStr) {
    let val = Number(valStr);
    const obra = document.getElementById('selObra').value;
    
    if(val <= 0) {
        delete db.datos[db.activo][diaSeleccionado][obra][cod];
    } else {
        db.datos[db.activo][diaSeleccionado][obra][cod] = val;
    }
    
    guardarDB();
    clearTimeout(window.t_u);
    window.t_u = setTimeout(() => {
        renderFormularioDia(); // Renderiza solo el formulario para no perder foco
        actualizarTotalMes();
        renderCalendario(db.periodos.find(p => p.id === db.activo)); // Actualiza punto verde
    }, 400);
}

function guardarConductorDia(isCond) {
    const obra = document.getElementById('selObra').value;
    db.datos[db.activo][diaSeleccionado][obra].cond = isCond;
    guardarDB();
    renderFormularioDia();
    actualizarTotalMes();
}

function actualizarTotalMes() {
    const obra = document.getElementById('selObra').value;
    const cat = document.getElementById('selCat').value;
    const datosActivos = db.datos[db.activo] || {};
    let totalMes = 0;

    Object.keys(datosActivos).forEach(fecha => {
        let infoDia = datosActivos[fecha][obra];
        if(infoDia) {
            let isCond = infoDia.cond === true;
            Object.keys(infoDia).forEach(cod => {
                if(cod !== 'cond') {
                    let val = Number(infoDia[cod]);
                    let pBase = getPrecio(obra, cat, cod);
                    let pCond = getPrecio(obra, "Adic. Cond.", cod);
                    totalMes += (val * pBase) + (isCond ? val * pCond : 0);
                }
            });
        }
    });

    document.getElementById('totalSemana').innerText = `$ ${totalMes.toLocaleString('es-AR', {minimumFractionDigits:1})}`;
}

function renderResumen() {
    const obra = document.getElementById('selObra').value;
    const cat = document.getElementById('selCat').value;
    const periodo = db.periodos.find(p => p.id === db.activo);
    if(!periodo) return;

    document.getElementById('pdf-title-text').innerText = `Consolidado: ${periodo.name}`;

    const fechas = obtenerDiasEnRango(periodo.start, periodo.end);
    // Dividir las fechas del mes en bloques de 7 días (S1, S2, etc.)
    const semanas = [];
    for(let i=0; i < fechas.length; i+=7) {
        semanas.push(fechas.slice(i, i+7));
    }

    const thead = document.getElementById('theadResumen');
    let hRow = `<tr><th class="col-code">COD</th>`;
    semanas.forEach((s, idx) => hRow += `<th scope="col">SEM ${idx+1}</th>`);
    hRow += `<th class="bg-light-gray" scope="col">TOTAL U.</th><th class="bg-success-light" scope="col">MONTO $</th></tr>`;
    thead.innerHTML = hRow;

    const tbody = document.getElementById('tbodyResumen');
    tbody.innerHTML = "";
    
    const lista = codigosObra[obra];
    const datos = db.datos[db.activo] || {};
    let granTotal = 0;

    lista.forEach(cod => {
        let totalU_Mes = 0;
        let totalMonto_Mes = 0;
        let rowHtml = `<td class="col-code">${cod}</td>`;
        let prBase = getPrecio(obra, cat, cod);
        let prCond = getPrecio(obra, "Adic. Cond.", cod);

        semanas.forEach(bloqueSemana => {
            let uSemana = 0;
            let montoSemana = 0;
            
            bloqueSemana.forEach(fecha => {
                let infoDia = datos[fecha]?.[obra];
                if(infoDia && infoDia[cod]) {
                    let val = Number(infoDia[cod]);
                    let esCond = infoDia.cond === true;
                    uSemana += val;
                    montoSemana += (val * prBase) + (esCond ? val * prCond : 0);
                }
            });

            totalU_Mes += uSemana;
            totalMonto_Mes += montoSemana;
            rowHtml += `<td>${uSemana > 0 ? uSemana : '-'}</td>`;
        });

        if(totalU_Mes > 0) {
            granTotal += totalMonto_Mes;
            let tr = document.createElement('tr');
            tr.innerHTML = rowHtml + `
                <td class="bg-light-gray" style="font-weight:bold;">${totalU_Mes}</td>
                <td class="subtotal-col bg-success-light">$ ${totalMonto_Mes.toLocaleString('es-AR', {minimumFractionDigits:1})}</td>
            `;
            tbody.appendChild(tr);
        }
    });

    document.getElementById('totalMensual').innerText = `$ ${granTotal.toLocaleString('es-AR', {minimumFractionDigits:1})}`;
}

function exportarPDF() {
    const element = document.getElementById('pdf-area');
    const periodo = db.periodos.find(p => p.id === db.activo);
    let nombreMes = periodo ? periodo.name.replace(/\s+/g, '_') : 'Mes';
    
    const opt = {
        margin:       [10, 10],
        filename:     `Resumen_Produccion_${nombreMes}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };
    html2pdf().set(opt).from(element).save();
}

let confirmReset = false;
function limpiarPeriodo() {
    const btn = document.querySelector('.btn-reset');
    
    if (!confirmReset) {
        btn.innerText = '¿BORRAR MES? CLIC DE NUEVO';
        btn.style.backgroundColor = 'var(--accent)';
        btn.style.color = 'var(--primary)';
        confirmReset = true;
        
        setTimeout(() => { 
            if(confirmReset) {
                confirmReset = false; 
                btn.innerText = 'BORRAR MES COMPLETO'; 
                btn.style.backgroundColor = 'var(--danger)';
                btn.style.color = 'white';
            }
        }, 3000);
        return;
    }
    
    const obra = document.getElementById('selObra').value;
    
    // Solo borra la obra actual del periodo activo
    if(db.datos[db.activo]) {
        Object.keys(db.datos[db.activo]).forEach(fecha => {
            if(db.datos[db.activo][fecha][obra]) {
                delete db.datos[db.activo][fecha][obra];
            }
        });
    }
    
    guardarDB();
    diaSeleccionado = null; // Resetea vista diaria
    renderCarga();
    
    btn.innerText = 'BORRAR MES COMPLETO';
    btn.style.backgroundColor = 'var(--danger)';
    btn.style.color = 'white';
    confirmReset = false;
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.getElementById('btn-theme').innerText = isDark ? '☀️' : '🌙';
    document.getElementById('btn-theme').setAttribute('title', isDark ? 'Activar Modo Claro' : 'Activar Modo Oscuro');
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('btn-theme').innerText = '☀️';
        document.getElementById('btn-theme').setAttribute('title', 'Activar Modo Claro');
    }
    cargarSelectPeriodos();
    renderCarga();
});
