import React, { useState, useEffect } from "react";
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link, useHistory } from 'react-router-dom';
import ViewListIcon from '@material-ui/icons/ViewList';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import useTable from './controls/useTables';
import EmployeeForm from "./employeeForm";
import PopUp from "./popup";
import ConfirmDialog from "./controls/confirmDialog";
import Notification from "./controls/notifications";
import Service from '../services/employee';
const service = new Service();

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 150
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },

  title: {
    marginRight: "auto"
  },
  drawer: {
    width: 150
  },
  content: {
    padding: theme.spacing(3)
  }
}));

const headCells = [
  { id: "firstName", label: "First Name" },
  { id: "lastName", label: "Last Name" },
  { id: "email", label: "Email" },
  { id: "department", label: "Department" },
  { id: "salary", label: "Salary" },
  { id: "actions", label: "Actions", disableSorting: true }
]

export const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [action, setAction] = React.useState(null)
  const [employeeId, setEmployeeId] = React.useState(null);
  const history = useHistory();
  const [openPopUp, setOpenPopUp] = React.useState(false);
  const [recordForEdit, setRecordForEdit] = React.useState(null)
  const [records, setRecords] = React.useState([])
  const [notify, setNotify] = React.useState({ isOpen: false, message: '', type: '' })
  const [confirmDialog, setConfirmDialog] = React.useState({ isOpen: false, title: '', subTitle: '' })
  
  const handleLogOut = () => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
    })
    localStorage.removeItem('token');
    history.push('/Login');
}
  useEffect(() => {
    getAllemployees()
  }, [setRecords])

  const getAllemployees = () => {
    service.getAllEmployees()
      .then((res) => {
        setRecords(res.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const addOrEdit = (employee, resetForm) => {
    console.log(employee);
    if (action === 'add') {
      console.log("addition");
        service.addEmployee(employee)

            .then((res) => {
                setNotify({
                    isOpen: true,
                    message: 'Employee Added Successfully',
                    type: 'success'
                })
                getAllemployees();
            }).catch((error) => {
                setNotify({
                    isOpen: true,
                    message: error.message,
                    type: 'error'
                })
            })
        resetForm()
        setOpenPopUp(false)
    }
    else {
        const employeeData = {
            _id: employeeId,
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            department: employee.department,
            salary: employee.salary,
        };
        console.log("Data"+employeeData);
        service.updateEmployee(employeeData)
            .then((res) => {
                setNotify({
                    isOpen: true,
                    message: 'Employee Data Updated Successfully',
                    type: 'success'
                })
                getAllemployees()
            }).catch((error) => {
                setNotify({
                    isOpen: true,
                    message: error.message,
                    type: 'error'
                })
            })
    }
    resetForm()
    setOpenPopUp(false)
    setRecordForEdit(null);
    setAction('add');
}

const openInPopUp = userData => {
    setRecordForEdit(userData)
    setOpenPopUp(true)
    setAction('update')
    setEmployeeId(userData._id)
}
  const deleteEmployee = (_id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
    })
    service.deleteEmployee(_id)
      .then((res) => {
        setNotify({
          isOpen: true,
          message: 'Employee Deleted Successfully',
          type: 'error'
        })
        getAllemployees()
      }).catch((error) => {
        setNotify({
          isOpen: true,
          message: error.message,
          type: 'error'
        })
      })
  }

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(records, headCells)

  return (
    <>
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <Drawer data-testid="drawer" variant="permanent" open={open} onClose={() => setOpen(false)}>
            <Toolbar />
            <List disablePadding className={classes.drawer}>
            <ListItem data-testid="listbutton" button component={Link} to={'/dashboard'}>
            <ListItemIcon>
                <ViewListIcon style={{fill: "#2D3B49"}} />
            </ListItemIcon>
            <ListItemText type="submit" onClick={() => { setOpenPopUp(true); setRecordForEdit(null); setAction('add') }} primary="List" />
        </ListItem>
              <ListItem data-testid="addbutton" button onClick={() => { setOpenPopUp(true); setRecordForEdit(null); setAction('add') }}>
                <ListItemIcon>
                  <PersonAddOutlinedIcon style={{ fill: "#2D3B49" }} />
                </ListItemIcon>
                <ListItemText primary="Add" />
              </ListItem>
              <ListItem data-testid="editbutton" button>
                <ListItemIcon>
                  <EditIcon style={{ fill: "#2D3B49" }} />
                </ListItemIcon>
                <ListItemText primary="Edit" />
              </ListItem>
              <ListItem data-testid="deletebutton" button>
                <ListItemIcon>
                  <DeleteIcon style={{ fill: "#B22222" }} />
                </ListItemIcon>
                <ListItemText primary="Delete" />
              </ListItem>

            </List>
          </Drawer>
          <AppBar data-testid="appbar" position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>
              <Typography data-testid="typography" variant="h6" className={classes.title}>
                Employee Payroll App
              </Typography>
              <Button data-testid="logoutbutton" color="inherit" 
              onClick={() =>
                setConfirmDialog({
                  isOpen: true,
                  title: 'Are you sure to log out?',
                  onConfirm: { handleLogOut }
                })
              }
              > Log Out </Button>
            </Toolbar>
          </AppBar>
          <main className={classes.content}>
          <Toolbar></Toolbar>
            <Paper elevation={5} className={classes.pageContent}>
              <TblContainer>
                <TblHead />
                <TableBody data-testid="tablebody">
                  {
                    recordsAfterPagingAndSorting().map(item => (
                      <TableRow data-testid="tablerow" key={item._id}>
                        <TableCell data-testid="tablecell" >{item.firstName}</TableCell>
                        <TableCell data-testid="tablecell">{item.lastName}</TableCell>
                        <TableCell data-testid="tablecell">{item.email}</TableCell>
                        <TableCell data-testid="tablecell">{item.department}</TableCell>
                        <TableCell data-testid="tablecell">{item.salary}</TableCell>
                        <TableCell data-testid="tablecell">
                          <IconButton data-testid="editbutton"
                            edge="start"
                            size="small"
                            onClick={() => openInPopUp(item)}
                          >
                            <EditIcon style={{ fill: "#2D3B49" }} />
                          </IconButton>
                          <IconButton data-testid="deletebutton"
                            size="small"
                            onClick={() =>
                              setConfirmDialog({
                                isOpen: true,
                                title: 'Are you sure to delete?',
                                subTitle: "You Can't undo this operation",
                                onConfirm: () => { deleteEmployee(item._id) }
                              })
                            }
                          >
                            <DeleteIcon style={{ fill: "#C70039" }} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </TblContainer>
              <TblPagination />
            </Paper>
            <div className={classes.appBarSpacer} />
          </main>
        </div>
        <PopUp
          data-testid="popup"
          title="Employee Form"
          openPopUp={openPopUp}
          setOpenPopUp={setOpenPopUp}
        ><EmployeeForm
            addOrEdit={addOrEdit}
            recordForEdit={recordForEdit} />
        </PopUp>
        <Notification
          data-testid="notification"
          notify={notify}
          setNotify={setNotify}
        />
        <ConfirmDialog
          confirmDialog={confirmDialog}
          setConfirmDialog={setConfirmDialog}
        />
      </Router>
    </>

  );
};

export default Dashboard;