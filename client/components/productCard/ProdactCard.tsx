// 'use client'
// import React, { useEffect, useState } from 'react'
// import { Container,Box, Typography, Avatar, Button } from '@mui/material'
// import FavoriteIcon from '@mui/icons-material/Favorite';
// const ProdactCard = () => {
// // if(!product){
// //   return null
// // }

//   return (
//     <Box sx={{ backgroundColor:"rgba(255, 255, 255, 0.1)",
//     width:"284px",
//     height:"434px",
//     padding:"10px",display:'flex',
//     flexDirection:"column",
//     alignItems:"center",
//     gap:"16px"
//     }}>
//       <Avatar 
//       src='data:image/jpeg;base64,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'
//       alt="image"
//       sx={{width:"246px",height:"277px",borderRadius:"8px", marginTop:"10px"}}
//       />
//       <Box sx={{
//         display:'flex',
//         justifyContent:"space-between",
//         color:"rgba(255, 255, 255, 0.6)",
//         width:"246px",
        
//       }}>
                
//           <Typography
//           variant='subtitle2'
//           sx={{
//             fontSize:"18px"
//           }}>
//           catigory
//           </Typography> 
//           <Typography>
//             Referance
//           </Typography>
//       </Box>
//       <Box sx={{
//         display:"flex",
//         gap:"10px",
//         width:"246px",
//         color:"white"
        
//       }}>
//         <Typography 
//         variant='h4' 
//         sx={{
//           fontSize:"18px",
//           fontWeight:"bold"
//         }}>
//          Name
//         </Typography>
//         <Typography > 
//              200£
//         </Typography>
//         <Typography>

//         </Typography>
//       </Box>
//       <Box sx={{
//         width:"246px",
//         display:"flex",
//         justifyContent:"space-between",
//         alignItems:"center"
        
//       }}>
//             <FavoriteIcon
//             //  onClick={
//             //   ()=>addToCollection({content:product.productname,image:product.image})
//             // } 
//             sx={{color:"red",fontSize:"30px" ,cursor:"pointer"}}/>
//             <Button 
//             // onClick={()=>addToCart(product.id)}
//             variant="contained"
//             sx={{
//               width:"84%",
//               color:"white",
//               background: 'linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)',
//               justifyContent:"center",
//               fontWeight:"bold",
//               borderRadius:"5px"



//             }}
//             >Buy Now </Button>
//       </Box>
//     </Box>
//   )
// }

// export default ProdactCard