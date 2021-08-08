import React, { useState } from "react";
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
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ViewListIcon from '@material-ui/icons/ViewList';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Employeeform from './employeeform';
import Employeeservice from '../services/employee';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
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

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const [action, setAction] = React.useState(null)
  const [openPopUp, setOpenPopUp] = React.useState(false);
  const [notify, setNotify] = React.useState({ isOpen: false, message: '', type: '' })
  const [recordForEdit, setRecordForEdit] = React.useState(null)
  const [employeeId, setEmployeeId] = React.useState(null);
  var [employeeRecords, setEmployeeRecords] = useState();

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const getAllemployees = () => {
    Employeeservice.getEmployee()
        .then((res) => {
            console.log(res.data.data)
            //setRecords(res.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
} 

  const handleList = () => {
    Employeeservice
      .getAllEmployees()
      .then((res) => {
        if (res.data.success === true) {
          setEmployeeRecords((employeeRecords = res.data.EmployeeData));
        } else {
          alert("Something Wrong");  
        }
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (action === 'add') {
        Employeeservice.addEmployee(employee)
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
            password: employee.password
        };

        Employeeservice.update(employeeData)
            .then((res) => {
                setNotify({
                    isOpen: true,
                    message: 'Updated Successfully',
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

const openInPopUp = item => {
    setRecordForEdit(item)
    setOpenPopUp(true)
    setAction('update')
}

  

  return (
    <div>
      <CssBaseline />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List disablePadding className={classes.drawer}>
          <ListItem data-testid="listbutton" button component={Link} to={'/dashboard'}
          type="submit" onClick={handleList} primary="List" >
            <ListItemIcon>
              <ViewListIcon style={{ fill: "#2D3B49" }} />
            </ListItemIcon>
            <ListItemText primary="List" />
          </ListItem>
          <ListItem data-testid="addbutton" button>
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
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Employee Payroll App
          </Typography>
          <Button color="inherit" onClick={handleLogout} type="submit"  >
          Log Out
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>


      </main>
    </div>
  );
};

export default Dashboard;