import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://vortex.korabli.su/api/graphql/glossary/'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  headers: {
    'Access-Control-Allow-Origin': 'localhost'
  }
});

export default client;
