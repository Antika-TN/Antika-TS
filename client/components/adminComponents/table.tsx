
'use client'
import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import Image from 'next/image';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import './style.css'

interface Seller {
    id: number;
    firstName: string;   
    lastName: string;  
    orderCount?: number;
    imageProfile:string;
  }

  interface OrderResponse {
    message: string;
    orders: number;
  }

function DashboardTable() {
    const [sellersname, setSellersname] = useState<Seller[]>([]);
  
    useEffect(() => {
        fetchSellersData();
       
      }, []);
  
    async function fetchSellersData() {
        try {
          const response = await fetch('http://localhost:3000/admin/sellers'); 
          const data = await response.json();
          setSellersname(data.sellers);

          data.sellers.forEach((seller: Seller) => {
            fetchOrdersData(seller.id)
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
      async function fetchOrdersData(id:number) {
        try {
          const response = await axios.get<OrderResponse>(`http://localhost:3000/admin/sellerOrders/${id}`); 
          const data = response.data;
          

          setSellersname((prevSellers) =>
          prevSellers.map((seller) =>
            seller.id === id ? { ...seller, orderCount: data.orders } : seller
          )
        );
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    

  return (
    <TableContainer component={Paper}    sx={{ background: 'linear-gradient(90deg, #984D38, #181E41 60%)'}}>
    <Table className='table'>
   
      <TableHead>
        <TableRow>
          <TableCell id='tablecell'>Company Name</TableCell>
          <TableCell id='tablecell'>Volume</TableCell>
          <TableCell id='tablecell'>24H%</TableCell>
          <TableCell id='tablecell'>7D%</TableCell>
          <TableCell id='tablecell'>Floor Price</TableCell>
          <TableCell id='tablecell'>Order Count</TableCell>
          <TableCell id='tablecell'>Items</TableCell>
        </TableRow>
      </TableHead>

    
      <TableBody>
      {sellersname.map((seller) => (
            <TableRow key={seller.id}>
              <TableCell id='table-white'>{seller.imageProfile && (
              <Image className='profileimage' width="50" height="50" src={seller.imageProfile} alt={`Product Image - ${seller.imageProfile}`} />
            )}  {seller.firstName}</TableCell>
              <TableCell id='table-white'>27,966,76</TableCell>
              <TableCell id='table-red'>+92,96</TableCell>
              <TableCell id="table-green">-16,38</TableCell>
              <TableCell id='table-white'>12,99</TableCell>
              <TableCell id='table-white'>{seller.orderCount}</TableCell>
              <TableCell id='table-white'>10K</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>


  )
}

export default DashboardTable
