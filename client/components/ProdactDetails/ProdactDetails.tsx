'use client'
import React, { useContext, useEffect, useState } from 'react'
import {Box,Button,CardMedia,Card,CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Comments from '../Comments/Comments';
import AddComment from '../AddComment/AddComment';
import {DataContext} from '../productCard/ProdactCard'

import axios from 'axios'
function ProdactDetails() {
  const {love}=useContext(DataContext)
  const {idProdact}=useContext(DataContext)
  console.log('idProdactDetalis',idProdact )
  const [show, setShow] = useState(false)
  const [onProdact,setOnProdact]=useState< Prodact>()
  const [idProdac,setIdProdact]=useState<number>(idProdact)
  useEffect(()=>{
    axios.get<Prodact>(`http://127.0.0.1:3000/products/${idProdac}`)
    .then((res)=>setOnProdact(res.data))
    .catch(err=>console.log(err))
  },[idProdac])

  const openClick = () => {
    setShow(true);
  };
  const closeClick = () => {
    setShow(false);
  }; 
  console.log('iiii',idProdac)
  return (
    <Box>
    <Box >
    <Card sx={{ maxWidth: 345 }} style={{margin:"20px" }}>
      <CardMedia
        component="img"
        alt="image of prodact"
        height="140"
        image={onProdact?.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {onProdact?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {onProdact?.description}
        </Typography>
      </CardContent>
    </Card>
  </Box>
  <Box sx={{gridRow: "2", gridColumn: "1 " }}>
    <Button
      variant="contained"
       size="medium"
      onClick={openClick}
      style={{ marginLeft: "20px", width:"90%" }}
    >
      Add new Comment
    </Button>
  </Box>
        <Box> <AddComment closeClick={closeClick} show={show} idProdact={idProdact} /> </Box>
  <Box>
    <Comments/>
  </Box>
</Box>
  )
  
}

export default ProdactDetails
