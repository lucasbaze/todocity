import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { Container } from '@todocity/ui/core';

export function PrivacyPage() {
  return (
    <MainLayout>
      <Container pb={24}>
        <>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <title>Privacy Policy</title>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n/* cspell:disable-file */\n/* webkit printing magic: print all background colors */\nhtml {\n\t-webkit-print-color-adjust: exact;\n}\n* {\n\tbox-sizing: border-box;\n\t-webkit-print-color-adjust: exact;\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tline-height: 1.5;\n\twhite-space: pre-wrap;\n}\n\na,\na.visited {\n\tcolor: inherit;\n\ttext-decoration: underline;\n}\n\n.pdf-relative-link-path {\n\tfont-size: 80%;\n\tcolor: #444;\n}\n\nh1,\nh2,\nh3 {\n\tletter-spacing: -0.01em;\n\tline-height: 1.2;\n\tfont-weight: 600;\n\tmargin-bottom: 0;\n}\n\n.page-title {\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tmargin-top: 0;\n\tmargin-bottom: 0.75em;\n}\n\nh1 {\n\tfont-size: 1.875rem;\n\tmargin-top: 1.875rem;\n}\n\nh2 {\n\tfont-size: 1.5rem;\n\tmargin-top: 1.5rem;\n}\n\nh3 {\n\tfont-size: 1.25rem;\n\tmargin-top: 1.25rem;\n}\n\n.source {\n\tborder: 1px solid #ddd;\n\tborder-radius: 3px;\n\tpadding: 1.5em;\n\tword-break: break-all;\n}\n\n.callout {\n\tborder-radius: 3px;\n\tpadding: 1rem;\n}\n\nfigure {\n\tmargin: 1.25em 0;\n\tpage-break-inside: avoid;\n}\n\nfigcaption {\n\topacity: 0.5;\n\tfont-size: 85%;\n\tmargin-top: 0.5em;\n}\n\nmark {\n\tbackground-color: transparent;\n}\n\n.indented {\n\tpadding-left: 1.5em;\n}\n\nhr {\n\tbackground: transparent;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 1px;\n\tvisibility: visible;\n\tborder: none;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n}\n\nimg {\n\tmax-width: 100%;\n}\n\n@media only print {\n\timg {\n\t\tmax-height: 100vh;\n\t\tobject-fit: contain;\n\t}\n}\n\n@page {\n\tmargin: 1in;\n}\n\n.collection-content {\n\tfont-size: 0.875rem;\n}\n\n.column-list {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.column {\n\tpadding: 0 1em;\n}\n\n.column:first-child {\n\tpadding-left: 0;\n}\n\n.column:last-child {\n\tpadding-right: 0;\n}\n\n.table_of_contents-item {\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tline-height: 1.3;\n\tpadding: 0.125rem;\n}\n\n.table_of_contents-indent-1 {\n\tmargin-left: 1.5rem;\n}\n\n.table_of_contents-indent-2 {\n\tmargin-left: 3rem;\n}\n\n.table_of_contents-indent-3 {\n\tmargin-left: 4.5rem;\n}\n\n.table_of_contents-link {\n\ttext-decoration: none;\n\topacity: 0.7;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n}\n\ntable,\nth,\ntd {\n\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\tborder-collapse: collapse;\n}\n\ntable {\n\tborder-left: none;\n\tborder-right: none;\n}\n\nth,\ntd {\n\tfont-weight: normal;\n\tpadding: 0.25em 0.5em;\n\tline-height: 1.5;\n\tmin-height: 1.5em;\n\ttext-align: left;\n}\n\nth {\n\tcolor: rgba(55, 53, 47, 0.6);\n}\n\nol,\nul {\n\tmargin: 0;\n\tmargin-block-start: 0.6em;\n\tmargin-block-end: 0.6em;\n}\n\nli > ol:first-child,\nli > ul:first-child {\n\tmargin-block-start: 0.6em;\n}\n\nul > li {\n\tlist-style: disc;\n}\n\nul.to-do-list {\n\ttext-indent: -1.7em;\n}\n\nul.to-do-list > li {\n\tlist-style: none;\n}\n\n.to-do-children-checked {\n\ttext-decoration: line-through;\n\topacity: 0.375;\n}\n\nul.toggle > li {\n\tlist-style: none;\n}\n\nul {\n\tpadding-inline-start: 1.7em;\n}\n\nul > li {\n\tpadding-left: 0.1em;\n}\n\nol {\n\tpadding-inline-start: 1.6em;\n}\n\nol > li {\n\tpadding-left: 0.2em;\n}\n\n.mono ol {\n\tpadding-inline-start: 2em;\n}\n\n.mono ol > li {\n\ttext-indent: -0.4em;\n}\n\n.toggle {\n\tpadding-inline-start: 0em;\n\tlist-style-type: none;\n}\n\n/* Indent toggle children */\n.toggle > li > details {\n\tpadding-left: 1.7em;\n}\n\n.toggle > li > details > summary {\n\tmargin-left: -1.1em;\n}\n\n.selected-value {\n\tdisplay: inline-block;\n\tpadding: 0 0.5em;\n\tbackground: rgba(206, 205, 202, 0.5);\n\tborder-radius: 3px;\n\tmargin-right: 0.5em;\n\tmargin-top: 0.3em;\n\tmargin-bottom: 0.3em;\n\twhite-space: nowrap;\n}\n\n.collection-title {\n\tdisplay: inline-block;\n\tmargin-right: 1em;\n}\n\n.simple-table {\n\tmargin-top: 1em;\n\tfont-size: 0.875rem;\n\tempty-cells: show;\n}\n.simple-table td {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table th {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table-header-color {\n\tbackground: rgb(247, 246, 243);\n\tcolor: black;\n}\n.simple-table-header {\n\tfont-weight: 500;\n}\n\ntime {\n\topacity: 0.5;\n}\n\nimg.icon {\n\tborder-radius: 3px;\n}\n\n.user-icon {\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder-radius: 100%;\n\tmargin-right: 0.5rem;\n}\n\n.user-icon-inner {\n\tfont-size: 0.8em;\n}\n\n.text-icon {\n\tborder: 1px solid #000;\n\ttext-align: center;\n}\n\n.page-cover-image {\n\tdisplay: block;\n\tobject-fit: cover;\n\twidth: 100%;\n\tmax-height: 30vh;\n}\n\n.page-header-icon {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n}\n\n.page-header-icon-with-cover {\n\tmargin-top: -0.72em;\n\tmargin-left: 0.07em;\n}\n\n.page-header-icon img {\n\tborder-radius: 3px;\n}\n\n.link-to-page {\n\tmargin: 1em 0;\n\tpadding: 0;\n\tborder: none;\n\tfont-weight: 500;\n}\n\np > .user {\n\topacity: 0.5;\n}\n\ntd > .user,\ntd > time {\n\twhite-space: nowrap;\n}\n\ninput[type=\"checkbox\"] {\n\ttransform: scale(1.5);\n\tmargin-right: 0.6em;\n\tvertical-align: middle;\n}\n\np {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n\n.image {\n\tborder: none;\n\tmargin: 1.5em 0;\n\tpadding: 0;\n\tborder-radius: 0;\n\ttext-align: center;\n}\n\n.code,\ncode {\n\tbackground: rgba(135, 131, 120, 0.15);\n\tborder-radius: 3px;\n\tpadding: 0.2em 0.4em;\n\tborder-radius: 3px;\n\tfont-size: 85%;\n\ttab-size: 2;\n}\n\ncode {\n\tcolor: #eb5757;\n}\n\n.code {\n\tpadding: 1.5em 1em;\n}\n\n.code-wrap {\n\twhite-space: pre-wrap;\n\tword-break: break-all;\n}\n\n.code > code {\n\tbackground: none;\n\tpadding: 0;\n\tfont-size: 100%;\n\tcolor: inherit;\n}\n\nblockquote {\n\tfont-size: 1.25em;\n\tmargin: 1em 0;\n\tpadding-left: 1em;\n\tborder-left: 3px solid rgb(55, 53, 47);\n}\n\n.bookmark {\n\ttext-decoration: none;\n\tmax-height: 8em;\n\tpadding: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: stretch;\n}\n\n.bookmark-title {\n\tfont-size: 0.85em;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 1.75em;\n\twhite-space: nowrap;\n}\n\n.bookmark-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bookmark-info {\n\tflex: 4 1 180px;\n\tpadding: 12px 14px 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.bookmark-image {\n\twidth: 33%;\n\tflex: 1 1 180px;\n\tdisplay: block;\n\tposition: relative;\n\tobject-fit: cover;\n\tborder-radius: 1px;\n}\n\n.bookmark-description {\n\tcolor: rgba(55, 53, 47, 0.6);\n\tfont-size: 0.75em;\n\toverflow: hidden;\n\tmax-height: 4.5em;\n\tword-break: break-word;\n}\n\n.bookmark-href {\n\tfont-size: 0.75em;\n\tmargin-top: 0.25em;\n}\n\n.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n.code { font-family: \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace; }\n.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }\n.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }\n.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }\n.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }\n.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }\n.pdf .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }\n.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }\n.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }\n.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }\n.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.highlight-default {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.highlight-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.highlight-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.highlight-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.highlight-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.highlight-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.highlight-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.highlight-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.highlight-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.highlight-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.highlight-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.highlight-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.highlight-yellow_background {\n\tbackground: rgba(251, 243, 219, 1);\n}\n.highlight-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.highlight-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.highlight-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.highlight-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.highlight-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.block-color-default {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.block-color-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.block-color-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.block-color-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.block-color-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.block-color-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.block-color-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.block-color-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.block-color-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.block-color-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.block-color-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.block-color-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.block-color-yellow_background {\n\tbackground: rgba(251, 243, 219, 1);\n}\n.block-color-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.block-color-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.block-color-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.block-color-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.block-color-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }\n.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }\n.select-value-color-green { background-color: rgba(219, 237, 219, 1); }\n.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }\n.select-value-color-opaquegray { background-color: rgba(255, 255, 255, 0.0375); }\n.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }\n.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }\n.select-value-color-red { background-color: rgba(255, 226, 221, 1); }\n.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }\n.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }\n\n.checkbox {\n\tdisplay: inline-flex;\n\tvertical-align: text-bottom;\n\twidth: 16;\n\theight: 16;\n\tbackground-size: 16px;\n\tmargin-left: 2px;\n\tmargin-right: 5px;\n}\n\n.checkbox-on {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.checkbox-off {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\t\n",
            }}
          />
          <article
            id="4dd11900-d3ad-47bb-b2e5-8ddfaf8e967b"
            className="page sans"
          >
            <header>
              <h1 className="page-title">Privacy Policy</h1>
            </header>
            <div className="page-body">
              <h1 id="cedf1bc0-78a7-429f-8b57-bdebc7cc4e04" className="">
                <strong>Privacy Policy</strong>
              </h1>
              <p id="0d7a6316-32de-4c66-b1ad-7f8ea14e6759" className="">
                <strong>Last Updated: Aug 20th, 2022</strong>
              </p>
              <p id="3d49d9b5-3d1a-40e2-af7b-3be704b536bc" className="">
                TodoCity, LLC. (TodoCity,” “we,” “us,” or “our”) welcomes you.
                This privacy policy (the “Privacy Policy”) describes how we
                process the information we collect about or from you through our
                Website located at&nbsp;
                <a href="https://todocity.app/static/home">
                  https://todocity.app/
                </a>
                &nbsp;and/or our Apps (our “Digital Platforms”), from our users,
                subscribers, visitors and other users of our technology and
                platforms (“Service”), and when you otherwise interact with us.
                This Privacy Policy may be updated by us from time to time
                without notice to you. By accepting this Privacy Policy,
                accessing or using the Service, or otherwise manifesting your
                assent to this Privacy Policy, you agree to be bound by this
                Privacy Policy. If you do not agree to (or cannot comply with)
                all of the terms of this Privacy Policy, you may not access or
                use the Service.
              </p>
              <p id="6d1e25cb-026e-4d12-a55e-cbfc763a2924" className="">
                Capitalized terms not defined in this Privacy Policy shall have
                the meaning set forth in our Terms of Service.
              </p>
              <h2 id="d09e9db2-b3f9-48e1-b062-90afb0aad811" className="">
                <strong>THE INFORMATION WE COLLECT AND HOW WE USE IT</strong>
              </h2>
              <p id="eb0d0bce-5894-4d29-b009-cecdab91b67b" className="">
                In the course of operating the Service, TodoCity collects or
                receives the following types of information from visitors to the
                Website; users, subscribers or other users of its Platforms; and
                from third-party integration partners, which may include
                personal information.
              </p>
              <h3 id="d10cfb36-2496-4726-92ff-c6b7b31d383d" className="">
                <strong>Contact Information</strong>
              </h3>
              <p id="dcb704fc-c5dc-40fd-9fd1-435775dd206f" className="">
                We collect contact information through our Service; contact
                information typically includes your name, email address, and any
                other information you provide in messages to us. We use such
                contact information for purposes such as providing you with
                information about the Service, responding to your inquiries,
                sending you email alerts (including marketing emails), verifying
                your identity or providing you the Service.
              </p>
              <h3 id="e0c80785-f452-47c4-b6ac-78f3f1b9e868" className="">
                <strong>Account Access Information</strong>
              </h3>
              <p id="899b515b-ceb6-4558-9160-ed541a686e3c" className="">
                In connection with the creation of an account on our Platforms,
                we collect account credentials such as your email, username, and
                password. We use this account information to create your
                account, including to verify your identity. We also use this
                information to manage your account, including your transactions.
                If you choose to log into your account through Google, Apple or
                Facebook, we capture and store the User ID and email address
                connected to the respective account, so we can verify your
                identity when you log in.
              </p>
              <h3 id="b1dfc99d-9b40-42d4-9e3f-9ca321f37b48" className="">
                <strong>User Content</strong>
              </h3>
              <p id="2f50f18c-614f-4c8c-bec4-75152cb8c5d0" className="">
                As explained in more detail in the Terms of Service, TodoCity
                allows you to upload and receive content, including text,
                photos, images, task lists, graphics, artwork, links to outside
                content, and or other material. It is your decision what kind of
                personal information (if any) you submit. We do not use personal
                information posted in your content in any way except as needed
                to enforce the community guidelines and terms of service or to
                provide assistance and troubleshooting issues with service to
                the account.
              </p>
              <h3 id="53fd7fcd-b07f-43b2-8bab-97992f6d8554" className="">
                <strong>Transaction Information</strong>
              </h3>
              <p id="f2c3144b-5ab4-4b7d-af43-ef273935d1a1" className="">
                When you make, or attempt to make, a purchase, sale or other
                transaction as a user or subscriber through one of our
                Platforms, we may collect certain information from you,
                including your name, billing address, mailing address, email
                address, and phone number. We refer to this information as
                “Transaction Information.” We use the Transaction Information
                that we collect generally to facilitate transactions between
                users through our Platforms (including providing you with
                invoices and/or transaction confirmations). Additionally, we use
                this Transaction Information to: communicate with you; screen
                our transactions for potential risk or fraud; and when in line
                with the preferences you have shared with us, provide you with
                information or advertising relating to our products or Service.
                Our third-party payment processing providers may also collect
                from you, process and store your payment information including
                credit card information and/or bank account information in
                accordance with their respective privacy policies linked to
                below:
              </p>
              <ul
                id="509f060e-93aa-498a-aede-741bc00962a1"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  For Stripe, visit:&nbsp;
                  <a href="https://stripe.com/privacy">
                    https://stripe.com/privacy
                  </a>
                </li>
              </ul>
              <p id="ce6f74ec-ff34-4921-a178-37ca170afe93" className="">
                We reserve the right to change our payment vendors at any time,
                or to use additional payment vendors, at our discretion, and
                will update this Privacy Policy from time to time accordingly.
              </p>
              <h3 id="e5f0a499-d2fe-4796-aab7-b63d7cbde2fc" className="">
                <strong>
                  Server Log, Device and Other Technical Information
                </strong>
              </h3>
              <p id="87bccd31-2127-4a01-9b69-f2969c252c17" className="">
                Our servers keep log files that record data each time a device
                accesses those servers. The log files may contain data about the
                nature of such access, including the device’s IP address, user
                agent string (e.g., operating system and browser type/version),
                and the pages you have clicked on while on our Service, and
                details regarding your activity on the Service such as time
                spent on the Service and other performance and usage data. We
                may use these log files for purposes such as assisting in
                monitoring and troubleshooting errors and incidents, analyzing
                traffic, or optimizing the user experience.
              </p>
              <h3 id="e3757958-449f-4b56-817f-8fabac191786" className="">
                <strong>Cookies and Similar Technologies</strong>
              </h3>
              <p id="798636ea-106c-4e13-9cba-bf7550e56736" className="">
                We may collect information using cookies, web beacons, tags,
                pixel and other similar technologies to record information about
                how you use the Website, and to facilitate log-in and payments.
                Cookies are small packets of data that a website stores on your
                computer’s or mobile device’s hard drive (or other storage
                medium) so that your computer will “remember” information about
                your use. We use both first and third party session cookies and
                persistent cookies. Below is a general primer on session and
                persistent cookies; information collected by cookies depends on
                its particular purpose. For more information, please see the
                information regarding analytics providers discussed further
                below.
              </p>
              <ul
                id="78039093-c1e2-4560-bdf8-dd9526731572"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  <strong>Session Cookies</strong>: We use session cookies to
                  make it easier for you to navigate our Service. A session ID
                  cookie expires when you close the Service.
                </li>
              </ul>
              <ul
                id="ab50547c-23a9-4016-870b-a575d73d971b"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  <strong>Persistent Cookies</strong>: A persistent cookie
                  remains on your device for an extended period of time or until
                  you delete it. Persistent cookies enable us to better
                  understand how you interact with the Service and to provide
                  visitors with a better and more personalized experience by
                  retaining information about their identity and preferences,
                  including but not limited to keeping them logged in even if
                  the browser is closed.
                </li>
              </ul>
              <p id="1b0dd020-853a-4f1c-8467-a54899696d87" className="">
                If you do not want us to place a cookie on your device, you may
                be able to turn that feature off on your device. You may refuse
                to accept cookies from the Service at any time by activating the
                setting on your browser which allows you to refuse cookies.
                Further information about the procedure to follow in order to
                disable cookies can be found on your Internet browser provider’s
                website via your help screen. You may wish to refer to&nbsp;
                <a href="https://www.allaboutcookies.org/manage-cookies/index.html">
                  https://www.allaboutcookies.org/manage-cookies/index.html
                </a>
                &nbsp;for information on commonly used browsers. For more
                information about targeting and advertising cookies and how you
                can opt out, you can also visit&nbsp;
                <a href="https://optout.aboutads.info/">
                  https://optout.aboutads.info
                </a>
                . Please be aware that if cookies are disabled, not all features
                of the Service may operate properly or as intended.
              </p>
              <h3 id="67f6c97e-05eb-4acc-b196-61327e1ba878" className="">
                <strong>Third-Party Analytics Providers</strong>
              </h3>
              <p id="10f89acb-4936-4327-8b8d-df757b76becb" className="">
                We use one or more third–party analytics Service to evaluate
                your use of the Service, as the case may be, by compiling
                reports on activity (based on their collection of IP addresses,
                Internet service provider, browser type, operating system and
                language, referring and exit pages and URLs, data and time,
                amount of time spent on particular pages, what sections of the
                Service you visit, number of links clicked, search terms and
                other similar usage data) and analyzing performance metrics.
                These third parties use cookies and other technologies to help
                collect, analyze, and provide us reports or other data.
              </p>
              <p id="c1fc27b4-6eaf-4157-bda5-02929eb44bf7" className="">
                By accessing and using the Service, you consent to the
                processing of data about you by these analytics providers in the
                manner and for the purposes set out in this Privacy Policy. For
                more information on these third parties, including how to opt
                out from certain data collection, please visit the sites below.
                Please be advised that if you opt out of any service, you may
                not be able to use the full functionality of the Service.
              </p>
              <ul id="6e4696c5-bc8a-4ac4-955d-586ead8313b1">
                <li style={{ listStyleType: 'disc' }}>
                  For Google Analytics, visit:&nbsp;
                  <a href="https://marketingplatform.google.com/about/analytics/">
                    Google Analytics Marketing Platform
                  </a>
                </li>
              </ul>
              <h3 id="5bcbd4a0-ec96-430b-aa9f-8ffc850e4a4a" className="">
                <strong>Third-Party Advertisers/Remarketers</strong>
              </h3>
              <p id="95f37e24-7ad3-46aa-8778-fcad6fec5996" className="">
                We may share or receive information about you with/from third
                parties, including, but not limited to, advertising and
                remarketing providers, or similar partners, for purposes of
                personalizing or otherwise understanding how you engage with ads
                or other content. These third parties may use cookies, pixel
                tags, or other technologies to collect information in
                furtherance of such purposes, including to tailor, target (i.e.,
                behavioral, contextual, retargeting, and remarketing), analyze,
                report on, and/or manage advertising campaigns or other
                initiatives. For example, when a browser visits a site, pixel
                tags enable us and these third-parties to recognize certain
                cookies stored within the browser to learn which ads or other
                content bring a user to a given site. Information that we may
                receive from these third-parties, including through their
                service providers, may include advertising identifiers, IP
                addresses, reports, and campaign data.
              </p>
              <p id="24304a1c-b8f6-42ce-97c0-a97f66b81d72" className="">
                By accessing and using the Service, you consent to the
                processing of data about you by these advertisers/remarketing
                providers in the manner and for the purposes set out in this
                Privacy Policy.
              </p>
              <h3 id="098224ec-0fe4-41a4-a40d-071be31aa7ea" className="">
                <strong>Geolocation Information</strong>
              </h3>
              <p id="1035772c-fb00-48ed-bdd3-adba7c93bfd8" className="">
                We may, with your consent, automatically collect geolocation
                information from your device via your browser’s location
                Service. This consent may be provided by you on the device level
                (e.g., you have consented to location Service generally through
                your browser’s settings) or by accepting our request for
                geolocation access on the Service. Please consult your browser’s
                documentation regarding how to turn off location Service. If you
                disable location Service, you may not be able to use the full
                array of features and functionalities available through our
                Service.
              </p>
              <h3 id="12b7d405-ac2b-409a-a2c6-f058d80ed007" className="">
                <strong>Aggregate and De-identified Data</strong>
              </h3>
              <p id="683ad8f0-2593-49b6-bebf-113d6df2bf81" className="">
                In an ongoing effort to better understand our users and the
                Service, we might analyze your information in aggregate and/or
                de-identified form to operate, maintain, manage, and improve the
                Service. We may share this aggregate or de-identified data with
                our affiliates, agents, and business partners. We may also
                disclose aggregated or de-identified user statistics to describe
                the Service to current and prospective business partners and to
                other third parties for other lawful purposes.
              </p>
              <h3 id="98b3c204-17c5-4779-b06a-941d6b232677" className="">
                <strong>Onward Transfer to Third Parties</strong>
              </h3>
              <ul
                id="fc3fece8-3e9d-42c4-b41c-58a3750f9b40"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  Like many businesses, we hire other companies to perform
                  certain business-related services. We may disclose personal
                  information to certain types of third party companies but only
                  to the extent needed to enable them to provide such service.
                  The types of companies that may receive personal information
                  and their functions are: hosting service, technical
                  assistance, database management/back-up service, use
                  analytics, marketing, and customer service.
                </li>
              </ul>
              <ul
                id="0ae5e368-c76a-4948-a819-ce44432fa819"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  To provide our Service and administer promotional programs, we
                  may share your personal information with our third-party
                  promotional and marketing partners, including, without
                  limitation, businesses participating in our various programs.
                </li>
              </ul>
              <ul
                id="fe96c59c-e9de-4c59-9e9a-d230f52e7930"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  We may also disclose personal information to our parent
                  companies, subsidiaries, affiliates, joint ventures, or other
                  companies under common control to support the marketing and
                  sale of our products and Service.
                </li>
              </ul>
              <h3 id="ae9effba-328d-40ce-b44f-c1bf9968755d" className="">
                <strong>Business Transfers</strong>
              </h3>
              <p id="428db830-feae-44a1-a8a9-67db64350a96" className="">
                In the event of a merger, dissolution, reorganization or similar
                corporate event, or the sale of all or substantially all of our
                assets, we expect that the information that we have collected,
                including personal information, would be transferred to the
                surviving entity in a merger or the acquiring entity. All such
                transfers shall be subject to our commitments with respect to
                the privacy and confidentiality of such personal information as
                set forth in this Privacy Policy. This Notice shall be binding
                upon TodoCity and its legal successors in interest.
              </p>
              <h3 id="48fd7705-830b-4a4f-b6d4-8fd5d4f31da2" className="">
                <strong>Disclosure to Public Authorities</strong>
              </h3>
              <p id="b223c53c-c7c9-4d68-92d3-038a5ce3a5ed" className="">
                We are required to disclose personal information in response to
                lawful requests by public authorities, including for the purpose
                of meeting national security or law enforcement requirements. We
                may also disclose personal information to other third parties
                when compelled to do so by government authorities or required by
                law or regulation including, but not limited to, in response to
                court orders and subpoenas.
              </p>
              <h2 id="35604b80-4557-4728-a2b5-0e6c1b62db21" className="">
                <strong>UPDATES AND OPT-OUTS</strong>
              </h2>
              <p id="8b1e756f-a0c9-4de1-99f1-2ce2b1ca2771" className="">
                On the website:You can update your user profile on the Website
                by clicking the avatar box in the upper left hand corner of the
                browser window, or by going to “Settings” and then selecting the
                “Profile” option in the menu.
              </p>
              <p id="dcf5bb12-d780-4660-8d2b-98e56179ec3f" className="">
                You can fully delete or reset your account via the “Settings”
                option on the Website.
              </p>
              <p id="555d0455-eb15-460f-a538-dccc8624bb6a" className="">
                If you would like us to fully delete your account and all data
                associated with it, please email us at admin@todocity.app and we
                will handle your request within 30 days.
              </p>
              <p id="2c6c0b8a-d927-4c26-bc89-666e240ac419" className="">
                You may opt out at any time from the use of your personal
                information for direct marketing purposes by emailing the
                instructions to&nbsp;
                <a href="mailto:admin@todocity.app">admin@todocity.app</a>
                &nbsp;or by clicking on the “Unsubscribe” link located on the
                bottom of any TodoCity marketing email and following the
                instructions found on the page to which the link takes you.
                Please allow us a reasonable time to process your request. You
                cannot opt out of receiving transactional e-mails related to the
                Service.
              </p>
              <h2 id="fab7061d-7322-49bc-9950-578da1bfd3aa" className="">
                <strong>HOW WE PROTECT YOUR INFORMATION</strong>
              </h2>
              <p id="a593a7ff-d7f9-45da-ad6a-3d7d9d203881" className="">
                TodoCity takes very seriously the security and privacy of the
                personal information that it collects pursuant to this Privacy
                Policy. Accordingly, we implement reasonable security measures
                designed to protect your personal information from loss, misuse
                and unauthorized access, disclosure, alteration and destruction,
                taking into account the risks involved in processing and the
                nature of such data, and to comply with applicable laws and
                regulations. Please understand, however, that no security system
                is impenetrable. We cannot guarantee the security of our
                databases or the databases of the third parties with which we
                may share your information (as permitted herein), nor can we
                guarantee that the information you supply will not be
                intercepted while being transmitted over the Internet. In
                particular, e-mail sent to us may not be secure, and you should
                therefore take special care in deciding what information you
                send to us via e-mail.
              </p>
              <h2 id="a51a1ed1-dd42-4123-b268-8dad37d1deff" className="">
                <strong>CHILDREN</strong>
              </h2>
              <p id="c746ff11-3f32-49a7-802b-4f1b7454ecd7" className="">
                The Service are intended for users 13 years or older; you are
                not permitted to access or use the Service if you are younger
                than 13. We do not knowingly collect personal information from
                children under the age of 13 through the Service. If you are
                under 13, please do not give us any personal information. We
                encourage parents and legal guardians to monitor their
                children’s Internet usage and to help enforce our Privacy Policy
                by instructing their children to never provide personal
                information without their permission. If you have reason to
                believe that a child under the age of 13 has provided personal
                information to us, please contact us at admin@todocity.app, and
                we will endeavor to delete that information from our databases.
              </p>
              <h2 id="e78d496b-e425-4576-90bc-6bc6a2b3c642" className="">
                <strong>IMPORTANT NOTICE TO ALL NON-US RESIDENTS</strong>
              </h2>
              <p id="ff3716ee-38e3-40a4-a51c-80e38bae6ba4" className="">
                Our servers are located in the US. Please be aware that your
                information may be transferred to, processed, maintained, and
                used on computers, servers, and systems located outside of your
                state, province, country, or other governmental jurisdiction
                where the privacy laws may not be as protective as those in your
                country of origin. If you are located outside the United States
                and choose to use the Service, you do so at your own risk.
              </p>
              <h2 id="3d08c990-601f-447d-9b11-ce80d690326a" className="">
                <strong>CALIFORNIA PRIVACY RIGHTS</strong>
              </h2>
              <p id="14e4e753-372d-4ff7-8d51-1ba3e049530c" className="">
                Pursuant to Section 1798.83 of the California Civil Code,
                residents of California have the right to obtain certain
                information about the types of personal information that
                companies with whom they have an established business
                relationship (and that are not otherwise exempt) have shared
                with third parties for direct marketing purposes during the
                preceding calendar year, including the names and addresses of
                those third parties, and examples of the types of Service or
                products marketed by those third parties. If you wish to submit
                a request pursuant to Section 1798.83, please contact TodoCity
                via email at&nbsp;
                <a href="mailto:admin@todocity.app">admin@todocity.app</a>.
              </p>
              <h2 id="830bffd5-9c4c-4b85-95f2-facbd5ae110c" className="">
                <strong>NEVADA PRIVACY RIGHTS</strong>
              </h2>
              <p id="2afa0198-9b70-4b49-afc2-593873ba3407" className="">
                If you are a resident of Nevada, you have the right to opt-out
                of the sale of certain personal information to third parties.
                You can exercise this right by contacting us at
                admin@todocity.app with the subject line “Nevada Do Not Sell
                Request” and providing us with your name and the email address
                associated with your account.
              </p>
              <h2 id="28f998e7-30f5-4543-a5c5-c97c0e6f66b2" className="">
                <strong>DO NOT TRACK</strong>
              </h2>
              <p id="a8b50921-7535-4af5-a7b8-09e2a4a539a4" className="">
                TodoCity does not respond to “Do Not Track” settings or other
                related mechanisms on our Website at this time.
              </p>
              <h2 id="d334ce1b-9804-4f00-a3f1-1aa5c7f06cd3" className="">
                <strong>LINKS TO EXTERNAL WEBSITES</strong>
              </h2>
              <p id="932f9166-8d09-4f30-8774-3ccf89acf581" className="">
                The Service may contain links to third-party websites (“External
                Sites”). TodoCity has no control over the privacy practices or
                the content of any such External Sites. As such, we are not
                responsible for the content or the privacy policies of such
                External Sites. You should check the applicable privacy policy
                or privacy policy and terms of use when visiting any such
                External Sites.
              </p>
              <h2 id="2a1c753d-2b79-438b-b3df-be80adbcaac8" className="">
                <strong>CHANGES TO THIS PRIVACY POLICY</strong>
              </h2>
              <p id="a3183fea-30de-46af-bdc1-fe364edbd14e" className="">
                This Privacy Policy is effective as of the last updated date
                stated at the top of this Privacy Policy. We may change this
                Privacy Policy from time to time with or without notice to you.
                By accessing the Service after we make any such changes to this
                Privacy Policy, you are deemed to have accepted such changes.
                Please be aware that, to the extent permitted by applicable law,
                our use of the information collected is governed by the Privacy
                Policy in effect at the time we collect the information. Please
                refer back to this Privacy Policy on a regular basis.
              </p>
              <h2 id="49f1e0fb-c8f3-421e-82c6-6a2c019b00b6" className="">
                <strong>HOW TO CONTACT US</strong>
              </h2>
              <p id="9c807811-512e-4e10-823c-180819096c9a" className="">
                If you have questions about this Privacy Policy, please e-mail
                us at&nbsp;
                <a href="mailto:admin@todocity.app">admin@todocity.app</a>
                &nbsp;with “Privacy Policy” in the subject line.
              </p>
              <ul
                id="087b07ac-fc22-4b2b-8ba2-c4bd4d2afcd6"
                className="bulleted-list"
              >
                <li style={{ listStyleType: 'disc' }}>
                  TodoCity, LLC. 10302 W Florida, Ave. Lakewood, CO 80232,
                  Email:&nbsp;
                  <a href="mailto:admin@todocity.app">admin@todocity.app</a>
                </li>
              </ul>
              <p id="79571fa3-04ad-4c3b-bf81-4736736bd16e" className=""></p>
            </div>
          </article>
        </>
      </Container>
    </MainLayout>
  );
}

export default PrivacyPage;
