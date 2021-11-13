import React, { useEffect } from 'react'
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
import './audit.css'

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
        <div>
          <h2 className="auditHeading">Audit Log</h2>
          <hr className="auditHr"/>
        </div>
         
            <Paper >
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 1000, minHeight: 400 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell ><div className="tbheading">Transaction ID</div></TableCell>
            <TableCell ><div className="tbheading">Payee/Depositer</div></TableCell>
            <TableCell ><div className="tbheading">Description</div></TableCell>
            <TableCell ><div className="tbheading">Date</div></TableCell>
            <TableCell ><div className="tbheading">Amount</div></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row) => (
            <TableRow
              key={row['0']}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className="tbdata">
                {row['0']}
                </div>
              </TableCell>
              <TableCell align="left"><div className="tbdata">{row['1'].data.payee}</div></TableCell>
              <TableCell align="right"><div className="tbdata">{row['1'].data.description}</div></TableCell>
              <TableCell align="right"><div className="tbdata">{row['1'].data.date}</div></TableCell>
              <TableCell align="right"><div className="tbdata">{row['1'].data.amount}</div></TableCell>
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