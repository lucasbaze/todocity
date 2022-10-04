# Emails

### Development Emails

We are using a free service baked into nodemailer called [ethereal.email](https://ethereal.email/) that allows for sending mock emails.
Whenever an email is sent in development, like the new user signup, a test email account is created and the username and password will be shown within the firebase logs and look like:

```sh
>  Email account credentials for https://ethereal.email/:  {
>    user: 'generated-username@ethereal.email',
>    pass: 'generated-password',
>    smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
>    imap: { host: 'imap.ethereal.email', port: 993, secure: true },
>    pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
>    web: 'https://ethereal.email'
>  }
```

### Sign up emails

When a user signs up they will get a welcome email. If the user signed up and it also includes a referral code (stored in localstorage), the referrer will also receive an email about the new referrer sign up.

Currently emails are triggered on write to the users table via a cloud function.

### Creating a new email template

1. Create the email within [BeeFree](https://pro.beefree.io/)
2. Make sure mobile looks good and utm params are included in links
3. Export the template to html
4. Create a new template within the emails template section
5. Use the template in any email location that's needed.
