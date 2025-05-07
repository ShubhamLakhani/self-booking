'use client';

import { useEffect, useState } from 'react';
import Widget from '~/components/widget/Widget';

export default function EmbedPage() {

    const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const clientId = new URLSearchParams(window.location.search).get('clientId');
    const refDomain = document.referrer ? new URL(document.referrer).hostname : null;

    console.log('Client ID:', clientId);
    console.log('Referrer domain:', refDomain);

    // fetch(`/api/validate-domain?clientId=${clientId}&domain=${refDomain}`)
    //   .then(res => setAllowed(res.ok))
    //   .catch(() => setAllowed(false));
  }, []);

  return (
      <Widget />
  );
}