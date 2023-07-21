'use client'
import React, { useEffect, useState } from 'react'
import ProdactCard from '../productCard/ProdactCard'
import {Box,Button} from '@mui/material'
import axios from 'axios'

function AllProdacts() {
  const [data,setData]=useState<Prodact[]>([])
  const [catigorie,setCatigorie]=useState('')
  useEffect(()=>{
   fetchData()
  },data)
  const fetchData=()=>{
    axios.get<Prodact[]>('http://127.0.0.1:3000/products/')
    .then((res)=>setData(res.data))
    .catch(err=>console.log(err))
  }
  
console.log('object',data)
  return (

 <Box>
  
     <Box sx={{width: '1198', height: '40', justifyContent: 'center', alignItems: 'center', gap: '20', display: 'inline-flex'}}>
        <Button style={{width: '208', height: '40', paddingLeft: '49', paddingRight: '49', paddingTop: '5', paddingBottom: '5', background: 'var(--white-10, rgba(255, 255, 255, 0.10))', borderRadius: '10', justifyContent: 'center', alignItems: 'center', gap: '8', display: 'inline-flex',color:'white',fontSize:'20px',fontStyle:'normal',fontWeight: '500',lineHeight: 'normal', margin:'5px'}}>Furniture </Button>
        <Button style={{width: '208', height: '40', paddingLeft: '49', paddingRight: '49', paddingTop: '5', paddingBottom: '5', background: 'var(--white-10, rgba(255, 255, 255, 0.10))', borderRadius: '10', justifyContent: 'center', alignItems: 'center', gap: '8', display: 'inline-flex',color:'white',fontSize:'20px',fontStyle:'normal',fontWeight: '500',lineHeight: 'normal', margin:'5px'}}>Decor </Button>
        <Button style={{width: '208', height: '40', paddingLeft: '49', paddingRight: '49', paddingTop: '5', paddingBottom: '5', background: 'var(--white-10, rgba(255, 255, 255, 0.10))', borderRadius: '10', justifyContent: 'center', alignItems: 'center', gap: '8', display: 'inline-flex',color:'white',fontSize:'20px',fontStyle:'normal',fontWeight: '500',lineHeight: 'normal', margin:'5px'}}>Accessories </Button>
        <Button style={{width: '208', height: '40', paddingLeft: '49', paddingRight: '49', paddingTop: '5', paddingBottom: '5', background: 'var(--white-10, rgba(255, 255, 255, 0.10))', borderRadius: '10', justifyContent: 'center', alignItems: 'center', gap: '8', display: 'inline-flex',color:'white',fontSize:'20px',fontStyle:'normal',fontWeight: '500',lineHeight: 'normal', margin:'5px'}}>Vintage </Button>
        <Button style={{width: '208', height: '40', paddingLeft: '49', paddingRight: '49', paddingTop: '5', paddingBottom: '5', background: 'var(--white-10, rgba(255, 255, 255, 0.10))', borderRadius: '10', justifyContent: 'center', alignItems: 'center', gap: '8', display: 'inline-flex',color:'white',fontSize:'20px',fontStyle:'normal',fontWeight: '500',lineHeight: 'normal', margin:'5px'}}>Tools </Button>
     </Box>
     <Box>
      
     {data.map(element=>(
      <ProdactCard ele={element} />
     ))}
      </Box>
 </Box>
    
  )
}

export default AllProdacts
