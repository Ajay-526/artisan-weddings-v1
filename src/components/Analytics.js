"use client";

import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function Analytics() {
  return (
    <>
      {GTM_ID ? (
        <Script id="gtm-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      ) : null}

      {PIXEL_ID ? (
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            // Same event_id on the Pixel and the Conversions API copy
            // (/api/meta-events) so Meta counts this PageView once.
            var awPageViewId = window.crypto && crypto.randomUUID
              ? crypto.randomUUID()
              : 'e-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
            fbq('track', 'PageView', {}, { eventID: awPageViewId });
            try {
              var awBody = JSON.stringify({
                eventName: 'PageView',
                eventId: awPageViewId,
                eventSourceUrl: location.href
              });
              if (!(navigator.sendBeacon && navigator.sendBeacon('/api/meta-events',
                  new Blob([awBody], { type: 'application/json' })))) {
                fetch('/api/meta-events', { method: 'POST', keepalive: true,
                  headers: { 'Content-Type': 'application/json' }, body: awBody }).catch(function () {});
              }
            } catch (e) {}
          `}
        </Script>
      ) : null}
    </>
  );
}

export function AnalyticsNoscript() {
  return (
    <>
      {GTM_ID ? (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
      ) : null}
      {PIXEL_ID ? (
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      ) : null}
    </>
  );
}
