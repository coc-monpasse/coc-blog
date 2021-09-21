
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // uri: "http://localhost:3000/api/graphql",
    uri:"https://blog-coc-gql.herokuapp.com/api/graphql",
    cache: new InMemoryCache(),
});

export default client;