/* ================================================================
   app.js — Galería de Superhéroes
   Bootscript: las clases de Bootstrap se aplican desde JavaScript.
   El arreglo `personajes` es la única fuente de verdad.
   ================================================================ */

   "use strict";

   /* ----------------------------------------------------------------
      1. DATOS INICIALES — arreglo provisto por la consigna (no modificar)
      ---------------------------------------------------------------- */
   const personajes = [
     { id: 1, nombre: "A-Bomb",      imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg" },
     { id: 2, nombre: "Abe Sapien",  imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg" },
     { id: 3, nombre: "Abin Sur",    imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg" },
     { id: 4, nombre: "Abomination", imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg" },
     { id: 5, nombre: "Abraxas",     imagen: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg" },
   ];
   
   /* ----------------------------------------------------------------
      2. CONTADOR DE IDS — para nuevos personajes agregados
      ---------------------------------------------------------------- */
   let nextId = personajes.length + 1;

     /* ================================================================
      9. INICIALIZACIÓN — punto de entrada de la aplicación
      ================================================================ */
      document.addEventListener("DOMContentLoaded", () => {
        /* Paso 1: Construir estructura con clases Bootstrap desde JS */
        construirNavbar();
        construirHeader();
        construirFiltro();
        construirModal();
        construirToast();
        construirFooter();
      
        /* Paso 2: Aplicar clases Bootstrap a la grilla */
        aplicarClasesGaleria();