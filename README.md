# Phone preview

Open `index.html` in your browser. No install, server, or build is needed.

```text
index.html         Opens the phone preview
app/               The page shown inside the phone
  index.html       Your page's HTML
  src/
    styles.css     Your page's CSS
    main.js        Your page's JavaScript
phone/             The phone frame's styles and fonts
  styles.css
  fonts/
```

Work in `app/` for your page. Put its images and other assets in `app/assets/` when needed. The phone loads `app/index.html` in an iframe, with separate styles and internal scrolling. Its viewport is 402px wide.

Work in `phone/` to change the frame. The preview is 600px tall at 100% zoom. Zooming out centers it; zooming in allows scrolling. Short windows also scroll. Keep the fixed CSS scale so browser zoom works normally.

On phone-sized screens the frame is hidden and the app fills the viewport. Swipe up at least 40px starting within the top 120px of the app to reveal a hidden section above the iframe. There is no visible tab or handle. Mouse dragging works too; Alt+Shift+F toggles the section from the keyboard. Its Full screen button expands the app without the frame; the same button exits. Swipe down on the section or select Hide to dismiss it. Browsers that cannot enter native full screen expand within the current window and show a message that browser bars remain visible.

The toolbar markup lives in the root `index.html`; its styling and behavior live in `phone/styles.css` and `phone/main.js`. Full-screen behavior belongs to this outer shell, independently of the iframe app. The iframe loads `phone/gestures.js` as a small input bridge that sends gesture and keyboard messages to the shell, allowing both direct-file and localhost previews without reading the iframe DOM.

The dot folders are project support files:

- `.dev/` holds optional developer tools. Run `node .dev/check-browser.mjs` to check browser zoom and iframe behavior. It saves screenshots in ignored `.dev/artifacts/`.
- `.openai/` preserves this project's existing hosting connection. You do not need to edit it for local work.
- `.git/` stores version history.

Only for hosting, `node .dev/build.mjs` creates a fresh `dist/` copy. Local preview always uses the root `index.html`; generated files are not a second place to edit.
