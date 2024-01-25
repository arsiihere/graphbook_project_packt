import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolver from "./resolvers";
import Schema from "./schema";

// const executableSchema = makeExecutableSchema({
//   typeDefs: Schema,
//   resolvers: Resolvers,
// });

// const server = new ApolloServer({
//   schema: executableSchema,
//   context: ({ req }) => req,
// });

// export default server;

export default (utils) => {
  const server = new ApolloServer({
    typeDefs: Schema,
    resolvers: resolver.call(utils),
    context: ({ req }) => req,
  });
  return server;
};
