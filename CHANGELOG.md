# Change log

## Carousel automatic scrolling

- At a Glance advances one visible group of photos every 5 seconds and wraps to the beginning after the last group.
- Hovering over a photo pauses automatic scrolling. Leaving the photo starts a new 5-second countdown.
- Mouse clicks do not leave automatic scrolling paused because of retained focus.
- Keyboard interaction pauses automatic scrolling while keyboard focus remains in the section.
- Automatic scrolling pauses when the browser tab is hidden and is disabled for visitors who prefer reduced motion.
- Prev and Next remain available on desktop and mobile. The Pause/Play button was removed.
- Updated the carousel script URL to load the latest behavior instead of a cached version.
- Existing colors, typography, photos, and centered About Me layout are preserved.

Validation: JavaScript syntax checked with `node --check carousel.js`; whitespace checked with `git diff --check`. Mobile controls use the same click handlers as desktop; no separate touch pause behavior was added.
