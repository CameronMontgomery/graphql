import express from 'express';
const port = process.env.PORT || 8080

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL sanity check')
})

app.listen(port, () => {
  console.log(`GraphQL server is running on port: ${port}`)
})