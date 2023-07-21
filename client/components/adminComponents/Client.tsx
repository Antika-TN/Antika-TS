'use client'
import React, { useState , useEffect } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
  import Link  from 'next/link'
  import Button from '@mui/material/Button';

  interface Clients {
    id: number;
    firstName: string;   
    lastName: string;  
    
  }

function Client() {

    const [clientsname, setClientssname] = useState<Clients[]>([])

  useEffect(() => {
    fetchClientsData()
  }, []);

  async function fetchClientsData() {
    try {

      const response = await fetch('http://localhost:3000/admin/clients');
      const data = await response.json();


      setClientssname(data.clients);
    } catch (error) {
      console.error('Error', error);
    }
  }

  async function deleteClient(id: number) {
    try {

      const response = await fetch(`http://localhost:3000/admin/deleteClient/${id}`,{
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


    const handleDelete = async (id: number) => {
      try{
        await deleteClient(id)
        fetchClientsData()
      }catch(error){
console.error('Error deleting seller:',error);
      }
    }


  return (
    <div>
   <div>
   <Link href="/adminDashbord">
              <Button variant="contained" color="primary">go back to dashboard</Button>
            </Link>
   </div>

<div>
    <List className='card'>
      {clientsname.map((client) => (
        <ListItem key={client.id}>
          <ListItemText className='ctii' primary={`FirstName: ${client.firstName}`} secondary={`LastName: ${client.lastName}`} />
          
          {/* <ListItemText className='ctii' primary={`CreatedAt: ${client.createdAt}`} secondary={`PhoneNumber: ${client.phoneNumber}`} /> */}
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(client.id)}>
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

export default Client
