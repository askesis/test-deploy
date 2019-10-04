const React = require('react');
const { ApolloClient } = require('apollo-client');
const { InMemoryCache } = require('apollo-cache-inmemory');
const { HttpLink } = require('apollo-link-http');
const { ApolloProvider } = require('react-apollo');
const fetch = require('isomorphic-fetch');

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/ck17utxci37wy01686omrknhk',
  fetch
});

const cache = new InMemoryCache()
const client = new ApolloClient({ link: httpLink, cache });

export default ({ element }) => <ApolloProvider client={client}>{element}</ApolloProvider>;