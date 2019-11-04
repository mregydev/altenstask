import React from 'react'

import { Grid, Divider, Paper } from '@material-ui/core'

import { FiberManualRecord } from '@material-ui/icons'

import Messages from '../../Messages'

import styles from './styles.module.css'

export default (props) => {
    
    return (
            props.data.map(el => (
            <Grid container wrap="wrap" className={styles.bodyRow}>
                <Grid item xs={12} md={3}>
                    <Paper className={styles.bodyRowItem}  square={true} elevation={0}><div className={styles.itemLabel}>{Messages[props.lang]["Veichle No"]}</div> <div className={styles.itemValue}>{el.vin}</div> </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper className={styles.bodyRowItem}  square={true} elevation={0}><div className={styles.itemLabel}>{Messages[props.lang]["Reg nr"]}</div> <div className={styles.itemValue}>{el.regnr}</div></Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper className={styles.bodyRowItem} square={true} elevation={0}><div className={styles.itemLabel}>{Messages[props.lang]["Owner"]}</div><div className={styles.itemValue}> {el.owner}</div> </Paper>

                </Grid>

                <Grid item xs={12} md={3}>
                    <Paper className={styles.bodyRowItem} square={true} elevation={0}><div className={styles.itemLabel}>{Messages[props.lang]["Status"]}</div><div className={styles.itemValue}>{el.status ? <Paper  elevation={0} square={0}><FiberManualRecord className={styles.online} /><span className={styles.online}> {Messages[props.lang]["Online"]}</span></Paper> : <Paper  elevation={0} square={0}><FiberManualRecord className={styles.offline}></FiberManualRecord><span className={styles.offline}> {Messages[props.lang]["Offline"]}</span></Paper>}</div> </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Divider  className={styles.rowDivider} />
                </Grid>
            </Grid>
            
        ))
    )
}