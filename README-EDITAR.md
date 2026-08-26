# 🖥️ Tu sitio web — Guía para editarlo solo

Este sitio está hecho con **HTML, CSS y JavaScript puro** (sin frameworks, sin bases de datos, sin build).
Por eso es **muy fácil de tocar**: cualquier texto o proyecto lo cambiás abriendo un archivo y editando texto, como en un documento. No necesitás ser programador.

---

## 🔑 Dónde está cada cosa

```
Portfolio/
├── index.html        ← TODO el contenido y los textos (lo que se ve)
├── css/styles.css    ← colores, tipografías y estilos (diseño)
├── js/app.js         ← interacciones (menú, formulario, botón WhatsApp)
└── assets/
    └── mi-foto.png   ← tu foto (Sobre mí)
```

> 📌 Regla de oro: **casi nunca vas a tocar `styles.css` ni `app.js`**. Lo que vas a editar es `index.html`.

---

## ✏️ Ediciones más comunes (paso a paso)

### 1) Cambiar TU número de WhatsApp
Tu número actual está configurado y funciona. Si algún día lo cambiás, solo tenés que reemplazar **el número en un solo lugar** de `js/app.js` (y se actualiza el formulario):

1. Abrí `js/app.js`.
2. Buscá la línea que dice:`const WA_NUMBER = "5493584180337";`
3. Reemplazalo por tu número con el formato **cód.país + área + número, sin "+"**.
   Ej: si tu celu es 358 123-4567: `"5493581234567"`
4. Guardá y recargá la página.

> El botón flotante y el enlace del formulario también llevan tu número en `index.html`
> (buscá con `Ctrl+F`: "wa.me/5493584180337"). Si lo cambiás acá, actualizá también
> el botón flotante de `index.html` para que apunte al mismo número.

### 2. Cambiar tu EMAIL de contacto
Tu email actual (`pardocatriel@gmail.com`) ya está configurado.
1. Abrí `index.html`.
2. Buscá `pardocatriel@gmail.com` y reemplazalo por tu mail nuevo si lo cambiás.

### 3. Editar textos (títulos, descripciones, servicios)
1. Abrí `index.html`.
2. Buscá el texto que querés cambiar (con `Ctrl+F`).
3. Reescribilo entre las etiquetas. Ejemplo:
   ```html
   <h3>Aparecés en Google</h3>
   <p>Tu texto nuevo acá.</p>
   ```
4. Guardar. No hace falta tocar nada más: el diseño se adapta solo.
   - No borres las etiquetas `<h3>`, `<p>`, `<li>`... de los costados, solo el texto de adentro.

### 4. Agregar o quitar un TESTIMONIO
1. En `index.html`, buscá `id="testimonios"`.
2. Cada bloque entre `<blockquote>...</blockquote>` es un testimonio.
3. Para agregar uno: copiá uno existente y pegá el bloque copiado debajo.
4. Para borrar: eliminá el bloque completo.

### 5. Cambiar TU foto
1. Reemplazá el archivo `assets/mi-foto.png` por tu foto actual (con el mismo nombre y formato).
   Si preferís otro nombre, editá en `index.html` la línea `<img src="assets/mi-foto.png" ...>`.

### 6. Editar la sección "Sobre mí" y "Formación"
La sección Sobre mí ya está **rellenada con los datos de tu CV** (título ISPC, formación, certificaciones).
Para modificarlos, abrí `index.html` y buscá `id="sobre-mi"`. Ahí vas a encontrar:
- El texto de presentación.
- Los contadores (`1+` años, `6` proyectos) — actualizá los números cuando cambien.
- El listado **Formación y certificaciones** (título, Full Stack, Python, Oracle ONE, Inglés C1), donde podés agregar o sacar filas copiando/borrando bloques `<div class="edu-item">...</div>`.

### 7. Editar testimonios
Buscá `id="testimonios"` y reemplazá el texto entre comillas y los `[Nombre]` por los reales.
Podés borrar tarjetas si todavía no tenés testimonios.

---

## 🚀 Cómo ver y publicar tu sitio

### Verlo en tu computadora (sin internet)
1. Doble click en `index.html`. Se abre en tu navegador. Es todo lo que necesitás para ver los cambios.

### Publicarlo en internet (gratis / fácil)
Está preparado para **GitHub Pages**, que es gratis:
1. Creá un repositorio en github.com (público).
2. Subí los archivos (o usá el panel "Upload files" de GitHub).
3. En el repo: *Settings → Pages → Source: Branch `main` → Save*.
   En unos minutos tu sitio queda en `https://TU-USUARIO.github.io/TU-REPO/`.

Otra opción muy simple y apta para comercios: **Netlify Drop**:
1. Entrá a `netlify.com/drop` y arrastrá la carpeta del proyecto.
2. Te dan una URL en segundos. (Una versión editable en producción puede requerir cuenta/plan.)

---

## 🎨 Personalizar colores (avanzado)
Los colores están como "variables" al inicio de `css/styles.css` (sección *Design tokens*).
Cambiá el valor hexadecimal de un color y se actualiza en todo el sitio. Ej.:
```css
--terracota: #B4552F;  /* cambialo por otro coffee/hex si querés */
```

---

## 😊 Consejo
Guardá una **copia de respaldo** de la carpeta (`Portfolio`) en la nube o en un pendrive.
Si alguna vez rompés algo y no se ve bien, copiés el archivo original de nuevo. TODO está separado: si rompés `index.html`, el diseño sigue funcionando igual.

Con esto ya podés mantener tu sitio vos misma, rápido y sin depender de un desarrollador.