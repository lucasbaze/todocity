## Overview

This is a yarn workspace monorepo

### Structure

| Codebase | Description        |
| -------- | ------------------ |
| Starlord | Next.js App        |
| Flash    | Firebase functions |

## Getting Started

Start with getting access to the right key / value for all .env files.

Then run the next.js server:

```bash
# install dependencies
> yarn

# build firebase functions library
# This will ensure that functions are usable within the emulator
> cd ./flash
> yarn build

# start "server" emulators
# You may need to install the latest java runtime
# https://www.oracle.com/java/technologies/downloads/
> yarn emulators:start

# start next.js project
> cd ./starlord
> yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
If you do not see "Running in emulator mode" at the bottom, you're missing something.

## Firebase

Install Firebase globally

```sh
> npm i -g firebase-tools
```

Login to firebase to interact with the dev database

```sh
> firebase login
```

## Troubleshooting

Firebase emulator ports get locked up:
https://stackoverflow.com/questions/3855127/find-and-kill-process-locking-port-3000-on-mac
