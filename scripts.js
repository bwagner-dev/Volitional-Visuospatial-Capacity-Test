window.vvct = {
  restartAnimations: function (selector) {
    try {
      const root = document.querySelector(selector || 'svg');
      if (!root) return;
      const anims = root.querySelectorAll('animate, animateMotion');
      anims.forEach(a => {
        if (typeof a.beginElement === 'function') {
          try { a.beginElement(); return; } catch { }
        }
        const clone = a.cloneNode(true);
        a.replaceWith(clone);
      });
    } catch {
      // no-op; avoid surfacing to Blazor error UI
    }
  }
};
