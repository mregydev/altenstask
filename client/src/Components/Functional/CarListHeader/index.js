import React from 'react'

import { Tooltip, Grid, Avatar, Paper, ButtonGroup, Button } from '@material-ui/core'


import { FilterList, ArrowDropDown } from '@material-ui/icons';
import Messages from '../../Messages'

import styles from './styles.module.css'

export default (props)=>{
    
    

    return(
    <React.Fragment>
    <Grid container wrap="wrap" className={styles.headRow} >
    <Grid item xs={12} md={3}>
      <Paper className={styles.headRowItem}  square={true} elevation={0}> {Messages[props.lang]["Veichle No"]} </Paper>
    </Grid>
    <Grid item xs={12} md={3}>
      <Paper className={styles.headRowItem} square={true} elevation={0}> {Messages[props.lang]["Reg nr"]}</Paper>
    </Grid>
    <Grid item xs={12} md={3}>
      <Paper  className={styles.headRowItem} square={true} elevation={0}> {Messages[props.lang]["Owner"]}
    <Tooltip title={Messages[props.lang]["FilterByOwnerName"]}>
          <Avatar id="showOwnersFilterBtn" onClick={props.toggleOwnersFilter} className={styles.filterIcon}> <FilterList /></Avatar>
        </Tooltip>
      </Paper>

    </Grid>
     
    <Grid item xs={12} md={3}>

      <Paper className={styles.headRowItem} square={true} elevation={0}> {Messages[props.lang]["Status"]}
    <Tooltip title={Messages[props.lang]["FilterByStatus"]}>
          <Avatar id="showStatusFilterBtn" className={styles.filterIcon} onClick={props.toggleStatusFilter}> <FilterList /></Avatar>
        </Tooltip>
        
      </Paper>
    </Grid>
    
  </Grid>

  <Grid container className={styles.alonefilterBtns}>

    <Grid item xs={12}>
      <ButtonGroup variant="contained" color="primary" className={styles.filterBtn} aria-label="split button">
        <Button onClick={props.toggleStatusFilter} className={styles.filterBtn} >{Messages[props.lang]["FilterByStatus"]}</Button>
        <Button
          color="primary"
          size="large"
          aria-haspopup="true"
          onClick={props.toggleStatusFilter}
        >
          <ArrowDropDown />
        </Button>
      </ButtonGroup>

    
    </Grid>
    <Grid item xs={12}>
      <ButtonGroup variant="contained" color="primary" className={styles.filterBtn} aria-label="split button">
        <Button onClick={props.toggleOwnersFilter} className={styles.filterBtn} >{Messages[props.lang]["FilterByOwnerName"]}</Button>
        <Button
          color="primary"
          size="large"
          aria-haspopup="true"
          onClick={props.toggleOwnersFilter}
        >
          <ArrowDropDown />
        </Button>
      </ButtonGroup>
    </Grid>
    
  </Grid>
  </React.Fragment>
  )
}