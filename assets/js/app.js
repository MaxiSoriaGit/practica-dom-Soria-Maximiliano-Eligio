 /* ── 3.4 MODAL ──────────────────────────────────────────────── */
 function construirModal() {
    const wrapper = document.getElementById("modalAgregarWrapper");
  
    /*
      Bootstrap components usados:
      - modal fade                    → overlay animado
      - modal-dialog modal-dialog-centered  → centrado vertical
      - modal-content                 → caja blanca del modal
      - modal-header / body / footer  → secciones del modal
      - btn-close btn-close-white     → botón X de cierre
    */
    wrapper.innerHTML = `
      <div
        class="modal fade"
        id="modalAgregar"
        tabindex="-1"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
  
            <!-- Cabecera del modal -->
            <div class="modal-header">
              <h5 class="modal-title text-warning" id="modalLabel">
                <i class="bi bi-person-plus-fill me-2"></i>Agregar nuevo héroe
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
  
            <!-- Cuerpo: aquí se monta el formulario desde el <template> -->
            <div class="modal-body" id="modalBody"></div>
  
            <!-- Pie del modal -->
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                Cancelar
              </button>
              <!-- Submit enlazado al form por atributo form="formAgregar" -->
              <button type="submit" form="formAgregar" class="btn btn-warning fw-bold">
                <i class="bi bi-plus-circle me-1"></i>Agregar héroe
              </button>
            </div>
  
          </div>
        </div>
      </div>
    `;
  
    /* Montar el formulario (desde <template> en el HTML) dentro del modal */
    const tpl    = document.getElementById("tplFormulario");
    const clon   = tpl.content.cloneNode(true);
    document.getElementById("modalBody").appendChild(clon);
  }

/* ── 3.5 TOAST ──────────────────────────────────────────────── */
   function construirToast() {
    const wrapper = document.getElementById("toastWrapper");
  
    /*
      Bootstrap components usados:
      - toast                         → componente de notificación
      - align-items-center, border-0  → utilidades de layout
    */
    wrapper.innerHTML = `
      <div
        id="toastNotif"
        class="toast align-items-center border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="d-flex">
          <div class="toast-body fw-semibold" id="toastMensaje"></div>
          <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Cerrar"
          ></button>
        </div>
      </div>
    `;
  }

  /* ── 3.6 FOOTER ─────────────────────────────────────────────── */
  function construirFooter() {
    document.getElementById("siteFooter").innerHTML = `
      <i class="bi bi-lightning-charge-fill text-warning me-1"></i>
      HeroVault &copy; ${new Date().getFullYear()} — Práctica DOM con JavaScript
    `;
  }

  /* ================================================================
      8. TOAST — notificación de feedback
      ================================================================ */
      function mostrarToast(mensaje, tipo = "success") {
        const toastEl  = document.getElementById("toastNotif");
        const toastMsg = document.getElementById("toastMensaje");
      
        /* Remover clases previas de tipo y aplicar la nueva */
        toastEl.classList.remove("toast-success", "toast-danger");
        toastEl.classList.add(`toast-${tipo}`);
        toastMsg.textContent = mensaje;
      
        /* Inicializar y mostrar el Toast de Bootstrap */
        const bsToast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2800 });
        bsToast.show();
      }