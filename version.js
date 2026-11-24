/* SpeedKit — la versión actual. Lo lee el panel al abrirse.

   NO es un JSON: es una llamada, para que el panel pueda cargarlo con
   una etiqueta <script>. Cambia SOLO los valores de abajo.

   version : el mismo número que pusiste en armar-speedkit.js
   url     : a dónde manda el botón "Descargar"
   nota    : opcional. Si la dejas en "" solo dice que hay versión nueva. */

SpeedKitVersion._recibe({
  "version": "1.2.3",
  "url": "https://stefanolio.com/mi-speed-kit",
  "nota": "SubKit: arreglo para Mac y mejoras en los subtítulos"
});
