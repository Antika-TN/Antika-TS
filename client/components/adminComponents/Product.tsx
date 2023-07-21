'use client'
import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Category from './Category';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './style.css'


interface product {
  id: number
  name: string
  description: string
  price: number
  stock: number
  Category: string
  User: {
    imageProfile: string
    firstName: string

  }
  image: string
}

function Product() {
  const [productsname, setProductsname] = useState<product[]>([])

  useEffect(() => {
    fetchProductsData()
  }, []);

  async function fetchProductsData() {
    try {

      const response = await fetch('http://localhost:3000/admin/getAllProduct')
      const data = await response.json()


      setProductsname(data.products)
    } catch (error) {
      console.error('Error', error)
    }
  }

  async function deleteProduct(id: number) {
    try {

      const response = await fetch(`http://localhost:3000/admin/deleteProduct/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('product deleted successfully')
      } else {
        console.error('Failed to delete product')
      }
    } catch (error) {
      console.error('Error', error)
    }
  }


  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id)
      fetchProductsData()
    } catch (error) {
      console.error('Error deleting product:', error)
    }

  };

  return (
    <div>
    <div>
           <Category/>
           
       <Link href="/admin/adminDashbord">
                  <Button variant="contained" color="primary">go back to dashboard</Button>
                </Link>
      </div>

    <div id='wrapper'>
      {productsname.map((product) => (
        <Card key={product.id} className='card'>
          <CardContent>
            <Typography variant="h5" component="div">
              {`Product: ${product.name}`}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {`Category: ${product.Category}`}
            </Typography>
            {product.image && (
              <Image width="250" height="150" src={product.image} alt={`Product Image - ${product.name}`} />
            )}
            <Typography variant="subtitle2" color="textSecondary">
              {`Description: ${product.description}`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {`Price: ${product.price}`}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {`Stock: ${product.stock}`}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(product.id)}>
              <DeleteIcon className='deleteicon' />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
    </div>

   
  )
}

export default Product
