(function () {
  function initWidget() {
    const config = window.WidgetConfig || {};
    const clientId = config.clientId;

    if (!clientId) {
      console.warn('[Widget] Missing data-client-id');
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.src = `https://self-booking.vercel.app/embed?clientId=${clientId}`;
    iframe.allow = 'clipboard-write';
    iframe.loading = 'lazy';
    iframe.style.position = 'fixed';
    iframe.style.bottom = '24px';
    iframe.style.right = '24px';
    iframe.style.width = 'auto';
    iframe.style.height = 'auto';
    iframe.style.border = 'none';
    iframe.style.background = 'transparent';
    iframe.style.zIndex = '9999';
    iframe.style.overflow = 'visible'; // allow dropdowns/pickers
    iframe.style.pointerEvents = 'auto'; // allow interaction

    document.body.appendChild(iframe);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }
})();
