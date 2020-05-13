import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs }  from './src/typedefs';
import { resolvers } from './src/resolvers';

const PORT = 4001;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`Server ready at: http://localhost:${PORT}${server.graphqlPath}`);
});
