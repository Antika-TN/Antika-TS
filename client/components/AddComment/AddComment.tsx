'use client'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextareaAutosize } from '@mui/material'
import React, { useState,useContext,useEffect } from 'react'
import axios from 'axios'
import {DataContext} from '../productCard/ProdactCard'
interface close {
  closeClick():void
  show:boolean
  idProdact:number
}
function AddComment(props:close) {
  const {love,setLove}=useContext(DataContext)
  console.log('lll',love)
 console.log(setLove);
 
  setLove((prev:number)=>{
console.log('prev',prev);
})
    const [comment,setComment]=useState<string>('')
    useEffect(()=>{
    },[])
    const addComment = (comment:string) => {
        axios
          .post(`http://localhost:3000/reviews/1/${props.idProdact}`, {
            comment: comment,
            rating: love,
          })
          .then(() => alert("done"))
          .catch((err) => console.log(err));
      };
  return (
    <Box>
          <Dialog
          open={props.show}
          onClose={props.closeClick}
          style={{ background: "var(--white-10, rgba(255, 255, 255, 0.10))" }}
        >
          <DialogTitle style={{ background: "transparent" }}>
            Add your comment
          </DialogTitle>
          <DialogContent style={{ background: "transparent" }}>
            <DialogContentText style={{ background: "transparent" }}>
              Here you can add your comment about this product
            </DialogContentText>
            <TextareaAutosize autoFocus
          style={{ height: "200px", width: "500px",background: "transparent ", }}
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
          </DialogContent>
          <DialogActions style={{ background: "transparent" }}>
            <Button onClick={props.closeClick}>Cancel</Button>
            <Button onClick={()=>addComment}>Send comment</Button>
          </DialogActions>
        </Dialog>
    </Box>
  )
}

export default AddComment
