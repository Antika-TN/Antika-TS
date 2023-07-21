'use client'
import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';


interface Seller {
    id: number;
    firstName: string;   
    lastName: string;  
    
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
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

  return (
    <TableContainer component={Paper}    sx={{ background: 'linear-gradient(90deg, #984D38, #181E41 60%)'}}>
    <Table>
   
      <TableHead>
        <TableRow >
          <TableCell id='table-white'>Company Name</TableCell>
          <TableCell id='table-white'>Volume</TableCell>
          <TableCell id='table-white'>24H%</TableCell>
          <TableCell id='table-white'>7D%</TableCell>
          <TableCell id='table-white'>Floor Price</TableCell>
          <TableCell id='table-white'>Owners</TableCell>
          <TableCell id='table-white'>Items</TableCell>
        </TableRow>
      </TableHead>

    
      <TableBody>
      {sellersname.map((seller) => (
            <TableRow key={seller.id}>
              <TableCell id='table-white'>{seller.firstName}</TableCell>
              <TableCell id='table-white'>27,966,76</TableCell>
              <TableCell id='table-red'>+92,96</TableCell>
              <TableCell id="table-green">-16,38</TableCell>
              <TableCell id='table-white'>12,99</TableCell>
              <TableCell id='table-white'>5,9K</TableCell>
              <TableCell id='table-white'>10K</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>

  )
}

export default DashboardTable
