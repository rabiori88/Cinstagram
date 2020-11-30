require("dotenv").config()
import {GraphQLServer} from "graphql-yoga"
import logger from "morgan"
import schema from "./schema"

const PORT = process.env.PORT || 4000;


const server = new GraphQLServer({ schema});

const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()
async function main() {
  // ... you will write your Prisma Client queries here
}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

server.express.use(logger("dev"));

server.start({PORT}, () => 
    console.log(`✅ Server running on http://localhost:${PORT}`));
