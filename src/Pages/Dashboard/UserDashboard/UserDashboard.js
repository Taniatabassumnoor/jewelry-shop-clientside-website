import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const UserDashboard = () => {
    const {user} = useAuth();
    const [userDash,setUserDash] = useState([]);
    useEffect(()=>{
        const url = `https://shielded-caverns-45156.herokuapp.com/purchase_info?email=${user.email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUserDash(data))
    },[])
    return (
        <div>
            <TableContainer component={Paper}>
      <Table sx={{ }} aria-label="User Dashboard">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userDash.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customerName
}
              </TableCell>
              
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.payment ? 'Paid' :
              <Link to={`/dashboard/pay/${row._id}`}><Button variant="contained">Pay</Button> </Link>
              
            }</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default UserDashboard;