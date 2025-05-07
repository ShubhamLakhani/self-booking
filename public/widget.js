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
    // iframe.style = `
    //   position: fixed;
    //   bottom: 24px;
    //   right: 24px;
    //   width: 420px;
    //   height: 620px;
    //   border: none;
    //   border-radius: 16px;
    //   background: transparent;
    //   z-index: 9999;
    // `;

    document.body.appendChild(iframe);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWidget);
  } else {
    initWidget();
  }
})();
