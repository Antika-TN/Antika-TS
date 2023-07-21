'use client'
import React from 'react'
import { useState , useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Link  from 'next/link'
import Button from '@mui/material/Button';


interface furniture {
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

function Furniture() {
    const [FurnitureProduct, setFurnitureProduct] = useState<furniture[]>([])

    useEffect(() => {
        fetchFurnitureProduct()
    }, []);
  
    async function fetchFurnitureProduct() {
      try {
  
        const response = await fetch('http://localhost:3000/admin/getFurnitureProduct')
        const data = await response.json()

        setFurnitureProduct(data.Furniture)
    
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
            fetchFurnitureProduct()
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
      {FurnitureProduct.map((furniture) => (
        <ListItem key={furniture.id}>
          <ListItemText className='ctii' primary={furniture.name} secondary={furniture.price} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(furniture.id)}>
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

export default Furniture
