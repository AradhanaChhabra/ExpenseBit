import React, { useEffect } from 'react'
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { useSelector,useDispatch } from 'react-redux';
import { logs } from '../../Actions/Actions';

const Audit = () => {

  const dispatch = useDispatch();
  const uid = useSelector((state)=>state.userid)
  const logState = useSelector((state)=>state.logs)

  const arr = []
  Object.entries(logState).forEach((log)=>{
    arr.push({...log})
  })


  useEffect(()=>{
    dispatch(logs(uid))
  },[uid,dispatch])

    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


    return (
        <div className="mainAudit">
         <Typography variant="h2" component="h2" style={{marginBottom:"3%", textAlign:'left'}}>
            Audit Log
        </Typography>
            <Paper >
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 1000, minHeight: 400 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Transaction ID</TableCell>
            <TableCell align="right">Payee/Depositer</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row) => (
            <TableRow
              key={row['0']}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row['0']}
              </TableCell>
              <TableCell align="right">{row['1'].data.payee}</TableCell>
              <TableCell align="right">{row['1'].data.description}</TableCell>
              <TableCell align="right">{row['1'].data.date}</TableCell>
              <TableCell align="right">{row['1'].data.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={arr.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
        </div>
    )
}

export default Audit;