import React, { useState } from 'react'
import { makeStyles, Table, TableCell, TableHead, TablePagination, TableRow, TableSortLabel } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    table : {
        overflowX:'auto',
        marginTop: theme.spacing(3),
        '& thead th' : {
            fontWeight: '600',
            color: "white",
            backgroundColor: "#00AEC3",
        },
        '& tbody td': {
            fontWeight: '400',
        },
        '& tbody tr:hover': {
            backgroundColor: '#EEEEEE',
        },
    },
}))