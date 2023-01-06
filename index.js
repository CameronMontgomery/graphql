import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const port = process.env.PORT || 8080;
const host = process.env.PORT || 'localhost';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL sanity check');
});

class Product {
  constructor(id, { name, description, price, soldout, stores }) {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.soldout = soldout
    this.stores = stores
  }
}

const productDatabase = {};

const root = {
  product: () => {
    return {
      id: 28733,
      name: 'garden bust',
      description: 'Beautiful bust made of marble for your garden.',
      price: 34.99,
      soldout: false,
      stores: [
        { location: 'Pasadena', id: 2206 },
        { location: 'Burbank', id: 2206 },
      ],
    };
  },
  createProduct: ({ input }) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    productDatabase[id] = input;
    return new Product(id, input);
  }
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`GraphQL server is running on: ${host}:${port}/graphql`);
});
