/* eslint-disable react/no-unescaped-entities */
import { PageSEOMeta } from '@todocity/seo/page-seo/page-seo';
import { Container } from '@todocity/ui/core';
import { MainLayout } from '@todocity/ui/layout/main-layout/main-layout';

export function TermsPage() {
  return (
    <>
      <PageSEOMeta title="Terms" metaTitle="Terms" />
      <MainLayout>
        <Container mb={24}>
          <>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Terms of Service</title>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n/* cspell:disable-file */\n/* webkit printing magic: print all background colors */\nhtml {\n\t-webkit-print-color-adjust: exact;\n}\n* {\n\tbox-sizing: border-box;\n\t-webkit-print-color-adjust: exact;\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tline-height: 1.5;\n\twhite-space: pre-wrap;\n}\n\na,\na.visited {\n\tcolor: inherit;\n\ttext-decoration: underline;\n}\n\n.pdf-relative-link-path {\n\tfont-size: 80%;\n\tcolor: #444;\n}\n\nh1,\nh2,\nh3 {\n\tletter-spacing: -0.01em;\n\tline-height: 1.2;\n\tfont-weight: 600;\n\tmargin-bottom: 0;\n}\n\n.page-title {\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tmargin-top: 0;\n\tmargin-bottom: 0.75em;\n}\n\nh1 {\n\tfont-size: 1.875rem;\n\tmargin-top: 1.875rem;\n}\n\nh2 {\n\tfont-size: 1.5rem;\n\tmargin-top: 1.5rem;\n}\n\nh3 {\n\tfont-size: 1.25rem;\n\tmargin-top: 1.25rem;\n}\n\n.source {\n\tborder: 1px solid #ddd;\n\tborder-radius: 3px;\n\tpadding: 1.5em;\n\tword-break: break-all;\n}\n\n.callout {\n\tborder-radius: 3px;\n\tpadding: 1rem;\n}\n\nfigure {\n\tmargin: 1.25em 0;\n\tpage-break-inside: avoid;\n}\n\nfigcaption {\n\topacity: 0.5;\n\tfont-size: 85%;\n\tmargin-top: 0.5em;\n}\n\nmark {\n\tbackground-color: transparent;\n}\n\n.indented {\n\tpadding-left: 1.5em;\n}\n\nhr {\n\tbackground: transparent;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 1px;\n\tvisibility: visible;\n\tborder: none;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n}\n\nimg {\n\tmax-width: 100%;\n}\n\n@media only print {\n\timg {\n\t\tmax-height: 100vh;\n\t\tobject-fit: contain;\n\t}\n}\n\n@page {\n\tmargin: 1in;\n}\n\n.collection-content {\n\tfont-size: 0.875rem;\n}\n\n.column-list {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.column {\n\tpadding: 0 1em;\n}\n\n.column:first-child {\n\tpadding-left: 0;\n}\n\n.column:last-child {\n\tpadding-right: 0;\n}\n\n.table_of_contents-item {\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tline-height: 1.3;\n\tpadding: 0.125rem;\n}\n\n.table_of_contents-indent-1 {\n\tmargin-left: 1.5rem;\n}\n\n.table_of_contents-indent-2 {\n\tmargin-left: 3rem;\n}\n\n.table_of_contents-indent-3 {\n\tmargin-left: 4.5rem;\n}\n\n.table_of_contents-link {\n\ttext-decoration: none;\n\topacity: 0.7;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n}\n\ntable,\nth,\ntd {\n\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\tborder-collapse: collapse;\n}\n\ntable {\n\tborder-left: none;\n\tborder-right: none;\n}\n\nth,\ntd {\n\tfont-weight: normal;\n\tpadding: 0.25em 0.5em;\n\tline-height: 1.5;\n\tmin-height: 1.5em;\n\ttext-align: left;\n}\n\nth {\n\tcolor: rgba(55, 53, 47, 0.6);\n}\n\nol,\nul {\n\tmargin: 0;\n\tmargin-block-start: 0.6em;\n\tmargin-block-end: 0.6em;\n}\n\nli > ol:first-child,\nli > ul:first-child {\n\tmargin-block-start: 0.6em;\n}\n\nul > li {\n\tlist-style: disc;\n}\n\nul.to-do-list {\n\ttext-indent: -1.7em;\n}\n\nul.to-do-list > li {\n\tlist-style: none;\n}\n\n.to-do-children-checked {\n\ttext-decoration: line-through;\n\topacity: 0.375;\n}\n\nul.toggle > li {\n\tlist-style: none;\n}\n\nul {\n\tpadding-inline-start: 1.7em;\n}\n\nul > li {\n\tpadding-left: 0.1em;\n}\n\nol {\n\tpadding-inline-start: 1.6em;\n}\n\nol > li {\n\tpadding-left: 0.2em;\n}\n\n.mono ol {\n\tpadding-inline-start: 2em;\n}\n\n.mono ol > li {\n\ttext-indent: -0.4em;\n}\n\n.toggle {\n\tpadding-inline-start: 0em;\n\tlist-style-type: none;\n}\n\n/* Indent toggle children */\n.toggle > li > details {\n\tpadding-left: 1.7em;\n}\n\n.toggle > li > details > summary {\n\tmargin-left: -1.1em;\n}\n\n.selected-value {\n\tdisplay: inline-block;\n\tpadding: 0 0.5em;\n\tbackground: rgba(206, 205, 202, 0.5);\n\tborder-radius: 3px;\n\tmargin-right: 0.5em;\n\tmargin-top: 0.3em;\n\tmargin-bottom: 0.3em;\n\twhite-space: nowrap;\n}\n\n.collection-title {\n\tdisplay: inline-block;\n\tmargin-right: 1em;\n}\n\n.simple-table {\n\tmargin-top: 1em;\n\tfont-size: 0.875rem;\n\tempty-cells: show;\n}\n.simple-table td {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table th {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table-header-color {\n\tbackground: rgb(247, 246, 243);\n\tcolor: black;\n}\n.simple-table-header {\n\tfont-weight: 500;\n}\n\ntime {\n\topacity: 0.5;\n}\n\nimg.icon {\n\tborder-radius: 3px;\n}\n\n.user-icon {\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder-radius: 100%;\n\tmargin-right: 0.5rem;\n}\n\n.user-icon-inner {\n\tfont-size: 0.8em;\n}\n\n.text-icon {\n\tborder: 1px solid #000;\n\ttext-align: center;\n}\n\n.page-cover-image {\n\tdisplay: block;\n\tobject-fit: cover;\n\twidth: 100%;\n\tmax-height: 30vh;\n}\n\n.page-header-icon {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n}\n\n.page-header-icon-with-cover {\n\tmargin-top: -0.72em;\n\tmargin-left: 0.07em;\n}\n\n.page-header-icon img {\n\tborder-radius: 3px;\n}\n\n.link-to-page {\n\tmargin: 1em 0;\n\tpadding: 0;\n\tborder: none;\n\tfont-weight: 500;\n}\n\np > .user {\n\topacity: 0.5;\n}\n\ntd > .user,\ntd > time {\n\twhite-space: nowrap;\n}\n\ninput[type=\"checkbox\"] {\n\ttransform: scale(1.5);\n\tmargin-right: 0.6em;\n\tvertical-align: middle;\n}\n\np {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n\n.image {\n\tborder: none;\n\tmargin: 1.5em 0;\n\tpadding: 0;\n\tborder-radius: 0;\n\ttext-align: center;\n}\n\n.code,\ncode {\n\tbackground: rgba(135, 131, 120, 0.15);\n\tborder-radius: 3px;\n\tpadding: 0.2em 0.4em;\n\tborder-radius: 3px;\n\tfont-size: 85%;\n\ttab-size: 2;\n}\n\ncode {\n\tcolor: #eb5757;\n}\n\n.code {\n\tpadding: 1.5em 1em;\n}\n\n.code-wrap {\n\twhite-space: pre-wrap;\n\tword-break: break-all;\n}\n\n.code > code {\n\tbackground: none;\n\tpadding: 0;\n\tfont-size: 100%;\n\tcolor: inherit;\n}\n\nblockquote {\n\tfont-size: 1.25em;\n\tmargin: 1em 0;\n\tpadding-left: 1em;\n\tborder-left: 3px solid rgb(55, 53, 47);\n}\n\n.bookmark {\n\ttext-decoration: none;\n\tmax-height: 8em;\n\tpadding: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: stretch;\n}\n\n.bookmark-title {\n\tfont-size: 0.85em;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 1.75em;\n\twhite-space: nowrap;\n}\n\n.bookmark-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bookmark-info {\n\tflex: 4 1 180px;\n\tpadding: 12px 14px 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.bookmark-image {\n\twidth: 33%;\n\tflex: 1 1 180px;\n\tdisplay: block;\n\tposition: relative;\n\tobject-fit: cover;\n\tborder-radius: 1px;\n}\n\n.bookmark-description {\n\tcolor: rgba(55, 53, 47, 0.6);\n\tfont-size: 0.75em;\n\toverflow: hidden;\n\tmax-height: 4.5em;\n\tword-break: break-word;\n}\n\n.bookmark-href {\n\tfont-size: 0.75em;\n\tmargin-top: 0.25em;\n}\n\n.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n.code { font-family: \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace; }\n.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }\n.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }\n.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }\n.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }\n.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }\n.pdf .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }\n.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }\n.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }\n.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }\n.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.highlight-default {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.highlight-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.highlight-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.highlight-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.highlight-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.highlight-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.highlight-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.highlight-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.highlight-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.highlight-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.highlight-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.highlight-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.highlight-yellow_background {\n\tbackground: rgba(251, 243, 219, 1);\n}\n.highlight-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.highlight-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.highlight-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.highlight-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.highlight-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.block-color-default {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.block-color-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.block-color-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.block-color-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.block-color-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.block-color-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.block-color-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.block-color-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.block-color-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.block-color-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.block-color-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.block-color-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.block-color-yellow_background {\n\tbackground: rgba(251, 243, 219, 1);\n}\n.block-color-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.block-color-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.block-color-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.block-color-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.block-color-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }\n.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }\n.select-value-color-green { background-color: rgba(219, 237, 219, 1); }\n.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }\n.select-value-color-opaquegray { background-color: rgba(255, 255, 255, 0.0375); }\n.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }\n.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }\n.select-value-color-red { background-color: rgba(255, 226, 221, 1); }\n.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }\n.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }\n\n.checkbox {\n\tdisplay: inline-flex;\n\tvertical-align: text-bottom;\n\twidth: 16;\n\theight: 16;\n\tbackground-size: 16px;\n\tmargin-left: 2px;\n\tmargin-right: 5px;\n}\n\n.checkbox-on {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.checkbox-off {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\t\n",
              }}
            />
            <article
              id="457abe4a-86db-41f9-8a37-dc0b8b6a709e"
              className="page sans"
            >
              <header>
                <h1 className="page-title">Terms of Service</h1>
              </header>
              <div className="page-body">
                <p id="5f7fd4ad-462d-4565-af25-c0d2dad37cf1" className=""></p>
                <h1 id="780f1ff9-0a16-4650-8cbe-d0c189ea70f8" className="">
                  <strong>Terms of Service</strong>
                </h1>
                <p id="1e8cf67d-607d-4f39-a549-901fb551fc38" className="">
                  <strong>Last Updated: Aug 20th, 2022</strong>
                </p>
                <p id="8e3bfab4-6b9b-438f-9b19-8f3d978c52f5" className="">
                  Thanks for choosing TodoCity!
                </p>
                <p id="00483488-df1d-4580-bc41-3533ced2c989" className="">
                  Our Service is provided by TodoCity, LLC. ("TodoCity"). By
                  accepting these Terms of Service and our Privacy Policy
                  located at:&nbsp;
                  <a href="https://todocity.app/privacy">
                    https://todocity.app/privacy
                  </a>
                  &nbsp;(collectively, the "Agreement"), registering for the
                  Service (as defined below), accessing or using any part of the
                  Service, or otherwise manifesting your assent to the
                  Agreement, you acknowledge that you have read, understood, and
                  agree to be legally bound by the Agreement. If you do not
                  agree to (or cannot comply with) the Agreement, you are not
                  permitted to access or use the Service.
                </p>
                <p id="24965609-9293-47ce-b329-25a3f2c9c352" className="">
                  By accepting or agreeing to this Agreement on behalf of a
                  company or other legal entity, you represent and warrant that
                  you have the authority to bind that company or other legal
                  entity to the Agreement and, in such event, "you" and "your"
                  will refer and apply to that company or other legal entity.
                </p>
                <p id="b1f4b8cd-0efb-40ff-b4a7-adea07c78fab" className="">
                  <strong>
                    THE SECTIONS BELOW TITLED "BINDING ARBITRATION," AND "CLASS
                    ACTION WAIVER" CONTAIN A BINDING ARBITRATION AGREEMENT AND
                    CLASS ACTION WAIVER. THEY AFFECT YOUR LEGAL RIGHTS. PLEASE
                    READ THEM.
                  </strong>
                </p>
                <h2 id="9ab1c650-3d0c-41e3-bc2e-188802f5ef86" className="">
                  <strong>Changes to the Terms of Service</strong>
                </h2>
                <p id="b5157919-ce2d-479a-bb18-7f78ed30a7c4" className="">
                  These Terms of Service are effective as of the last updated
                  date stated at the top of this page. We may change these Terms
                  of Service from time to time with or without notice to you. By
                  accessing the Service after we make any such changes to this
                  Terms of Service, you are deemed to have accepted such
                  changes. Please be aware that, to the extent permitted by
                  applicable law, our use of the information collected is
                  governed by the Terms of Service in effect at the time we
                  collect the information. Please refer back to this Terms of
                  Service on a regular basis.
                </p>
                <p id="b4d4c701-2c9b-46cc-8d53-59a7c0fef1be" className="">
                  Our Service allows you to upload, store, send, download, or
                  receive content, including but not limited to information,
                  text, graphics, artwork, or other material ("Content"). You
                  retain ownership of any intellectual property rights that you
                  have in your Content. You hereby grant TodoCity a worldwide,
                  perpetual, irrevocable, sublicenseable, transferable,
                  assignable, non-exclusive, and royalty-free right and license
                  to use, reproduce, distribute, adapt, modify, translate,
                  create derivative works of, publicly perform, publicly
                  display, digitally perform, make, have made, sell, offer for
                  sale, and import your Content, including all intellectual
                  property rights therein. You represent, warrant, and agree
                  that your Content does not and will not violate any
                  third-party intellectual property, privacy, or other rights,
                  and that you have all right, title and interest in and to your
                  Content required to grant us the license above. We reserve the
                  right at all times, but have no obligation, to delete or
                  refuse to use or distribute any Content on or through the
                  Service, including your Content.
                </p>
                <h2 id="456ce334-fa23-43ad-9ca7-918391fb9bc1" className="">
                  <strong>Ideas and Suggestions/Requests</strong>
                </h2>
                <p id="818331a5-2e5e-4ebf-9aa3-bd380fc67be7" className="">
                  TodoCity appreciates receiving your ideas, comments,
                  suggestions and requests regarding the Service ("Unsolicited
                  Ideas"). By submitting your Unsolicited Ideas (in any form or
                  medium), you are transferring all your right, title and
                  interest therein exclusively to TodoCity. As the owner of
                  Unsolicited Ideas, we have unrestricted rights to use,
                  disclose and process the Unsolicited Ideas for any purpose
                  whatsoever without any compensation to you. You also give up
                  any claim that any use, disclosure and processing by us or our
                  licensees of your Unsolicited Ideas violates any of your
                  rights, including moral rights, privacy rights, rights to
                  publicity, proprietary or other rights, and rights to credit
                  for the material or ideas set for therein.
                </p>
                <h2 id="fe203bca-72c0-4657-84db-5197383f7960" className="">
                  <strong>Software in Our Service</strong>
                </h2>
                <p id="ccc42dfb-d046-41b9-9322-c82b428339fd" className="">
                  When the Service requires or includes downloadable software
                  ("Software"), it may may update automatically on your device
                  once a new version or features become available to you. Some
                  platforms may let you adjust your automatic update settings.
                </p>
                <p id="c3f2e515-ee46-4df1-8626-0c8f6dce4d2f" className="">
                  TodoCity hereby grants you a personal, worldwide,
                  royalty-free, non-assignable and non-exclusive license to use
                  the Software provided by TodoCity as part of the Service. You
                  may not copy, modify, distribute, sell, or lease any part of
                  our Service or included Software you are explicitly allowed to
                  do so by the GPL-3.0 license, or you have our written
                  permission for those parts not covered by the open source
                  license.
                </p>
                <p id="1da665f7-31a9-4781-b18f-595df30560e3" className="">
                  Third party applications may use one of the permitted logos
                  and signifiers in order to represent their applicability to
                  the Service, but may not claim formal association with and/or
                  impersonate TodoCity or our staff without prior written
                  consent. Third Party applications, the companies that own or
                  provide them, and their employees and agents, are not
                  authorized to make any promises or representations on our
                  behalf, or change the terms of this Agreement.
                </p>
                <p id="3eca3216-021d-4c69-ad35-ae726e786151" className="">
                  We allow for personal, non-commercial uses like fanart under
                  Commercial Commons License CC-NC-SA 3.0 terms.
                </p>
                <p id="82a2fc50-3b9d-4c87-a3df-bc5b13dd2c94" className="">
                  Outside the above explicitly allowed use cases, you may not
                  use our trademarks, service marks, trade names, logos, domain
                  names, taglines, or trade dress without a signed written
                  contract with us granting you a license to do so.
                </p>
                <h2 id="a7732a2e-c2a2-43ba-bdfa-7b0d28718e7d" className="">
                  <strong>Modifying and Termination of Service</strong>
                </h2>
                <p id="9f98a3e7-2d7b-444b-a154-9d681bbe9bd7" className="">
                  TodoCity reserves the right, in its sole discretion, to add,
                  modify, or remove functionalities or features from the
                  Service, and improve, change and/or update the Service. We may
                  also suspend or terminate the Service at any time, with or
                  without notice to you.
                </p>
                <p id="214a5b2b-492c-4856-b5cb-f9205b27a922" className="">
                  You can choose to stop using our Service at any time. We may
                  suspend or cease providing the Service to you at any time,
                  including if we determine in our sole discretion, that:
                </p>
                <ul
                  id="1e91a79a-8179-4e7a-8333-553c66fdc920"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    You have violated any part of this Agreement, the Privacy
                    Policy, or the Community Guidelines;
                  </li>
                </ul>
                <ul
                  id="a9e1acf2-2e6a-4be5-bcc9-3bb485d13d21"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    We have stopped offering the Service in your region; or
                  </li>
                </ul>
                <ul
                  id="d9876a9b-604b-4fff-b14d-7851981926c1"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    Doing so would be in the best interests of our community,
                    the Service, or the rights of a third party.
                  </li>
                </ul>
                <p id="319d95d0-442a-4686-b8b6-82fa3f2f0742" className="">
                  If your account is terminated, you will no longer have access
                  to it, including to any of the associated data or Content. You
                  will not be entitled to any refunds and we will have no
                  liability to you. We also reserve the right to terminate any
                  other accounts you may have created, as well as access to any
                  other TodoCity Service (also without refunds or liability to
                  you).
                </p>
                <p id="82d3e7dc-691f-4e5e-9b81-66edf252842a" className="">
                  You understand and agree that using the Service comes with the
                  risk that your account may be terminated or suspended at our
                  discretion and at any time. Please keep this risk in mind and
                  comport yourself appropriately.
                </p>
                <h2 id="f0787be9-07c2-470e-b67b-e88d0543145a" className="">
                  <strong>API</strong>
                </h2>
                <p id="92231105-a903-484c-883f-042a48b248a8" className="">
                  You may access your Service data via the Application Program
                  Interface ("API"). By using API you are automatically bound by
                  the Agreement.
                </p>
                <h2 id="ada49b7e-1e98-473a-9838-7ac3ff7e32be" className="">
                  <strong>Using Our Service</strong>
                </h2>
                <p id="adf7d703-b9e7-4977-a39e-854b3881cf1d" className="">
                  You must follow any policies made available to you within the
                  Service, including but not limited to the Terms of Service,
                  Privacy Policy, and Community Guidelines. You may only use our
                  Service as permitted by law. TodoCity may investigate and/or
                  suspend or terminate our Service to you at any time if we find
                  your use of our Service violates the Terms and/or any
                  policies.
                </p>
                <p id="2bbcd839-66f9-47f8-b887-572a78e5f78d" className="">
                  Using our Service does not grant you ownership of any
                  intellectual property rights in our Service or the content you
                  may have access to. You may not use any copyrighted content in
                  our Service unless you obtain permission from the content
                  owner and/or are otherwise permitted by law. The Terms do not
                  grant you the right to use any branding or logos used in our
                  Service. Our Service may display some logos, trademarks, or
                  branding materials that are not the property of TodoCity. Such
                  content is the sole responsibility of the entity that makes it
                  available.
                </p>
                <p id="a2eeaad2-3057-41c3-b934-4605f0b31260" className="">
                  You may not abuse and/or misuse our Service, including but not
                  limited to the following actions:
                </p>
                <ul
                  id="91268775-a8a1-43a8-b611-07f82e4e1ef2"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    Using the Service for any unlawful purposes or activities;
                  </li>
                </ul>
                <ul
                  id="1bafb27f-d524-4300-b1cb-89f736c62ba5"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    Uploading any content to the Service in violation of any
                    applicable law, including but not limited to intellectual
                    property laws and publicity laws;
                  </li>
                </ul>
                <ul
                  id="53abc93e-07ca-40c1-a2fb-73084e5c8040"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    Sending unsolicited promotions or advertisements;
                  </li>
                </ul>
                <ul
                  id="a5ede991-ea11-4554-8e7b-2dec7e28232d"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    Accessing or tampering with the Service's server systems;
                  </li>
                </ul>
                <ul
                  id="ee1b51dd-6c2e-48c5-a806-37232a342034"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    Interfering with or disrupting the access of any user, host,
                    or network;
                  </li>
                </ul>
                <ul
                  id="dd4b4d97-c656-40a5-affc-00982d72e889"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    Abusing or submitting excessively frequent requests to the
                    Service via the API
                  </li>
                </ul>
                <ul
                  id="dd6862ab-1f06-4974-bc61-aecb8d0cb127"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    Spamming chat, whether for personal or commercial purposes,
                    by disrupting the flow of conversation with repeated
                    postings;
                  </li>
                </ul>
                <ul
                  id="1f8dd120-4363-44bd-aec8-f025e4d3759c"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    Impersonating any person, business, or entity, including an
                    employee of TodoCity, or member of the TodoCity moderation
                    team, or communicating in any way that makes it appear that
                    the communication originates from TodoCity staff or
                    TodoCity;
                  </li>
                </ul>
                <ul
                  id="5b775751-3cb8-4f85-9633-48266ed39328"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    Transmitting or communicating any content which, in the sole
                    and exclusive discretion of TodoCity, is deemed offensive,
                    including language that is unlawful, harmful, threatening,
                    abusive, harassing, defamatory, vulgar, obscene, sexually
                    explicit, or racially, ethically, or otherwise
                    objectionable,
                  </li>
                </ul>
                <ul
                  id="481938b6-a939-4244-8995-5640d3f4d655"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    Participating in any action which, in the sole and exclusive
                    judgment of TodoCity, defrauds any other user of the Game,
                    including by scamming or social engineering; or
                  </li>
                </ul>
                <ul
                  id="9c8d1ca4-ae9a-4356-9acd-380f9149f406"
                  className="bulleted-list"
                >
                  <li style={{ listStyleType: 'disc' }}>
                    Inducing or encouraging others to violate the Community
                    Guidelines or the Agreement.
                  </li>
                </ul>
                <p id="801fe89d-a1db-49f6-afc8-840cc7f69074" className="">
                  TodoCity, in its sole discretion, will determine what
                  constitutes abuse and/or misuse of our Service.
                </p>
                <h2 id="1f11c5d2-510e-47fa-8f8a-385b0f1dd472" className="">
                  <strong>Premium Service and Payments</strong>
                </h2>
                <p id="72c3b7e3-954e-4867-8bfb-05b76f08a4d3" className="">
                  You may choose our free Service or paid Service ("Premium")
                  depending on your needs. We do not guarantee when, if ever,
                  Premium features will be available in the free Service. You
                  may upgrade from free Service to Premium at any time.
                </p>
                <p id="beb65713-e25d-4d67-9dfb-2253e74063b3" className="">
                  You will be charged the amount shown on Pricing before you can
                  access Premium Service. All prices shown on Pricing are
                  inclusive of any applicable sales taxes, levies, value-added
                  taxes, or duties imposed by taxing authorities, and you are
                  responsible for payment of all such taxes, levies, or duties.
                  We may revise the Pricing at any time and may, from time to
                  time, modify, amend, or supplement our fees and fee-billing
                  methods. Such changes shall be effective upon posting on the
                  Pricing page or elsewhere in the Service. If there is a
                  dispute regarding payment of fees to us, we reserve the right
                  to terminate or suspend your account at our sole discretion.
                </p>
                <p id="495a3ed7-163b-43b1-b4d2-8d5e21715ca6" className="">
                  BY PURCHASING PREMIUM YOU EXPRESSLY UNDERSTAND AND AGREE TO
                  OUR REFUND POLICY:
                </p>
                <p id="030355f6-df79-4a35-a200-c4cb75057906" className="">
                  WITHIN THIRTY (30) DAYS OF YOUR PREMIUM PAYMENT DATE AS SHOWN
                  ON YOUR PAYMENT BILL, YOU CAN REQUEST A FULL REFUND BY
                  CONTACTING US AT{' '}
                  <a href="mailto:ADMIN@HABITICA.COM">ADMIN@HABITICA.COM</a>.
                  AFTER THIRTY (30) DAYS OF YOUR PREMIUM PAYMENT DATE, ANY
                  PAYMENT REFUND IS SOLELY SUBJECT TO OUR DISCRETION. THE REFUND
                  SHALL BE YOUR SOLE AND EXCLUSIVE REMEDY.
                </p>
                <p id="a83f08cd-074d-4ece-83a2-c1455d8c2655" className="">
                  FOR ANY CUSTOMER WHO PURCHASED PREMIUM IN APPLE INC.'s APP
                  STORE ("APP STORE"), PLEASE CONTACT APPLE INC.'s SUPPORT
                  TEAM:&nbsp;
                  <a href="https://reportaproblem.apple.com/">
                    https://reportaproblem.apple.com
                  </a>
                  . APPLE'S APP STORE DOES NOT ALLOW DEVELOPERS TO ISSUE REFUND
                  FOR APP STORE PURCHASES MADE BY CUSTOMERS.
                </p>
                <h2 id="a2325278-35cb-4768-b443-b64606d3b244" className="">
                  <strong>Warranty Disclaimer</strong>
                </h2>
                <p id="a169afa1-e3cf-4e10-b2be-13333a832713" className="">
                  THE SERVICE AND ANY CONTENT MADE AVAILABLE BY HABITRPG VIA THE
                  SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY
                  WARRANTIES OF ANY KIND, INCLUDING, WITHOUT LIMITATION, THAT
                  THE SERVICE OR CONTENT WILL OPERATE ERROR-FREE OR THAT THE
                  SERVICE OR CONTENT OR ITS SERVERS ARE FREE OF COMPUTER VIRUSES
                  OR SIMILAR CONTAMINATION OR DESTRUCTIVE FEATURES.
                </p>
                <p id="a901be36-33d9-4bc4-ac98-cdccd5aceb7e" className="">
                  WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
                  WARRANTIES OF TITLE, MERCHANTABILITY, NON-INFRINGEMENT OF
                  THIRD PARTIES' RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE AND
                  ANY WARRANTIES ARISING FROM A COURSE OF DEALING, COURSE OF
                  PERFORMANCE, OR USAGE OF TRADE.
                </p>
                <p id="4d981a20-11f4-4d91-81f9-7d57129ae721" className="">
                  WE RESERVE THE RIGHT TO MAKE CHANGES, CORRECTIONS, AND/OR
                  IMPROVEMENTS TO THE SERVICE OR THE CONTENT AT ANY TIME WITHOUT
                  NOTICE.
                </p>
                <p id="493d7d59-f6de-4a3f-bc8d-713cb26faa7a" className="">
                  IN CONNECTION WITH ANY WARRANTY, CONTRACT, OR COMMON LAW TORT
                  CLAIMS: (I) WE AND OUR LICENSORS SHALL NOT BE LIABLE FOR ANY
                  INCIDENTAL OR CONSEQUENTIAL DAMAGES, LOST PROFITS, OR DAMAGES
                  RESULTING FROM LOST DATA OR BUSINESS INTERRUPTION RESULTING
                  FROM THE USE OR INABILITY TO ACCESS AND USE THE SERVICE OR
                  CONTENT POSTED BY HABITPRG, EVEN IF WE HAVE BEEN ADVISED OF
                  THE POSSIBILITY OF SUCH DAMAGES; AND (II) ANY DIRECT DAMAGES
                  THAT YOU MAY SUFFER AS A RESULT OF YOUR USE OF THE PLATFORM
                  SHALL BE LIMITED TO THE GREATER OF (I) MONIES YOU HAVE PAID US
                  IN CONNECTION WITH YOUR USE OF THE PLATFORM DURING THE TWELVE
                  (12) MONTHS IMMEDIATELY PRECEDING THE EVENTS GIVING RISE TO
                  THE CLAIM, OR (II) ONE HUNDRED US DOLLARS ($100).
                </p>
                <p id="6aede05d-4267-44fd-9dab-a1a90413c0c7" className="">
                  SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
                  WARRANTIES. THEREFORE, SOME OF THE ABOVE LIMITATIONS ON
                  WARRANTIES IN THIS SECTION MAY NOT APPLY TO YOU. NOTHING IN
                  THIS AGREEMENT SHALL AFFECT ANY NON-WAIVABLE STATUTORY RIGHTS
                  THAT APPLY TO YOU.
                </p>
                <h2 id="80e367f2-1df7-4bd0-acb5-ae950b2e0222" className="">
                  <strong>Indemnification</strong>
                </h2>
                <p id="87f57cff-ee16-4043-ac52-b7ebc388d803" className="">
                  You agree to defend, indemnify, and hold us and our officers,
                  directors, employees, agents, successors, licensees,
                  licensors, and assigns harmless from and against any damages,
                  liabilities, losses, expenses, claims, actions, and/or
                  demands, including, without limitation, reasonable legal and
                  accounting fees, arising or resulting from: (i) your breach of
                  any of your representations, warranties or other obligations
                  under this Agreement; (ii) your use or misuse of the Service
                  or content posted or made available by TodoCity; and/or (iii)
                  your violation of any third-party rights, including without
                  limitation any copyright, trademark, property, publicity, or
                  privacy right. We shall provide notice to you of any such
                  claim, suit, or proceeding and shall assist you, at your
                  expense, in defending any such claim, suit, or proceeding. We
                  reserve the right to assume the exclusive defense and control
                  (at your expense) of any matter that is subject to
                  indemnification under this section. In such case, you agree to
                  cooperate with any reasonable requests assisting our defense
                  of such matter.
                </p>
                <h2 id="7a06ca50-a592-4fc9-aff4-e799f3ad246a" className="">
                  <strong>Compliance with Applicable Laws</strong>
                </h2>
                <p id="87103c91-e6b4-4647-a70e-49b7688132b0" className="">
                  The Service is based in the United States. We make no claims
                  concerning whether the Service or posted content may be
                  downloaded, viewed, or be appropriate for use outside of the
                  United States. If you access the Service or such content from
                  outside of the United States, you do so at your own risk.
                  Whether inside or outside of the United States, you are solely
                  responsible for ensuring compliance with the laws of your
                  specific jurisdiction.
                </p>
                <h2 id="fc1961cd-e04c-4186-b2c2-57c6cafe59dc" className="">
                  <strong>Binding Arbitration</strong>
                </h2>
                <p id="e0222223-3a91-4f5a-8c39-e650a5e0643a" className="">
                  In the event of a dispute arising under or relating to this
                  Agreement or the Service (each, a "Dispute"), such dispute
                  will be finally and exclusively resolved by binding
                  arbitration governed by the Federal Arbitration Act ("FAA").
                  Any election to arbitrate, at any time, shall be final and
                  binding on the other party. NEITHER PARTY SHALL HAVE THE RIGHT
                  TO LITIGATE SUCH CLAIM IN COURT OR TO HAVE A JURY TRIAL,
                  EXCEPT EITHER PARTY MAY BRING ITS CLAIM IN ITS LOCAL SMALL
                  CLAIMS COURT, IF PERMITTED BY THAT SMALL CLAIMS COURT RULES
                  AND IF WITHIN SUCH COURT'S JURISDICTION. ARBITRATION IS
                  DIFFERENT FROM COURT, AND DISCOVERY AND APPEAL RIGHTS MAY ALSO
                  BE LIMITED IN ARBITRATION. All disputes will be resolved
                  before a neutral arbitrator selected jointly by the parties,
                  whose decision will be final, except for a limited right of
                  appeal under the FAA. The arbitration shall be commenced and
                  conducted by JAMS pursuant to its then current Comprehensive
                  Arbitration Rules and Procedures and in accordance with the
                  Expedited Procedures in those rules, or, where appropriate,
                  pursuant to JAMS' Streamlined Arbitration Rules and
                  Procedures. All applicable JAMS' rules and procedures are
                  available at the JAMS website&nbsp;
                  <a href="https://www.jamsadr.com/">www.jamsadr.com</a>. Each
                  party will be responsible for paying any JAMS filing,
                  administrative, and arbitrator fees in accordance with JAMS
                  rules. Judgment on the arbitrator's award may be entered in
                  any court having jurisdiction. This clause shall not preclude
                  parties from seeking provisional remedies in aid of
                  arbitration from a court of appropriate jurisdiction. The
                  arbitration may be conducted in person, through the submission
                  of documents, by phone, or online. If conducted in person, the
                  arbitration shall take place in the United States county where
                  you reside. The parties may litigate in court to compel
                  arbitration, to stay a proceeding pending arbitration, or to
                  confirm, modify, vacate, or enter judgment on the award
                  entered by the arbitrator. The parties shall cooperate in good
                  faith in the voluntary and informal exchange of all
                  non-privileged documents and other information (including
                  electronically stored information) relevant to the Dispute
                  immediately after commencement of the arbitration. As set
                  forth below, nothing in this Agreement will prevent us from
                  seeking injunctive relief in any court of competent
                  jurisdiction as necessary to protect our proprietary
                  interests.
                </p>
                <p id="d1b52055-c4bd-4460-9719-f4e7ec8d8138" className="">
                  ANY CLAIMS, ACTIONS OR PROCEEDINGS BY YOU MUST BE COMMENCED
                  WITHIN ONE YEAR AFTER THE EVENT THAT GAVE RISE TO YOUR CLAIM
                  OCCURS. ALL OTHER CLAIMS YOU MAY HAVE ARE PERMANENTLY BARRED.
                </p>
                <h2 id="8f4581e7-d99a-4124-b8ca-38292aa24a32" className="">
                  <strong>Class Action Waiver</strong>
                </h2>
                <p id="97b1ed8b-98df-497f-bb20-7bea359d3709" className="">
                  You agree that any arbitration or proceeding shall be limited
                  to the Dispute between us and you individually. To the full
                  extent permitted by law, (i) no arbitration or proceeding
                  shall be joined with any other; (ii) there is no right or
                  authority for any Dispute to be arbitrated or resolved on a
                  class action-basis or to utilize class action procedures; and
                  (iii) there is no right or authority for any Dispute to be
                  brought in a purported representative capacity on behalf of
                  the general public or any other persons. YOU AGREE THAT YOU
                  MAY BRING CLAIMS AGAINST US ONLY IN YOUR INDIVIDUAL CAPACITY
                  AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS
                  OR REPRESENTATIVE PROCEEDING.
                </p>
                <h2 id="0a01da4c-52cb-4df8-b006-bfa439af0168" className="">
                  <strong>Equitable Relief</strong>
                </h2>
                <p id="db6fd182-2fad-4160-b1fd-c3d427cfbc96" className="">
                  You acknowledge and agree that in the event of a breach or
                  threatened violation of our intellectual property rights and
                  confidential and proprietary information by you, we will
                  suffer irreparable harm and will therefore be entitled to
                  injunctive relief to enforce this Agreement. We may, without
                  waiving any other remedies under this Agreement, seek from any
                  court having jurisdiction any interim, equitable, provisional,
                  or injunctive relief that is necessary to protect our rights
                  and property pending the outcome of the arbitration referenced
                  above.
                </p>
                <h2 id="1e9ee9cb-26bd-41c8-9fe3-47ae246ab6de" className="">
                  <strong>Contact Us</strong>
                </h2>
                <p id="25f109a3-b6f9-477b-8120-139c4a160d0f" className="">
                  If you have any questions about the Agreement, or want to
                  report a violation (including DMCA take-down notices relating
                  to infringement of copyright) please contact us at&nbsp;
                  <a href="mailto:admin@todocity.app">admin@todocity.app</a>.
                </p>
                <h2 id="07f444fe-c6ea-4f72-9b8a-316a57aa8ded" className="">
                  <strong>Miscellaneous</strong>
                </h2>
                <p id="b3ebde52-c416-4657-90a3-70427b31603d" className="">
                  This Agreement and any action related thereto will be governed
                  by the laws of the State of California without regard to its
                  conflict of laws provisions. Our failure to act on or enforce
                  any provision of this Agreement shall not be construed as a
                  waiver of that provision or any other provision therein. No
                  waiver shall be effective against us unless made in writing,
                  and no such waiver shall be construed as a waiver in any other
                  or subsequent instance. Except as expressly agreed by us and
                  you in writing, this Agreement constitutes the entire
                  agreement between you and us with respect to the subject
                  matter, and supersedes all previous or contemporaneous
                  agreements, whether written or oral, between the parties with
                  respect to the subject matter. The section headings are
                  provided merely for convenience and shall not be given any
                  legal import. This Agreement will inure to the benefit of our
                  successors, assigns, licensees, and sublicensees.
                </p>
                <p id="ea0719da-1015-4ea8-b382-bdcc233ea332" className=""></p>
              </div>
            </article>
          </>
        </Container>
      </MainLayout>
    </>
  );
}

export default TermsPage;
