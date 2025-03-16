import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const products = [
  {
    id: 1,
    name: 'example1',
    description: 'short text about this product',
    price: 389.95,
    vat: 0.21,
    img: '/assets/images/____.png',
    stock: 3,
  },
  {
    id: 2,
    name: 'example2',
    description: 'short text about this product',
    price: 421.95,
    vat: 0.06,
    img: '/assets/images/_____.png',
    stock: 45,
  },
]

// Get all products
app.get('/product', (req, res) => {
  res.json(products)
})

// Update an existing product
app.post('/product', (req, res) => {
  const product = req.body
  let existing = products.find((p) => p.id === product.id)
  existing.stock = product.stock
  res.sendStatus(200)
})

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
