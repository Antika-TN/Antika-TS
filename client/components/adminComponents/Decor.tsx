'use client'
import React from 'react'
import { useState , useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Link  from 'next/link'
import Button from '@mui/material/Button';

interface decor {
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

function Decor() {
    const [DecorProduct, setDecorProduct] = useState<decor[]>([])

    useEffect(() => {
        fetchDecorProduct()
    }, []);
  
    async function fetchDecorProduct() {
      try {
  
        const response = await fetch('http://localhost:3000/admin/getDecorProduct')
        const data = await response.json()

        setDecorProduct(data.Decor)
    
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
            fetchDecorProduct()
          }catch(error){
    console.error('Error deleting product:',error)
          }
          
        };

  return (
    <div>
         <div>
    <Link href="/admin/adminDashbord">
               <Button variant="contained" color="primary">go back to dashboard</Button>
             </Link>
    </div>
    <div>
    <List className='card'>
    {DecorProduct.map((decor) => (
      <ListItem key={decor.id}>
        <ListItemText className='ctii' primary={decor.name} secondary={decor.price} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(decor.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
  </div>
  </div>
  )
}

export default Decor
