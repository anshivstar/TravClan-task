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
import { useHistory } from 'react-router-dom';
import Pagination from './Pagination';

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
    const [currentPage,setCurrentPage] = useState(1)
    const [postPerPage,setPostPerPage] = useState(5)
    const [toggle, setToggle] = useState(true)

    const history = useHistory()

    const Pushed = (id) =>{
        history.push(`/detail/${id}`)
    }

    const dat = data.sort((a, b) => a.bids[0] ? (toggle ? (  b.bids.sort((a, b) => b.amount - a.amount)[0].amount - a.bids.sort((a, b) => b.amount - a.amount)[0].amount) : (a.bids.sort((a, b) => a.amount - b.amount)[0].amount - b.bids.sort((a, b) => a.amount - b.amount)[0].amount)) : null)
    

    const lastPostIndex = currentPage * postPerPage
    const firstPostindex = lastPostIndex - postPerPage
    const currentPosts = dat.slice(firstPostindex,lastPostIndex)
    

    const change = (pageNumber) => setCurrentPage(pageNumber)
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
                        <StyledTableCell align="center"><button onClick={() => setToggle(prev => !prev)} style={{ padding: "4px 10px" }}>{toggle ? "Minimum" : "Maximum"}</button></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        currentPosts &&
                        currentPosts.map((data, i) => (

                                <StyledTableRow key={data.id} onClick={()=>Pushed(data.id)} style={{cursor:"pointer"}}>
                                    <StyledTableCell align="center" component="th" scope="row">
                                        <img src={data.avatarUrl} height="35" width="35" style={{ borderRadius: "20px" }} alt='avatar'/>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{data.firstname}</StyledTableCell>
                                    <StyledTableCell align="center">{data.email}</StyledTableCell>
                                    <StyledTableCell align="center">{data.phone}</StyledTableCell>
                                    <StyledTableCell align="center">{data.hasPremium ? "Yes" : "No"}</StyledTableCell>
                                    <StyledTableCell align="center">{toggle ? (data.bids.sort((a, b) => b.amount - a.amount)[0] ? data.bids.sort((a, b) => b.amount - a.amount)[0].amount : null) : (data.bids.sort((a, b) => b.amount - a.amount)[0] ? data.bids.sort((a, b) => a.amount - b.amount)[0].amount : null)}</StyledTableCell>
                                    <StyledTableCell align="center"></StyledTableCell>
                                </StyledTableRow>
                            ))
                    }

                </TableBody>
            </Table>
            <Pagination change={change} postsPerPage={postPerPage} totalPosts={Object.keys(data).length} />
        </TableContainer>
    );
}
