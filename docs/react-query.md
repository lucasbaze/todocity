# React Query

## Setup

The app is wrapped in the QueryClientProvider that comes from react-query. react-query-firebase is just a wrapper around react-query for use with firebase. Accordingly it needs this context, which is easy enough, but in order to access this context and use the hooks that come from react-query-firebase/firestore we need to useContextBridge ( from drei ).

This is done by passing the original QueryClientProvider with the `contextSharing` prop. See react-query docs for further reading. With the contextSharing prop passed, we can pass `getWindow()?.ReactClientQueryContext` to the `useContextBridge` and it'll work.

Definitely thought I was going to have to fork and host...
