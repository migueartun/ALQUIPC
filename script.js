document.getElementById('btnCalcular').addEventListener('click', function () {
    const VALOR_DIA_BASE = 35000;
    const PORCENTAJE_DCTO_DIA_EXTRA = 0.02; 
    const VALOR_MINIMO_DIA = 31000; 
    
    const modalidad = document.getElementById('modalidad').value;
    const numEquipos = parseInt(document.getElementById('equipos').value);
    const diasIni = parseInt(document.getElementById('diasIniciales').value);
    const diasAdi = parseInt(document.getElementById('diasAdicionales').value) || 0;
    const nombreCliente = document.getElementById('nombreCliente').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value;

    if (!nombreCliente || !/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombreCliente)) {
        alert("Por favor, ingrese un nombre válido (solo letras).");
        return;
    }

    if (numEquipos < 2) {
        alert("ALQUIPC requiere un alquiler mínimo de 2 equipos.");
        return;
    }

    if (diasIni < 1) {
        alert("Los días iniciales deben ser al menos 1.");
        return;
    }

    if (diasAdi < 0) {
        alert("Los días adicionales no pueden ser negativos.");
        return;
    }

    if (!email.includes("@") || email.length < 5) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    
    let costoDiasIni = numEquipos * diasIni * VALOR_DIA_BASE;

    let valorDiaConDcto = VALOR_DIA_BASE * (1 - PORCENTAJE_DCTO_DIA_EXTRA);
    
    if (valorDiaConDcto < VALOR_MINIMO_DIA) {
        valorDiaConDcto = VALOR_MINIMO_DIA;
    }
    
    let costoDiasAdi = numEquipos * diasAdi * valorDiaConDcto;

    let subtotal = costoDiasIni + costoDiasAdi;
    let ajuste = 0;
    let detalleAjuste = "Sin ajustes adicionales";
    let tipoAjuste = "";

    if (modalidad === "2") { 
        ajuste = subtotal * 0.05;
        subtotal += ajuste;
        detalleAjuste = "Incremento por domicilio (5%)";
        tipoAjuste = "incremento";
    } else if (modalidad === "3") { 
        ajuste = subtotal * 0.05;
        subtotal -= ajuste;
        detalleAjuste = "Descuento por uso en local (5%)";
        tipoAjuste = "descuento";
    }

    const idCliente = "ALQ-" + Date.now().toString().slice(-6);
    const modalTxt = document.getElementById('modalidad').options[document.getElementById('modalidad').selectedIndex].text;
    
    let htmlFactura = `
        <div class="invoice-header">
            <h3>Factura Digital ALQUIPC</h3>
            <p><strong>ID Cliente:</strong> ${idCliente}</p>
            <p><strong>Cliente:</strong> ${nombreCliente}</p>
            <p><strong>Email:</strong> ${email}</p>
        </div>
        <hr>
        <div class="invoice-body">
            <p><strong>Modalidad:</strong> ${modalTxt}</p>
            <p><strong>Equipos:</strong> ${numEquipos}</p>
            <p><strong>Días Iniciales:</strong> ${diasIni} ($${VALOR_DIA_BASE.toLocaleString()}/día)</p>
            <p><strong>Días Adicionales:</strong> ${diasAdi} ($${valorDiaConDcto.toLocaleString()}/día)</p>
        </div>
        <div class="calculation-details" style="background: #f9f9f9; padding: 10px; border-radius: 5px;">
            <p>• Subtotal Equipos: $${(costoDiasIni + costoDiasAdi).toLocaleString()}</p>
            <p>• ${detalleAjuste}: ${tipoAjuste === 'incremento' ? '+' : '-'}$${ajuste.toLocaleString()}</p>
        </div>
    `;

    document.getElementById('detalleFactura').innerHTML = htmlFactura;
    document.getElementById('totalFinal').innerText = "$" + Math.round(subtotal).toLocaleString();
    
    const facturaContainer = document.getElementById('factura');
    facturaContainer.classList.remove('hidden');
    facturaContainer.scrollIntoView({ behavior: 'smooth' });

    console.log("Factura generada y lista para envío por e-mail a: " + email);
});