/* CH40051 — exam lock.
 *
 * One switch for the whole site. While it is on, every page that loads this
 * file sends the reader to the hub, which during an examination carries the
 * closed notice instead of the lecture list. A bookmark straight to a bench
 * is therefore closed too, which a replacement index.html on its own cannot
 * do.
 *
 * To lock   : set LOCKED to true, upload this file and upload the closed hub
 *             as index.html.
 * To unlock : set LOCKED to false, upload this file and put the real
 *             index.html back. Nothing else on the site has to change.
 *
 * The hub itself is never redirected, so there is no loop: the lock only
 * sends a reader somewhere else when the page is not already the hub.
 */
(function () {
  var LOCKED = true;          /* <<< the only line to change */

  if (!LOCKED) return;

  var here = location.pathname;

  /* already at the hub - either "/", "/something/" or "/index.html" */
  if (/(^|\/)(index\.html)?$/.test(here)) return;

  /* a copy opened from disk (file://) during preparation is left alone, so
     the instructor can still check pages while the live site is locked */
  if (location.protocol === "file:") return;

  location.replace("./");
})();
