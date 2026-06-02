# HeroVault — Galería de Superhéroes

Práctica: Manipulación del DOM con JavaScript  
Instituto Politécnico Formosa

---

## Descripción

Galería interactiva de superhéroes desarrollada con **HTML semántico**, **Bootstrap 5** y **JavaScript vanilla**.  
El proyecto aplica manipulación del DOM, objetos, funciones, eventos y un flujo de trabajo profesional con Git.

---

## Tecnologías utilizadas

| Tecnología      | Uso                                         |
| --------------- | ------------------------------------------- |
| HTML5           | Estructura semántica de la página           |
| Bootstrap 5.3   | Grid, componentes, utilidades               |
| Bootstrap Icons | Íconos SVG                                  |
| CSS3            | Estilos propios, hover effects, animaciones |
| JavaScript ES6+ | Lógica de la aplicación (bootscript)        |

---

## Funcionalidades

- **Renderizado de cards** — generadas dinámicamente desde el arreglo `personajes`
- **Agregar héroe** — formulario con validación Bootstrap en modal
- **Eliminar héroe** — botón en cada card, actualiza el arreglo y el DOM
- **Filtro por nombre** — búsqueda sin recargar la página
- **Diseño responsivo** — adaptado a móvil, tablet y desktop
- **Notificaciones Toast** — feedback visual al agregar o eliminar

---

## Estructura del proyecto

```
practica-dom-[apellido-nombre]/
├── index.html          ← Estructura mínima, form con clases comentadas
├── README.md
└── assets/
    ├── css/
    │   └── style.css   ← Estilos propios que complementan Bootstrap
    └── js/
        └── app.js      ← Bootscript: clases Bootstrap asignadas desde JS
```

---

## Concepto de Bootscript

Las clases de Bootstrap **no se escriben directamente en el HTML** (salvo el formulario base).  
En su lugar, `app.js` construye todos los componentes y les asigna sus clases mediante `innerHTML` y `classList.add()`.  
Esto permite separar la estructura de la presentación y mantener el HTML limpio.

---

## Requisitos técnicos cubiertos

- [x] Estructura HTML semántica
- [x] 3+ componentes Bootstrap: Navbar, Modal, Toast, Input Group, Card
- [x] Diseño responsivo (Bootstrap grid + media queries)
- [x] Estilos propios con efectos hover en cards
- [x] Único `const personajes` como fuente de verdad
- [x] Todo el contenido dinámico generado desde JS
- [x] `addEventListener` para todos los eventos
- [x] Template literals para construir HTML dinámico
- [x] Desestructuración en funciones (`renderizarPersonajes`, `filtrarPersonajes`)

---

## Flujo de trabajo Git

```
main                   ← base HTML + Bootstrap + CSS
├── feature/catalogo   ← renderizado de cards + filtro
└── feature/formulario ← formulario de alta + eliminación
```

Mínimo 8 commits entre todas las ramas.

---

## Instalación

No requiere dependencias. Abrir `index.html` en el navegador.
