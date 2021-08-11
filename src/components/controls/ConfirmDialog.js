import React from 'react'
import { Dialog, DialogActions, DialogContent, IconButton, Typography } from '@material-ui/core';
import { DialogTitle, makeStyles } from '@material-ui/core';
import Controls from './controls'

const useStyles = makeStyles(theme => ({
    dialog:{
        position:'absolute',
        top:theme.spacing(5)
    },
    dialogContent:{
        textAlign:'center'
    },
    dialogTitle:{
        textAlign:'center'
    },
    dialogAction:{
        justifyContent:'center'
    },
    titleIcon: {
        backgroundColor: 'white',
        color: theme.palette.secondary.main,
        '& .MuiSvgIcon-root': {
            fontSize: '5rem',
        }
    }
}))

export default function ConfirmDialog(props) {
    
    const { confirmDialog, setConfirmDialog } = props
    const classes = useStyles();

    return(
        <Dialog open={confirmDialog.isOpen} classes={{paper: classes.dialog}}>
            <DialogTitle className={classes.dialogTitle}>
               
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {confirmDialog.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.Button 
                    text="No"
                    color="primary"  
                    onClick={() => setConfirmDialog({...confirmDialog, isOpen:false})}  
                />
                <Controls.Button
                    text="Yes"
                    color="#C062E3"    
                    onClick = {confirmDialog.onConfirm}
                />
            </DialogActions>
        </Dialog>
    )
}