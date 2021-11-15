import React,{ useState,useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PurchaseUserDashboard = () => {
    const {user} = useAuth()
    const [purchase,setPurchase] = useState([]);
    useEffect(()=>{
        const url = `https://shielded-caverns-45156.herokuapp.com/purchase_info?email=${user.email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPurchase(data))
    },[])
   
    return (
        <div>
            <h1>Purchase item {purchase.length}</h1>

            <TableContainer component={Paper}>
      <Table sx={{ }} aria-label="Purchase User Dashboard">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {purchase.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customerName
}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default PurchaseUserDashboard;