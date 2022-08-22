import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GITHUB_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token=import.meta.env.VITE_GITHUB_ACCESS_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client=new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});