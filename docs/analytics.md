# Analytics

## Google Scripts

These will load the same GTM tag, but different GTM environments
Each environment will load the corresponding Google Analytics tag ( this is handled within Google Tag Manager )
Unless testing changes or adding new scripts, both environments in GTM should be identical
You should need to worry about modifying this file
https://samuelschmitt.medium.com/how-to-setup-google-tag-manager-like-a-pro-and-google-analytics-e5f733d3ec60

## Adding New Analytics

Create a new event within `analytics/events` and then use where you need it. Navigate to Google Tag Manager and open the preview tab. Connect to localhost:3000. After pushing to the dataLayer with your new event, you should see it in the preview mode.

Once that works, you'll need to create a new tag / trigger combo to send the event specifically to GA4.

## Identifying users

The AuthListener is lazy loaded into the \_app and is used to identify a user within Sentry and within Google Analytics via the users uuid
