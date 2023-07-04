'use client'
import Grid from '@mui/material/Grid'; // Grid version 1
import ProductCard from '../../components/ProductCard';

async function getProducts() {
  const res = await fetch("http://localhost:8080/api/productos/refrigeracion")

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {

  const tempData = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 }
  ]

  const productsData = await getProducts();

  console.log(productsData)

  return (
    <Grid container spacing={2}>
      {
        productsData.map((product) =>
          <Grid item xs={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        )
      }
    </Grid>
  )
}