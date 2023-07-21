'use client'
import React, { useEffect, useState } from 'react'
import {Box,Button,CardMedia,Card,CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Comments from '../Comments/Comments';
import AddComment from '../AddComment/AddComment';
import axios from 'axios'
function ProdactDetails() {
  const [show, setShow] = useState(false)
  const [oneComment,setOneComment]=useState<OneProdact >([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:3000/products/1')
    .then((res)=>setOneComment(res.data))
    .catch(err=>console.log(err))
  },[])
  const openClick = () => {
    setShow(true);
  };
  const closeClick = () => {
    setShow(false);
  }; 
  {console.log('onnnn',oneComment)}
  return (
    <Box>
    <Box >
    <Card sx={{ maxWidth: 345 }} style={{margin:"20px" }}>
      <CardMedia
        component="img"
        alt="image of prodact"
        height="140"
        image={oneComment.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {oneComment.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {oneComment.description}
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
        <Box> <AddComment closeClick={closeClick} show={show} /> </Box>
  <Box>
    <Comments/>
  </Box>
</Box>
  )
  
}

export default ProdactDetails
