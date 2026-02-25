document.getElementById('btnCalcular').addEventListener('click', function () {
    const VALOR_DIA_BASE = 35000;
    const DESCUENTO_DIA_EXTRA = 0.02; 

   
    const modalidad = document.getElementById('modalidad').value;
    const numEquipos = parseInt(document.getElementById('equipos').value);
    const diasIni = parseInt(document.getElementById('diasIniciales').value);
    const diasAdi = parseInt(document.getElementById('diasAdicionales').value) || 0;
    const email = document.getElementById('email').value;

    
    if (numEquipos < 2) {
        alert("ALQUIPC requiere un alquiler mínimo de 2 equipos.");
        return;
    }

    if (!email.includes("@")) {
        alert("Por favor ingrese un e-mail válido.");
        return;
    }

    let costoDiasIni = numEquipos * diasIni * VALOR_DIA_BASE;
    let valorDiaConDcto = VALOR_DIA_BASE * (1 - DESCUENTO_DIA_EXTRA);
    let costoDiasAdi = numEquipos * diasAdi * valorDiaConDcto;

    let subtotal = costoDiasIni + costoDiasAdi;
    let ajuste = 0;
    let detalleAjuste = "Ninguno";
    let tipoAjuste = "sin ajuste";

    if (modalidad === "2") { 
        ajuste = subtotal * 0.05;
        subtotal += ajuste;
        detalleAjuste = "Incremento por domicilio fuera de la ciudad";
        tipoAjuste = "incremento del 5%";
    } else if (modalidad === "3") { 
        ajuste = subtotal * 0.05;
        subtotal -= ajuste;
        detalleAjuste = "Descuento por alquiler en el establecimiento";
        tipoAjuste = "descuento del 5%";
    } else {
        detalleAjuste = "Sin ajustes por modalidad (dentro de la ciudad)";
    }

    const idCliente = "ALQ-" + Date.now().toString().slice(-6);
    const modalTxt = document.getElementById('modalidad').options[document.getElementById('modalidad').selectedIndex].text;
    
    let detalleDescuentosIncrementos = `<div class="calculation-details">
        <p><strong>📋 Cálculo detallado:</strong></p>
        <p>• Días iniciales: ${diasIni} días × ${numEquipos} equipos × $${VALOR_DIA_BASE.toLocaleString()} = $${costoDiasIni.toLocaleString()}</p>`;
    
    if (diasAdi > 0) {
        detalleDescuentosIncrementos += `
        <p>• Días adicionales: ${diasAdi} días × ${numEquipos} equipos × $${valorDiaConDcto.toLocaleString()} = $${costoDiasAdi.toLocaleString()}</p>
        <p class="discount-note">  → Descuento del 2% aplicado a días adicionales ($${(VALOR_DIA_BASE - valorDiaConDcto).toLocaleString()} menos por día)</p>`;
    }
    
    detalleDescuentosIncrementos += `<p><strong>Subtotal antes de ajustes:</strong> $${(costoDiasIni + costoDiasAdi).toLocaleString()}</p>`;
    
    if (ajuste !== 0) {
        const signo = modalidad === "2" ? "+" : "-";
        detalleDescuentosIncrementos += `
        <p><strong>${detalleAjuste}:</strong> ${signo}$${ajuste.toLocaleString()} (${tipoAjuste})</p>`;
    } else {
        detalleDescuentosIncrementos += `<p><strong>${detalleAjuste}</strong></p>`;
    }
    
    detalleDescuentosIncrementos += `</div>`;

    document.getElementById('detalleFactura').innerHTML = `
        <div class="invoice-header">
            <p><strong>🆔 ID Cliente:</strong> ${idCliente}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
        </div>
        <hr>
        <div class="invoice-details">
            <p><strong>📍 Opción de alquiler:</strong> ${modalTxt}</p>
            <p><strong>💻 Equipos alquilados:</strong> ${numEquipos} equipos</p>
            <p><strong>📅 Días de alquiler:</strong> ${diasIni} día${diasIni > 1 ? 's' : ''} iniciales</p>
            <p><strong>➕ Días adicionales:</strong> ${diasAdi} día${diasAdi !== 1 ? 's' : ''}</p>
        </div>
        <hr>
        ${detalleDescuentosIncrementos}
    `;

    document.getElementById('totalFinal').innerText = "$" + Math.round(subtotal).toLocaleString();
    document.getElementById('factura').classList.remove('hidden');
    
    document.getElementById('factura').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});