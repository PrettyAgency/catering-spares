# Catering Spares — Homepage Redesign

Static homepage implemented from the Claude Design project
"Catering Spares Homepage Redesign.dc.html".

## Structure

- `index.html` — the homepage
- `css/styles.css` — all styling (desktop + mobile breakpoints)
- `js/main.js` — hero slider (autoplay, arrows, dots), mobile nav drawer, back-to-top, newsletter stub
- `images/` — imagery exported from the design project
- `design/` — the original Claude Design source file, kept for reference

## Local preview

Just open `index.html` in a browser — no build step required.
Or serve it:

```
python3 -m http.server 8000
```

## Notes

- Links point at the live cateringspares.com.au (Magento) URLs from the design.
- The newsletter form is front-end only; wire it to your mailing-list provider when ready.
