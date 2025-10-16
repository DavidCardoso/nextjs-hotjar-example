'use client';

import Script from 'next/script';
import { getHotjarScript } from '../utils/hotjar';

export default function HotjarScript() {
  return (
    <Script
      id="hotjar"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: getHotjarScript() }}
    />
  );
}