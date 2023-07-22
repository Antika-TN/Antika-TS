
"use client"
import React,{useState } from 'react';
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

type Anchor =  'settings' ;


function page() {
    const [state, setState] = useState({
   
      settings: false
        });
    
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
            <div className='profile'>

              <div className="cover-image">
              <img src='https://img.freepik.com/premium-vector/set-creative-hand-painted-contour-abstract-female-silhouettes-minimalist-vector-people-icon-postcard-poster-brochure-cover-design-web-interior-painting_320582-89.jpg?w=2000' />
            </div>

              <div className='profile-img'>
            <img  src='https://cdn-icons-png.flaticon.com/512/6833/6833605.png'/>
            </div>

            <div className='fullname'>
               <p>Maya Smith</p>
            </div>

            <div className='created'>
              <h1>Creation: 2023-07-21 </h1>
               
            </div>

            

            
         
            </div>




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

