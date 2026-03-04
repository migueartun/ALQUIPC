#  ALQUIPC - Sistema de Facturación

Sistema web de facturación digital para el servicio de alquiler de equipos de cómputo.

##  Descripción

ALQUIPC es una aplicación web sencilla y eficiente que permite generar facturas digitales para el alquiler de equipos de cómputo. El sistema calcula automáticamente el costo total considerando la cantidad de equipos, días de alquiler, modalidad de servicio, y aplica descuentos e incrementos según corresponda.

### Características principales:

-  Generación de facturas digitales instantáneas
-  Cálculo automático de precios con descuentos e incrementos
-  Sistema de facturación electrónica (enviado por email)
-  Tres modalidades de alquiler (ciudad, fuera de ciudad, establecimiento)
-  Desglose detallado de costos
-  Sistema ecológico sin impresión de papel

##  Tarifas y Condiciones

- Precio base: $35.000 por equipo/día
- Alquiler mínimo: 2 equipos
- Descuento días adicionales: -2% por cada día adicional (aplicado solo a días extra)

### Modalidades de alquiler:

 Modalidad  Ajuste de precio 

Dentro de la ciudad  Precio estándar 
Fuera de la ciudad  +5% (domicilio) 
En el establecimiento  -5% (descuento) 

##  Instalación

No requiere instalación de dependencias. Es una aplicación web estática.

### Opción 1: Abrir directamente
1. Descarga o clona este repositorio
2. Abre el archivo `index.html` en cualquier navegador web moderno



## Instrucciones de Uso

1. **Seleccionar modalidad de alquiler:**
   - Dentro de la ciudad (precio estándar)
   - Fuera de la ciudad (incluye costo de domicilio)
   - En el establecimiento (con descuento)

2. **Ingresar cantidad de equipos:**
   - Mínimo 2 equipos requeridos

3. **Especificar días de alquiler:**
   - Días iniciales (mínimo 1)
   - Días adicionales (opcional, con descuento del 2%)

4. **Ingresar correo del cliente:**
   - El cliente debe proporcionar un email válido

5. **Generar factura:**
   - Hacer clic en el botón "Generar Factura Digital"
   - La factura se mostrará con todos los detalles del cálculo
   - Se genera un ID único de cliente (formato: ALQ-XXXXXX)

##  Estructura del Proyecto


alqui
 index.html           Estructura HTML principal
 script.js            Lógica de negocio y cálculos
 style.css            Estilos y diseño visual
 README.md            Este archivo


##  Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive y moderno
- **JavaScript (Vanilla)** - Lógica de cálculos sin dependencias externas

##  Lógica de Cálculo

El sistema aplica la siguiente lógica financiera:

1. **Cálculo de días iniciales:**
   Costo = Número de equipos × Días iniciales × $35.000

2. **Cálculo de días adicionales (con descuento):**
   Valor por día con descuento = $35.000 × (1 - 0.02) = $34.300
   Costo adicional = Número de equipos × Días adicionales × $34.300

3. **Subtotal:**
   Subtotal = Costo días iniciales + Costo días adicionales
   

4. **Ajustes por modalidad:**
   - Fuera de ciudad: `Subtotal × 1.05`
   - En establecimiento: `Subtotal × 0.95`
   - Dentro de ciudad: Sin ajuste

##  Ejemplo de Cálculo

**Caso:** 3 equipos, 2 días iniciales, 1 día adicional, fuera de la ciudad

Días iniciales:    3 equipos × 2 días × $35.000 = $210.000
Días adicionales:  3 equipos × 1 día × $34.300  = $102.900
Subtotal:                                         $312.900
Incremento (+5%):                                 +$15.645
TOTAL:                                            $328.545

##  Validaciones

El sistema incluye validaciones para garantizar la integridad de los datos:

- ✓ Mínimo 2 equipos
- ✓ Al menos 1 día inicial
- ✓ Email válido con formato correcto (@)
- ✓ Números positivos en todos los campos numéricos

##  Compatibilidad de Navegadores

-  Chrome 
-  Firefox
-  Edge
-  Safari
-  Opera

##  Responsive Design

La aplicación está optimizada para:
-  Computadoras de escritorio
-  Tablets
-  Teléfonos móviles


##  Licencia

Este proyecto es de uso libre para fines educativos y comerciales.

##  Contacto

Para soporte o consultas sobre el sistema ALQUIPC, contactar al administrador del sistema.


**ALQUIPC** - Sistema de Facturación Digital  Versión 1.0  2026
