import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Channel {
        id: ID!
        name: String
        messages: [Message]!
    }
    
    type Message {
        id: ID!
        text: String
    } 
    
    ###END POINTS###
    
     type Query {
        channels: [Channel]
        channel(id: ID!): Channel
    }
    
    type Mutation {
        addChannel(name: String!): Channel
    }
   
    ###END POINTS###
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };