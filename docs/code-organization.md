# Code Organization

### Lazy Loading

For main landing pages that don't require user auth, I've taken the effort to use dynamic loading for anything that is not required for the page to render.

This means several function have an `export default XXXX` so that it can be lazy loaded in. This also means that those modules / functions that are lazy loaded in and not used anywhere else are typically not included in the index.ts file for the accompanying library.
