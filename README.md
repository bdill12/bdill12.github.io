# Clockin

A private, mobile-first weekly time clock. Plain HTML, CSS and JavaScript; no application backend, dependencies, accounts, analytics or external APIs.

## Preview

From this directory run `npm start` (requires Python 3), then open `http://localhost:8080` on your own computer. Alternatively use any static file server. Opening the HTML as a file does not support JavaScript modules or offline installation.

Run calculation tests with `npm test` (Node 18+). No dependency installation or build step is required.

## Use

Monday through Friday have editable clock and lunch punches plus PTO. The large button records the next punch for today's local weekday. Select **No lunch today** to go directly from Clock In to Clock Out. Existing lunch entries are retained but ignored while this setting is enabled. Completed days and the current day's live elapsed work count toward the total. PTO across all five days counts toward the 40-hour goal.

The leave estimate allocates all remaining weekly hours to today's shift; it does not assume work on future days. Before lunch, it assumes no lunch deduction and says so. During lunch, an exact estimate waits for Lunch In. Estimates beyond midnight display a date; overnight punch entry is not supported. All punches use minute precision and local time, without rounding rules.

Each calendar week has a separate browser-local record; Monday starts a fresh view without overwriting previous weeks. The interface shows the current week only. Clear Week requires confirmation and clears only the displayed week. Browser storage is not a backup: clearing site data or using another browser/device will not preserve punches.

## GitHub Pages and iPhone

Publish these files at the root of a GitHub Pages site: repository Settings → Pages → Deploy from a branch → select the branch containing the app and `/ (root)`. No build is necessary. Relative asset paths support project sites. Hosting requires no paid service or external API.

Open the HTTPS site in Safari on your iPhone, then Share → Add to Home Screen. After its first online load, the service worker caches the app for offline use. Native iOS hardware installation has not been tested in this cloud environment.

When changing cached app assets, bump `CACHE` in `sw.js` so installations receive the new version after the old app windows close.
