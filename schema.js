import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Product {
    id: ID
    name: String
    description: String
    price: Float
    soldout: Boolean
    stores: [Store]!
  }

  type Store {
    location: String
    id: ID
  }

  type Query {
    product: Product
  }

  type StoreInput {
    location: String
    id: ID
  }

  input ProductInput {
    id: ID
    name: String
    description: String
    price: Float
    soldout: Boolean
    stores: [StoreInput]!
  }
`);

export default schema;
