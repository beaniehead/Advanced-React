// This file connects to the remote Prisma DV and gives us the ability to query it in JS
const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false,
});

module.exports = db;
