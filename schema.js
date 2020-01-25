const { buildSchema } = require('graphql');

module.exports.schema = buildSchema(`
  input UserInput {
    name: String!
    age: Int!
  }
  
  type User {
    id: ID!
    name: String!
    age: Int!
    comments : [Comment]
  }

  type Comment {
    userId: ID!
    value: String
  }

  type Query {
    getUsers: [User]!
    getUser(id: ID): User
  }

  type Mutation {
    addUser(user: UserInput): User
    deleteUser(id: String): [User]
  }
`);
