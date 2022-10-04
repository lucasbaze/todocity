# TroubleShooting

## Killing a process on a port (Mac)

Sometimes when you leave your computer on, the ports get stuck even after killing firebase emulators

From: https://stackoverflow.com/a/18706913

```sh
> lsof -i tcp:8080
> kill -9 PID
```

## Can't see the data in the firestore

Double check that you ran `yarn emulators:start` as this will set the project to a demo city.

https://github.com/firebase/firebase-tools/issues/2365#issuecomment-749499261
