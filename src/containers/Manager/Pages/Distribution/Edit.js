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
import userpic from "../../../../assets/images/male-avatar.png";
import {
  Calender,
} from "../../../../assets/Icons";
import TopbarUser from "../../../Topbar/TopbarUser";
import { Popover } from "antd";
import { EditWrapper } from "./Edit.styled";
import { useHistory } from "react-router-dom";
import { Senior } from "../../../../service/Senior";
import { useState, useEffect } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Distributions } from "../../../../service/Distributions";
import { Toast } from "../../../../service/Toast";

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
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name of the distribution",
  },
  { id: "city", numeric: false, disablePadding: false, label: "City" },
  { id: "date", numeric: false, disablePadding: false, label: "Date" },
  {
    id: "groupassigned",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Action",
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
        Distribution where status is done
      </Typography>
      {/* 
      <a>{Sort}</a>
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
  const history = useHistory();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [distributions, setDistributions] = useState([]);
  const [renewDate, setRenewDate] = useState("");
  const [distributionId, setDistributionId] = useState("")

  useEffect(() => {
    (async () => {
      // Senior.getSenior()
      getDistribution()
      
    })();
  }, []);

  const getDistribution = () => {
    Distributions.getDistributions()
        .then((res) => {
          setDistributions(res.data.filter((r) => {
            return r.status !== 'To do'
          }));
        })
        .catch((err) => console.log(err));
  }

  const onRenew  = () => {
    console.log(renewDate)
    console.log(distributionId)

    if(renewDate == "" || distributionId == "") {
      return Toast.fire("error", "Please select Date")
    }

    Distributions.renewDistributions({id: distributionId, date: renewDate}).then(res => {
      getDistribution()
    }).catch(err => {
      console.log(err)
    })

  }

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
    <EditWrapper>
      <div className="mb-5">
        <div className=" clearfix mt-0 mb-5">
          <span class=" float-left col-6">
            {" "}
            <h4>DISTRIBUTION </h4>{" "}
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
                {distributions
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((distribution, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={distribution.id}
                        //   onClick={(e)=>{   history.push({
                        //     pathname: `/manager/senior/edit`,
                        //     search: `?fullName=${distribution.fullName}`

                        // })}}
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
                                <span className="rname">{distribution._id}</span>
                                <a className="undertext">
                                  {" "}
                                  Updated {moment(distribution.date).fromNow()}
                                </a>{" "}
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="left" className="align">
                          <span className="rname">{distribution.city}</span>
                          <span className="">
                            {" "}
                            <a className="undertext">
                              on {moment(distribution.updatedAt).format("D.MM.YYYY")}
                            </a>
                          </span>
                        </TableCell>
                        <TableCell align="left">
                          <div className="align">
                            <span className="rname">
                              {moment(distribution.date).format("MMMM D,YYYY")}
                            </span>
                            <a className="undertext  ">
                              {moment(distribution.date).format("h:mm a")}
                            </a>
                          </div>
                        </TableCell>
                        <TableCell align="left">
                          {distribution.status === "Done" ? (
                            <span class="lead">
                              <span class="badge badge-pill badge-success">
                                {distribution.status}
                              </span>
                            </span>
                          ) : (
                            <span class="lead">
                              <span class="badge badge-pill badge-danger">
                                {distribution.status}
                        
                              </span>
                            </span>
                          )}

                          {/* <span className="float-right">
                          <Popover placement="bottomRight">
                            {MoreOutlinedBlack}
                          </Popover>
                        </span> */}
                        </TableCell>
                        <TableCell align="left">
                          {distribution.needMedicalSupply === "true" ? (
                            <span class="lead">
                              <button
                                class="badge badge-pill badge-primary"
                                style={{ borderRadius: "10px 0px 0px 10px" }}
                              >
                                Done
                              </button>
                            </span>
                          ) : (
                            <span class="lead">
                              <a
                                class="badge badge-pill badge-primary "
                                style={{ borderRadius: "10px 0px 0px 10px" }}
                                data-toggle="modal"
                                data-target="#exampleModalCenter"
                                onClick={(e) => {
                                  e.preventDefault()
                                  setDistributionId(distribution._id)
                                }}
                              >
                                <span className="mr-1">{Calender}</span> Renew
                              </a>
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
            count={distributions.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content bradius">
              
            <div class="modal-header">
              <h4 class="modal-title">Choose Date</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
              <div class="modal-body text-center">
                <Calendar onChange={(value) => setRenewDate(value)}/>
              </div>

              <div className="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal" onClick={onRenew}>Renew</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        {/* End of model */}
      </div>
    </EditWrapper>
  );
}
