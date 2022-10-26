# Scripts

## Local scripts

Reference: https://medium.com/@fmoessle/typescript-paths-with-ts-node-ts-node-dev-and-jest-671deacf6428
Use the following command:

```sh
> NEXT_PUBLIC_FIREBASE_EMULATE=true ts-node -r tsconfig-paths/register scripts/add-lots-to-maps.ts
```

1. This will ensure that the firebase emulators are used
2. Tsconfig-paths/register will enusre paths and "@todocity" paths are followed properly
3. Runs the script to add lots to the maps
