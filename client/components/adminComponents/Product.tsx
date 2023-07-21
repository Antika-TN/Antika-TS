'use client'
import React, { useState , useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import  Link  from 'next/link';
import Button from '@mui/material/Button';

interface product {
    id: number
    name: string 
    description: string 
    price: number 
    stock:number
    Category:string
    User:{
    imageProfile:string
    }
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

    async function deleteProduct(id:number) {
        try {
    
          const response = await fetch(`http://localhost:3000/admin/deleteProduct/${id}`,{
            method:'DELETE',
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
    
    
        const handleDelete = async (id:number) => {
          try{
            await deleteProduct(id)
            fetchProductsData()
          }catch(error){
    console.error('Error deleting product:',error)
          }
          
        };

  return (
    <div>
    <div>
    <Link href="/adminDashbord">
               <Button variant="contained" color="primary">go back to dashboard</Button>
             </Link>
    </div>

    <List className='card'>
    {productsname.map((product) => (
      <ListItem key={product.id}>
        <ListItemText className='ctii' primary={`Product: ${product.name}`} secondary={`Category:  ${product.Category}`} />
        <ListItemText className='ctii' primary={`Company: ${product.price}`} secondary={`Created At: ${product.User.imageProfile}`} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(product.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
  </div>
  )
}

export default Product
