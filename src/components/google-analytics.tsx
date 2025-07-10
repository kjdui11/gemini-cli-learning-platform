import Script from 'next/script'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export default function GoogleAnalytics() {
  // 只在生产环境和有GA ID时加载
  if (!GA_TRACKING_ID || process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      {/* Google tag (gtag.js) - 按照官方要求添加 */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  )
}
