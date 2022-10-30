/* eslint-disable operator-linebreak */
/* eslint-disable no-irregular-whitespace */
interface INewUserSignUpTemplateProps {
  name: string;
  isReferral?: boolean;
}

// https://pro.beefree.io/863686/847795/1757236/8115310/edit/message
export const newUserSignupTemplate = ({
  name,
  isReferral,
}: INewUserSignUpTemplateProps) => `<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
  <title></title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: inherit !important;
    }

    #MessageViewBody a {
      color: inherit;
      text-decoration: none;
    }

    p {
      line-height: inherit
    }

    .desktop_hide,
    .desktop_hide table {
      mso-hide: all;
      display: none;
      max-height: 0px;
      overflow: hidden;
    }

    @media (max-width:520px) {
      .desktop_hide table.icons-inner {
        display: inline-block !important;
      }

      .icons-inner {
        text-align: center;
      }

      .icons-inner td {
        margin: 0 auto;
      }

      .row-content {
        width: 100% !important;
      }

      .mobile_hide {
        display: none;
      }

      .stack .column {
        width: 100%;
        display: block;
      }

      .mobile_hide {
        min-height: 0;
        max-height: 0;
        max-width: 0;
        overflow: hidden;
        font-size: 0px;
      }

      .desktop_hide,
      .desktop_hide table {
        display: table !important;
        max-height: none !important;
      }

      .row-1 .column-1 .block-4.paragraph_block td.pad {
        padding: 10px !important;
      }

      .row-1 .column-1 .block-3.button_block td.pad {
        padding: 0 10px !important;
      }

      .row-1 .column-1 .block-3.button_block a span,
      .row-1 .column-1 .block-3.button_block div span {
        line-height: 2 !important;
      }

      .row-1 .column-1 .block-2.paragraph_block td.pad {
        padding: 0 10px 20px !important;
      }

      .row-1 .column-1 .block-1.heading_block td.pad {
        padding: 20px 10px !important;
      }
    }
  </style>
</head>

<body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
    <tbody>
      <tr>
        <td>
          <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
            <tbody>
              <tr>
                <td>
                  <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
                    <tbody>
                      <tr>
                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                          <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tr>
                              <td class="pad" style="padding-bottom:20px;padding-left:5px;padding-right:5px;text-align:center;width:100%;">
                                <h1 style="margin: 0; color: #000000; direction: ltr; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Welcome to TodoCity 🏡</span></h1>
                              </td>
                            </tr>
                          </table>
                          <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                            <tr>
                              <td class="pad" style="padding-bottom:10px;padding-left:5px;padding-right:5px;">
                                <div style="color:#101112;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                  <p style="margin: 0; margin-bottom: 0px;">Hey, ${name}</p>
                                  <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                  <p style="margin: 0; margin-bottom: 0px;">Thank you for signing up! 🥳</p>
                                  ${
                                    isReferral
                                      ? `<p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                    <p style="margin: 0; margin-bottom: 0px;">As a referral, you get <strong>1 month of premium</strong> for free!</p>`
                                      : ``
                                  }
                                  <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                  <p style="margin: 0; margin-bottom: 0px;">I'm super excited to have you try out TodoCity!</p>
                                  <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                  <p style="margin: 0; margin-bottom: 0px;">As you may have seen TodoCity is in alpha. That means that the game, map, and experience will expand but <strong>your todos will always be safe. 🔐</strong></p>
                                  <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                  <p style="margin: 0; margin-bottom: 0px;">Please, please, please share any and all feedback. Good, bad, ugly. You can't hurt my feelings. If something sucks or needs to be changed, let me know!</p>
                                  <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                  <p style="margin: 0; margin-bottom: 0px;">For starters, what do you think about TodoCity so far? Seriously, you can reply to this email! 😃</p>
                                  <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                  <p style="margin: 0;">Final note, I'm running a promotion to purchase TodoCity for life! It'll be available until I decide to stop. 😅</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table class="button_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                            <tr>
                              <td class="pad" style="padding-bottom:10px;padding-left:5px;padding-right:5px;padding-top:10px;text-align:left;">
                                <div class="alignment" align="left">
                                  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://todocity.app/pricing?utm_source=email&utm_medium=email&utm_campaign=new_user_signup" style="height:42px;width:222px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#6b46c1"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a href="https://todocity.app/pricing?utm_source=email&utm_medium=email&utm_campaign=new_user_signup" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#6b46c1;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">Get premium for life ( $9 )</span></span></a>
                                  <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </table>
                          <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                            <tr>
                              <td class="pad" style="padding-bottom:20px;padding-left:5px;padding-right:5px;padding-top:10px;">
                                <div style="color:#101112;direction:ltr;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                  <p style="margin: 0; margin-bottom: 0px;">Until next time ✌️</p>
                                  <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                                  <p style="margin: 0; margin-bottom: 0px;">Lucas B</p>
                                  <p style="margin: 0; margin-bottom: 0px;">Mayor of TodoCity</p>
                                  <p style="margin: 0;"><a href="mailto:admin@todocity.app?subject=Hello&body=I've%20got%20a%20question..." target="_blank" title="admin@todocity.app" rel="noopener" style="text-decoration: underline; color: #8a3c90;">lucas@todocity.app</a></p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><!-- End -->
</body>

</html>`;
