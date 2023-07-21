'use client'
import React from 'react'
import { useState , useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Link  from 'next/link'
import Button from '@mui/material/Button';


interface accessories {
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

function Accessories() {
    const [AccessoriesProduct, setAccessoriesProduct] = useState<accessories[]>([])

    useEffect(() => {
        fetchAccessoriesProduct()
    }, []);
  
    async function fetchAccessoriesProduct() {
      try {
  
        const response = await fetch('http://localhost:3000/admin/getAccessoriesProduct')
        const data = await response.json()

        setAccessoriesProduct(data.Accessories)
    
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
            fetchAccessoriesProduct()
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
    {AccessoriesProduct.map((accessories) => (
      <ListItem key={accessories.id}>
        <ListItemText className='ctii' primary={accessories.name} secondary={accessories.price} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(accessories.id)}>
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

export default Accessories
