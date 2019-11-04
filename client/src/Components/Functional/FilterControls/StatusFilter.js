import React from 'react'

import Messages from '../../Messages'


import {CardActions, CardHeader,CardContent,Card,Button,Fade,Checkbox,FormControlLabel,FormGroup,FormControl} from '@material-ui/core'

import styles from './styles.module.css'

export default (props)=>{

  
  return ( 
  
    <Fade  in={props.isStatusFilterShown} mountOnEnter unmountOnExit>

    <React.Fragment>
        <div className={styles.filterBg}/>
  
  <div id="statusFilterDiv" className={styles.filterContainer}>
    <Card className={styles.filterWndw}>
    <CardHeader className={styles.filterHeader} disableTypography={true}    title={Messages[props.lang]["SelectStatusToFilter"]} />
    
      <CardContent>
        
      <FormControl component="fieldset" >
  
  <FormGroup className={styles.filterControls}>
  <FormControlLabel
    control={<Checkbox value="1" id="onlineCheckBox" checked={props.filterCriteria.isOnline}   onClick={()=>{props.StatusFilterChanged({...props.filterCriteria,isOnline:!props.filterCriteria.isOnline})}}  color='primary'/>}
    label={Messages[props.lang]['Online']}
  />
  <FormControlLabel
    control={<Checkbox id="offlineCheckBox"  value="0" checked={props.filterCriteria.isOffline} onClick={()=>{props.StatusFilterChanged({...props.filterCriteria,isOffline:!props.filterCriteria.isOffline})}} color='primary'/>}
    label={Messages[props.lang]['Offline']}
  />

  </FormGroup>

  </FormControl>
  </CardContent>
<CardActions className={styles.closeBtn}>
<Button color='primary' variant="contained"  onClick={()=>{props.toggleStatusFilter()}} >{Messages[props.lang]['close']}</Button>
  </CardActions>
  </Card>
  </div>
  </React.Fragment>
    </Fade>)
}