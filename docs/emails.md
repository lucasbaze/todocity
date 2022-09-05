# Emails

### Sign up emails

When a user signs up they will get a welcome email. If the user signed up and it also includes a referral code (stored in localstorage), the referrer will also receive an email about the new referrer sign up.

Currently emails are triggered on write to the users table via a cloud function.

### Creating a new email template

1. Create the email within [BeeFree](https://pro.beefree.io/)
2. Make sure mobile looks good and utm params are included in links
3. Export the template to html
4. Create a new template within the emails template section
5. Use the template in any email location that's needed.
