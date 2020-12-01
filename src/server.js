const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const { makeExecutableSchema } = require('@graphql-tools/schema');

import logger from "morgan"
require("dotenv").config()
import schema from "./schema"

// const PORT = 5000;
//const prisma = new PrismaClient()


const server = new GraphQLServer({
  schema,
  playground: true,
  context: {
    prisma,
  }
})

const options = {
port: 8000,
endpoint: '/graphql',
subscriptions: '/subscriptions',
playground: '/playground',
}

server.get();
server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)