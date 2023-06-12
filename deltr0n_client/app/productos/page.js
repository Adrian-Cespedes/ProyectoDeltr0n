'use client'
import Grid from '@mui/material/Grid'; // Grid version 1
import ProductCard from '../components/ProductCard';

export default function Page() {

  const tempData = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 }
  ]

  return (
    <Grid container spacing={2}>
      {
        tempData.map((product) =>
          <Grid item xs={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        )
      }
    </Grid>
  )
}
