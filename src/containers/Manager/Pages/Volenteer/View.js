import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import userpic from "../../../../assets/images/User.png";
import { MoreOutlinedBlack, Sort, Filter } from "../../../../assets/Icons";
import TopbarUser from "../../../Topbar/TopbarUser";
import { Popover } from "antd";
import { ViewWrapper } from "./View.styles"
import { Volenteer } from "../../../../service/Volenteer";
import moment from "moment";
import { useHistory } from "react-router";



function createData(name, city, date, groupassigned) {
  return { name, city, date, groupassigned };
}

const rows = [
  createData("Elsa Maman", "Raanana", "May 26, 2019", "false"),
  createData("Elsa Maman", "Raanana", "May 26, 2019", "false"),
  createData("Elsa Maman", "Raanana", "May 26, 2019", "true"),
  createData("Elsa Maman", "Raanana", "May 26, 2019", "true"),
  createData("Elsa Maman", "Raanana", "May 26, 2019", "true"),
  createData("Elsa Maman", "Raanana", "May 26, 2019", "true"),
  createData("Elsa Maman", "Raanana", "May 26, 2019", "true"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "name", numeric: false, disablePadding: false, label: "Name" },
  { id: "city", numeric: false, disablePadding: false, label: "City" },
  { id: "date", numeric: false, disablePadding: false, label: "Date" },
  {
    id: "groupassigned",
    numeric: true,
    disablePadding: false,
    label: "Assinged to a group?",
  },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow style={{color:"red"}}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            className="headCol"
          >
            <TableSortLabel
             
              className="text-left"
            >
              {headCell.label}
              {/* {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null} */}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    
    <Toolbar>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        All Volenteer
      </Typography>

      {/* <a>{Sort}</a>
      <span className="p-1">Sort</span>

      <a>{Filter}</a>
      <span className="p-1">Filter</span> */}
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [volenteer,setVolenteer] =useState();
  const [users,setUsers]=useState([])
  const history=useHistory()

  useEffect(()=>{

    (async() => {
      Volenteer.getVolenteer().then(res => {
        console.log(res.data.users)
        setUsers(res.data.users)
      })
      .catch(err=> console.log(err))
    })();
      
  },[])


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const gotoAddVolenteer = (event) => {
    history.push('/manager/volenteer/add');
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
 
   
  return (
    <ViewWrapper>
    <div className="mb-5">
      <div className=" clearfix mt-0 mb-5">
        <span class=" float-left col-6">
          {" "}
          <h4>
            Volenteer{" "}
            <a class="btn badge badge-pill badge-primary" onClick={gotoAddVolenteer}>Add new Volenteer</a>
          </h4>{" "}
        </span>
        <span className="text-right">
          {" "}
          <TopbarUser />
        </span>
      </div>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer className="mt-4">
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(users, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((users, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={users.id}
                      onClick={(e)=>{   history.push({
                        pathname: '/manager/volenteer/edit',
                        search: `?fullName=${users.fullName}`
                        
                        
                    })}}
                    >
                      <TableCell component="th" scope="row">
                     
                        <div className="row">
                          <div className="col-2">
                            <span>
                              <a>
                                <img
                                  src={userpic}
                                  height="40"
                                  width="40"
                                  className="rounded-circle border border-5"
                                  alt="user"
                                />
                              </a>
                            </span>
                          </div>
                          <div className="col-10 ">
                            <span
                              className="align"
                            >
                              <span className="rname">{users.fullName}</span>
                              <a className="undertext" > Updated {moment(users.updatedAt).fromNow()}</a>{" "}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell
                        align="left"
                        className="align"
                     
                      >
                        <span className="rname">{users.addressCity}</span>
                        <span className=""> <a  className="undertext">on {moment(users.createdAt).format("D.MM.YYYY")}</a></span>
                       
                      </TableCell>
                      <TableCell align="left">
                        <div
                           className="align"
                        >
                          <span className="rname">{moment(users.createdAt).format("MMMM D,YYYY")}</span>
                          <a  className="undertext  ">{moment(users.createdAt).format("h:mm a")}</a>
                        </div>
                      </TableCell>
                      <TableCell align="center">
                        {users.needMedicalSupply === "true" ? (
                          <span class="lead">
                            <span class="badge badge-pill badge-success">
                              Yes
                            </span>
                          </span>
                        ) : (
                          <span class="lead">
                            <span class="badge badge-pill badge-danger">
                              NO
                            </span>
                          </span>
                        )}

                        {/* <span className="float-right">
                          <Popover placement="bottomRight">
                            {MoreOutlinedBlack}
                          </Popover>
                        </span> */}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[8, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
    </ViewWrapper>
  );
}
