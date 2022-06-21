import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4odznws22bk01z24l9p8du1/master',
  cache: new InMemoryCache(),
})
