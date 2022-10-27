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

**useFirestoreDocument**
When adding a new query, make sure that you're using the same query key name as others that may have already been called to reduce the number of calls to the db and use react-query local data.

i.e. if a query key already exists for `useFirestoreDocumentData(['user', user.id])`, then use that same query key `['user']` again.
You can read https://react-query-v3.tanstack.com/guides/query-keys

### Mutations

1. The client should use the correct `mutationRef` from the `data/client` folder
2. Use the firestore hook to mutate the data accordingly

**Note** Mutations should be simple crud updates. If there are additional side-effects that are needed, it's best to use a service funciton.

Use your best judgement.
