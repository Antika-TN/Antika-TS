'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { AllProdacts } from '@/components'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home() {
  const [data,setData]=useState<Prodact[]>([])
useEffect(()=>{
  fetchData()
},[])
const fetchData=()=>{
  axios.get('http://127.0.0.1:3000/products/')
  .then((res)=>setData(res.data))
  .catch(err=>console.log(err))
}
console.log('home ',data)
  return (
    <div>

      <AllProdacts data ={data}/>

    </div>

    
  )
}
