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
      3. BOOTSCRIPT — construcción del DOM con clases de Bootstrap
         Todo componente visual recibe sus clases desde acá.
      ================================================================ */
   
   /* ── 3.1 NAVBAR ─────────────────────────────────────────────── */
   function construirNavbar() {
    const nav = document.getElementById("navbar");
  
    /* Clases Bootstrap: navbar, navbar-expand-lg, navbar-dark */
    nav.classList.add("navbar", "navbar-expand-lg", "navbar-dark");
  
    nav.innerHTML = `
      <div class="container-fluid px-4">
  
        <!-- Marca / logo -->
        <a class="navbar-brand d-flex align-items-center gap-2" href="#">
          <i class="bi bi-lightning-charge-fill text-warning fs-4"></i>
          <span class="brand-title">HeroVault</span>
        </a>
  
        <!-- Botón hamburguesa para mobile (Bootstrap: navbar-toggler) -->
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <!-- Links colapsables (Bootstrap: collapse navbar-collapse) -->
        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li class="nav-item">
              <!-- Botón que muestra la galería al hacer click -->
              <button id="btnVerPersonajes" class="btn btn-outline-light btn-sm fw-bold px-3">
                <i class="bi bi-grid-fill me-1"></i>Ver Personajes
              </button>
            </li>
            <!-- Botón que abre el modal de agregar héroe -->
            <li class="nav-item">
              <button
                class="btn btn-warning btn-sm fw-bold px-3"
                data-bs-toggle="modal"
                data-bs-target="#modalAgregar"
              >
                <i class="bi bi-plus-circle-fill me-1"></i>Nuevo Héroe
              </button>
            </li>
          </ul>
        </div>
  
      </div>
    `;
  }

  /* ── 3.7 GALERÍA (grilla) ───────────────────────────────────── */
  function aplicarClasesGaleria() {
    const galeria = document.getElementById("galeriaHeroes");
  
    /*
      Bootstrap: row + row-cols-* crean la grilla responsiva.
      g-4 = gap entre columnas/filas.
    */
    galeria.classList.add(
      "row",
      "row-cols-1",
      "row-cols-sm-2",
      "row-cols-md-3",
      "row-cols-xl-4",
      "g-4"
    );
  }
  /* ================================================================
      4. RENDERIZADO DE CARDS
         Genera las cards de Bootstrap dinámicamente desde el arreglo.
         Usa desestructuración para extraer id, nombre e imagen.
      ================================================================ */
      function renderizarPersonajes(lista) {
        const galeria   = document.getElementById("galeriaHeroes");
        const sinResult = document.getElementById("sinResultados");
        const contador  = document.getElementById("contadorResultados");
      
        galeria.innerHTML = "";
      
        if (lista.length === 0) {
          sinResult.style.display = "block";
          sinResult.innerHTML = `
            <i class="bi bi-emoji-frown"></i>
            <p>No se encontraron héroes con ese nombre.</p>
            <button id="btnVerTodos" class="btn btn-outline-warning mt-1">Ver todos</button>
          `;
          contador.textContent = "";
          /* Listener del botón "Ver todos" dentro del panel sin resultados */
          document.getElementById("btnVerTodos")
            .addEventListener("click", limpiarFiltro);
          return;
        }
      
        sinResult.style.display = "none";
        contador.textContent = `${lista.length} héroe${lista.length !== 1 ? "s" : ""} encontrado${lista.length !== 1 ? "s" : ""}`;
      
        lista.forEach((personaje) => {
          /* ── Desestructuración del objeto personaje ── */
          const { id, nombre, imagen } = personaje;
      
          /*
            Bootstrap en la card:
            - col                  → columna del grid (hereda row-cols-*)
            - card h-100           → tarjeta de altura completa
            - card-body            → cuerpo interno de la card
          */
          const col = document.createElement("div");
          col.classList.add("col");
      
          col.innerHTML = `
            <div class="card h-100 hero-card">
      
              <!-- Wrapper de imagen con overlay y badge -->
              <div class="card-img-wrapper">
                <img src="${imagen}" alt="${nombre}" loading="lazy" />
                <div class="card-img-gradient"></div>
                <span class="badge-id">#${id}</span>
              </div>
      
              <!-- Cuerpo de la card (Bootstrap: card-body) -->
              <div class="card-body p-3">
                <p class="hero-name">${nombre}</p>
                <!-- Botón eliminar: clase propia + data-id para identificar el personaje -->
                <button class="btn-eliminar" data-id="${id}">
                  <i class="bi bi-trash3-fill me-1"></i>Eliminar
                </button>
              </div>
      
            </div>
          `;
      
          galeria.appendChild(col);
        });
      }

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