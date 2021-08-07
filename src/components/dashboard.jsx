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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ViewListIcon from '@material-ui/icons/ViewList';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

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
  return (
    <div>
      <CssBaseline />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List disablePadding className={classes.drawer}>
          <ListItem data-testid="listbutton" button component={Link} to={'/dashboard'}>
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
          <Button color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>


      </main>
    </div>
  );
};

export default Dashboard;