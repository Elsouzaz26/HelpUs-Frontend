import React from "react";
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
import { TodoWrapper } from "./Todo.styles";
import { Link } from "react-router-dom";

function createData(name, volonteerleader, date, status) {
  return { name, volonteerleader, date, status };
}

const rows = [
  createData("Groupe id city", "Tom Cruise", "May 26, 2019", "false"),
  createData("Groupe id city", "Tom Cruise", "May 26, 2019", "false"),
  createData("Groupe id city", "Tom Cruise", "May 26, 2019", "false"),
  createData("Groupe id city", "Tom Cruise", "May 26, 2019", "false"),
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
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name of the group",
  },
  {
    id: "volonteer leader",
    numeric: false,
    disablePadding: false,
    label: "Volonteer Leader",
  },
  { id: "date", numeric: false, disablePadding: false, label: "Date" },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
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
      <TableRow style={{ color: "red" }}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            className="headCol"
          >
            <TableSortLabel className="text-left">
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

// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,

//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

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
        All groups where I am assigned and are to do
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
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TodoWrapper>
      <div className="mb-5">
        <div className=" clearfix mt-0 mb-5">
          <span class=" float-left col-6">
            {" "}
            <h4>
              Groups to do for volenteer name{" "}
              {/* <a class="btn badge badge-pill badge-primary">Add new group</a> */}
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
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.name}
                        onClick={() => alert("for link to edit page")}
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
                              <span className="align">
                                <span className="rname">{row.name}</span>
                                <a className="undertext">
                                  {" "}
                                  Updated 1 day ago
                                </a>{" "}
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="left" className="align">
                          <span className="rname">{row.volonteerleader}</span>
                          <span className="">
                            {" "}
                            <a className="undertext">on 24.05.2019</a>
                          </span>
                        </TableCell>
                        <TableCell align="left">
                          <div className="align">
                            <span className="rname">{row.date}</span>
                            <a className="undertext  ">6:30 PM</a>
                          </div>
                        </TableCell>
                        <TableCell align="left">
                          {row.status === "true" ? (
                            <span class="lead">
                              <span class="badge badge-pill badge-success">
                                DONE
                              </span>
                            </span>
                          ) : (
                            <span class="lead">
                              <span class="badge badge-pill badge-danger">
                                TO DO
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
    </TodoWrapper>
  );
}