'use client'
import React, { useState , useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
  import Link  from 'next/link'
  import Button from '@mui/material/Button';



  interface Sellers {
    id: number;
    firstName: string;   
    lastName: string;  
    
  }

function Seller() {
    const [sellersname, setSellersname] = useState<Sellers[]>([])

  useEffect(() => {
    fetchSellersData()
  }, []);

  async function fetchSellersData() {
    try {

      const response = await fetch('http://localhost:3000/admin/sellers')
      const data = await response.json()


      setSellersname(data.sellers)
    } catch (error) {
      console.error('Error', error)
    }
  }

  async function deleteSeller(id :number) {
    try {

      const response = await fetch(`http://localhost:3000/admin/deleteSeller/${id}`,{
        method:'DELETE',
      });

      if (response.ok) {
        console.log('seller deleted successfully')
      } else {
        console.error('Failed to delete seller')
      }
    } catch (error) {
      console.error('Error', error)
    }
  }


    const handleDelete = async (id : number) => {
      try{
        await deleteSeller(id)
        fetchSellersData()
      }catch(error){
console.error('Error deleting seller:',error)
      }
      
    };

  return (
<div>
    <div>
    <Link href="/admin/adminDashbord">
               <Button variant="contained" color="primary">go back to dashboard</Button>
             </Link>
    </div>

    <List className='card'>
      {sellersname.map((seller) => (
        <ListItem key={seller.id}>
          <ListItemText className='ctii' primary={seller.firstName} secondary={seller.lastName} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(seller.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
    </div>
  )
}

export default Seller
