
"use client"
import React,{useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CartIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { right } from '@popperjs/core';
import axios from 'axios'



type Anchor =  'settings' ;


function page() {
    const [state, setState] = useState({settings: false});
    const [clients,setClients]= useState([])
    const [refresh,setRefresh]= useState(false)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
      axios
      .get("http://localhost:3000/clients/")
      .then((response)=>{
        setClients(response.data)
      })
      .catch((error)=>{
        console.error(error);
      })
    }, [refresh])
    
      const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
    
          setState({ ...state, [anchor]: open });
        };
    
      const list = (anchor: Anchor) => (
        <Box
          sx={{ width:  250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['My Profile'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 1 === 0 ?  <PermIdentityIcon /> : <PermIdentityIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          

          <List>
            {[ 'My Cart', 'My Favorite'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <CartIcon /> : <FavoriteBorderIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            {[ 'Manage Account', 'Deactivate Account'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <EditIcon /> : <DeleteOutlineIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

       

      );
    
      return (
        <section className='client'>
           <div className='layout'>
            { clients.map((client,index)=>(
            <div className='profile' key={index}>

              <div className="cover-image">
              <img src= {client.imageCover}/>
            </div>

              <div className='profile-img'>
            <img  src={client.imageProfile}/>
            </div>

            <div className='fullname'>
               <p>{client.firstName +" "+client.lastName}</p>
            </div>

            <div className='created'>
              <h1>Creation: {client.createdAt} </h1>
            </div>

            <div className='info' >
            <span className='info-title' >Address :</span>
            <span className='info-profile' > {client.address} </span>
            <div>
            <span className='info-title' >Phone Number :</span>
            <span className='info-profile'> {client.phoneNumber}</span>
            </div>
            <div className='email'>
            <span className='info-email' >E-mail: </span>
            <span className='infoemail' >{client.email}</span>
            </div>
            </div>

            <button className='editing'>Edit Profile</button>
            <div className='profile-edit'>
          
          </div>
            
         
            </div>
            ))}
                   


                   
        <div className='sidebar'>

            {/* <h1>Settings On the </h1> */}
            
          {(['settings'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)} className='right'>{anchor}</Button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}

        </div>




       

        </div>
        </section>
      );
    }

export default page

