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
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
import ViewListIcon from '@material-ui/icons/ViewList';
import EditIcon from '@material-ui/icons/Edit';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { Paper, TableBody, TableCell, TableRow } from '@material-ui/core'


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

export const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} onClose={() => setOpen(false)}>
        <Toolbar />
        <List disablePadding className={classes.drawer}>
          <ListItem data-testid="listbutton" button component={Link} to={'/dashboard'}
            type="submit" primary="List" >
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
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Employee Payroll App
          </Typography>
          <Button color="inherit">Log Out</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Paper elevation={3} className={classes.pageContent}>
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
                    <TableCell data-testid="tablecell">{item.password}</TableCell>
                    <TableCell data-testid="tablecell">
                    
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
  );
};

export default Dashboard;
