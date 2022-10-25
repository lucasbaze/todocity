# Feature Development

## "Server" Side

1. Multi action functions should be organized into services and models on the backend.
2. The client should rely on the complex functions when needed to ensure correct separation of client / server logic
3. This does add an extra layer of complexitity, but ensure correct types and testability of functions... I think :)

## Client Side

### Queries

1. The client should use a `queryRef` coming from the `data/client` folder.
2. Use the firestore hook to fetch the data accordingly
3. Decide if you need to refetch the data or subscribe accordingly ( there might be duplicate data reads. That's okay )

### Mutations

1. The client should use the correct `mutationRef` from the `data/client` folder
2. Use the firestore hook to mutate the data accordingly

**Note** Mutations should be simple crud updates. If there are additional side-effects that are needed, it's best to use a service funciton.

Use your best judgement.
