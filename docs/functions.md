# Firebase functions

## Writing a new function

1. create the function the /src folder
2. build the function with `yarn build`
3. ensure that local emulators are running
4. call the function either from the shell or via a specific call function within the app

## Shell

Use the firebase shell after building your functions to ensure they're working as expected locally.
MAKE SURE THE EMULATOR IS RUNNING

## Environment Variables

[They're loaded automatically](https://firebase.google.com/docs/functions/config-env). Just add them to .env.local

## Deploying functions ( TBD )

```sh
# Switch to the right project first
> firebase use todocity-dev

# deploy the function
> firebase deploy --only functions
```

You'll get a feedback response that looks something like the following:
<image src>

## Troubleshooting

### Throwing an error saying something about INTERNAL and the manifest not being read

I kept getting an issue aftering building the functions and then running the `firebase functions:shell` command.

This was throwing an error saying something about INTERNAL and the manifest not being read. After some intense googling, it looked as if the admin app wasn't being initialized properly.

I first simply had the import of functions as

```
import { initializeApp } from 'firebase-admin';
initializeApp();
```

Without any credentials set.

Then I decided to set the credentials after [generating a new private key](https://firebase.google.com/docs/functions/local-shell) from the Serive Accounts window in project settings.

Then I did the following:

```
import { initializeApp, credentials } from 'firebase-admin';
initializeApp({
	credentials: credentials.cert('../service-account.json')
});
```

But that didn't work either.

I finally decided to do it the way it's suggested in [connecting to local-shell](https://firebase.google.com/docs/functions/local-shell) and export the GOOGLE_APPLICATION_CREDENTIALS. I also modified the code to the following:

```
import * as admin from 'firebase-admin';
const app = admin.initializeApp();
```

Now things were working. However I was getting a warning saying that the Google credentials would be used for any services that were not actively being emulated.

In clean up, I quit terminal and reloaded and ran `export` which listed all of the export vars, and the GOOGLE_APPLICATION_CREDNETIALS was no longer present, BUT the `firebase functions:shell` still worked.

So honestly no clue why it's working locally, but it's working now.

I also cleaned up the initialization back to:

```
import * as admin from 'firebase-admin';
admin.initializeApp();
```

My guess is that it really just needed to be loaded once and it'll work. We'll see tomorrow after I shutdown my computer.

On my latest attempt I set the following:

```
admin.initializeApp({
  credential: admin.credential.cert(require('../service-account.json')),
});
```

And that also seemed to work.

### Cors Error being thrown

1. Is the app running in emulator mode?
2. Are you using the right function name?

### Helpful Link

[Connecting to the local emulator](https://firebase.google.com/docs/emulator-suite/connect_functions)
[Testing with the emulator](https://firebase.google.com/docs/functions/local-emulator)
