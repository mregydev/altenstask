import React from 'react'

import {TablePagination,Grid} from '@material-ui/core'


import Messages from '../../Messages'

import styles from './styles.module.css'

export default (props)=>{
    return (
      <Grid container wrap="wrap" className={styles.gridfooter}>
        <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        colSpan={3}
        count={props.dataLength}
        rowsPerPage={props.numberOfRowsPerPage}
        page={props.currentPageIndex}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' },
          native: true,
        }}
        labelRowsPerPage={Messages[props.lang]['RowPerPage']}
        onChangePage={props.pageChanged}
        onChangeRowsPerPage={props.handleRowPerPageChange}
      />
</Grid>
    )
}