'use client'
import React, { useEffect, useState, createContext } from 'react'
import type { Route } from 'next'
import Link from 'next/link'
import { Container, Box, Typography, Avatar, Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
type Props = {
  ele: Prodact
}
// const dataContext=createContext<GlobalContent>()
const ProdactCard: React.FC<Props> = ({ ele }) => {
  const [love, setLove] = useState(0)
  const [iconColor, setIconColor] = useState('white')
  // if(!product){
  //   return null
  // }
  const handelClickIcon = () => {
    iconColor === 'white' ? setIconColor('red') : setIconColor('white')
    love === 0 ? setLove(1) : setLove(0)
    console.log(iconColor, love)
  }
  return (
    <Box key={ele.id} sx={{
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      width: "284px",
      height: "434px",
      padding: "10px", display: 'flex',
      flexDirection: "column",
      alignItems: "center",
      gap: "16px"
    }}>
      <Link href={'/ProdactDetails'}><Avatar
        src={ele.image}
        alt="image"
        sx={{ width: "246px", height: "277px", borderRadius: "8px", marginTop: "10px" }}
      /></Link>
      <Box sx={{
        display: 'flex',
        justifyContent: "space-between",
        color: "rgba(255, 255, 255, 0.6)",
        width: "246px",

      }}>

        <Typography
          variant='subtitle2'
          sx={{
            fontSize: "18px"
          }}>
          {ele.Category}
        </Typography>
        <Typography>
          Referance
        </Typography>
      </Box>
      <Box sx={{
        display: "flex",
        gap: "10px",
        width: "246px",
        color: "white"

      }}>
        <Typography
          variant='h4'
          sx={{
            fontSize: "18px",
            fontWeight: "bold"
          }}>
          {ele.name}
        </Typography>
        <Typography >
          {ele.price}
        </Typography>
        <Typography>

        </Typography>
      </Box>
      <Box sx={{
        width: "246px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"

      }}>
        <FavoriteIcon
          onClick={
            () => handelClickIcon()
          }
          sx={{ color: iconColor, fontSize: "30px", cursor: "pointer" }} />
        <Button
          // onClick={()=>addToCart(product.id)}
          variant="contained"
          sx={{
            width: "84%",
            color: "white",
            background: 'linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)',
            justifyContent: "center",
            fontWeight: "bold",
            borderRadius: "5px"



          }}
        >Buy Now </Button>
      </Box>
    </Box>
  )
}

export default ProdactCard