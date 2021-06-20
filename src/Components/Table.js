import React, { useContext, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataContext } from '../ContextApi/data'


const StyledTableCell = withStyles((theme) => ({


    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {

    const { data, setData } = useContext(DataContext)
    const classes = useStyles();

    const [toggle, setToggle] = useState(true)
        
    


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Email</StyledTableCell>
                        <StyledTableCell align="center">Phone No.</StyledTableCell>
                        <StyledTableCell align="center">Premium</StyledTableCell>
                        <StyledTableCell align="center">Max/Min bid</StyledTableCell>
                        <StyledTableCell align="center"><button onClick={()=>setToggle(prev=>!prev)} style={{padding:"4px 10px"}}>{toggle ? "Minimum" : "Maximum"}</button></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                       data &&data.map((data, i) => (

                            <StyledTableRow key={data.id}>
                                <StyledTableCell align="center" component="th" scope="row">
                                    <img src={data.avatarUrl} height="35" width="35" style={{ borderRadius: "20px" }} />
                                </StyledTableCell>
                                <StyledTableCell align="center">{data.firstname}</StyledTableCell>
                                <StyledTableCell align="center">{data.email}</StyledTableCell>
                                <StyledTableCell align="center">{data.phone}</StyledTableCell>
                                <StyledTableCell align="center">{data.hasPremium ? "Yes" : "No"}</StyledTableCell>
                                <StyledTableCell align="center">{toggle ? (data.bids.sort((a, b) => b.amount - a.amount)[0] ? data.bids.sort((a, b) => b.amount - a.amount)[0].amount : null) : (data.bids.sort((a, b) => b.amount - a.amount)[0] ? data.bids.sort((a, b) => a.amount - b.amount)[0].amount : null) }</StyledTableCell>
                                <StyledTableCell align="center"></StyledTableCell>
                            </StyledTableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </TableContainer>
    );
}
