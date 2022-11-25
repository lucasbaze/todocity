import Script from 'next/script';

// docs/analytics.md
export function GoogleTagManager() {
  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {process.env.NEXT_PUBLIC_WEB_APP_ENV === 'production'
        ? `
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_WEB_TAG_MANAGER_ID}')
				`
        : `
					(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=4IBmj6m0lGT4PmJqJHTWWg&gtm_preview=env-4&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_WEB_TAG_MANAGER_ID}')
				`}
    </Script>
  );
}
