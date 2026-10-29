# Change log

## 2026-10-29 — Grad portfolio gallery

- Replaced the Grad page placeholders with all 39 photos from the Grad source folder, exported as WebP assets with descriptive filenames and image dimensions.
- Added an asset manifest recording source filenames, SHA-256 hashes, export filenames, and dimensions; verified the originals remain unchanged.
- Displayed photos as consistent 2:3 portrait tiles in a responsive grid with three desktop columns, two tablet columns, and one narrow-screen column.
- Added lazy image loading and a fade-and-rise reveal as photos enter the viewport, with reduced-motion support.
- Removed the warm gallery container and Grad heading, using a full-width white layout while preserving the navigation, footer, colors, and font.
- Checked all 39 image assets and references and ran `git diff --check`. Browser visual verification remains incomplete.

## Restore At a Glance grid

- Restored the original responsive photo grid and retained all 12 photos in their existing order.
- Removed carousel controls, horizontal scrolling, and autoplay.
- Preserved the centered About Me layout and Book Me button.
