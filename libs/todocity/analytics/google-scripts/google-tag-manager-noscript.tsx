// docs/analytics.md
export function GoogleTagManagerNoScript() {
  return (
    <>
      {process.env.NEXT_PUBLIC_APP_ENV === 'production' ? (
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_TAG_MANAGER_ID}&gtm_auth=Dnoy0WCVydH2kPPgb4ZiLA&gtm_preview=env-1&gtm_cookies_win=x"
	height="0" width="0" style="display:none;visibility:hidden" />`,
          }}
        />
      ) : (
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_TAG_MANAGER_ID}&gtm_auth=4IBmj6m0lGT4PmJqJHTWWg&gtm_preview=env-4&gtm_cookies_win=x"
height="0" width="0" style="display:none;visibility:hidden" />`,
          }}
        />
      )}
    </>
  );
}
