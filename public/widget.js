(function () {
  function initWidget() {
    const config = window.WidgetConfig || {};
    const clientId = config.clientId;

    if (!clientId) {
      console.warn('[Widget] Missing clientId in window.WidgetConfig');
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.id = 'booking-widget-iframe';
    iframe.src = `https://self-booking.vercel.app/embed?clientId=${clientId}`;
    iframe.allow = 'clipboard-write';
    iframe.style.position = 'fixed';
    iframe.style.bottom = '24px';
    iframe.style.right = '24px';
    iframe.style.width = '100px';
    iframe.style.height = '50px'; // small height for button only
    iframe.style.border = 'none';
    iframe.style.background = 'transparent';
    iframe.style.zIndex = '999999';
    iframe.style.transition = 'all 0.3s ease';

    document.body.appendChild(iframe);

    // Listen for resize message
    window.addEventListener('message', function (event) {
      if (event.data?.type === 'WIDGET_RESIZE') {
        iframe.style.width = event.data.width || '380px';
        iframe.style.height = event.data.height || '580px';
      }

      if (event.data?.type === 'WIDGET_RESET') {
        iframe.style.width = '100px';
        iframe.style.height = '50px';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }
})();
