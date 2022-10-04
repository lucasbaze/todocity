# Flash

This is the project that houses all of the firebase functions. If you're not already aware, these are simply "serverless" functions run on the google cloud platform with a little extra flavor for firebase and firestore interactions.

## Building library

The `lib` directory is the compiled output needed for firebase and firebase emulators. In order for functions to work, you must build this lirbary and rebuild any time changes are made for it to be applied.

You can do this by running `yarn build` in the current directory.
