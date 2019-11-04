
import React from 'react'

import { Grid, LinearProgress } from '@material-ui/core'

import CarListHeader from '../../Functional/CarListHeader/'

import CarLisbody from '../../Functional/CarListBody/'

import CarListFooter from '../../Functional/CarListFooter/';

import StatusFilter from '../../Functional/FilterControls/StatusFilter'

import OwnersFilter from '../../Functional/FilterControls/OwnersFilter'

import styles from './styles.module.css'

import Messages from '../../Messages/'

export default class CarListViewer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPageIndex: 0,
      numberOfRowsPerPage: 10,
      isStatusFilterShown: false,
      isOwnersFilterShown: false,
      filterCriteria: {
        isOnline: true,
        isOffline: true,
        ownerNames: []
      }
    }
  }

  setRowsPerPage(value) {
    this.setState({ ...this.state, numberOfRowsPerPage: value })
  }

  setCurrentPage(value) {
    this.setState({ ...this.state, currentPageIndex: value })
  }

  toggleStatusFilter() {
    this.setState({ ...this.state, isStatusFilterShown: !this.state.isStatusFilterShown })
  }


  toggleOwnersFilter() {
    this.setState({ ...this.state, isOwnersFilterShown: !this.state.isOwnersFilterShown })
  }

  applyFilter(item) {

    let isInOwnerNames = !this.state.filterCriteria.ownerNames.length || this.state.filterCriteria.ownerNames.indexOf(item.owner) > -1

    if (!isInOwnerNames) {
      return false
    }

    if (this.state.filterCriteria.isOnline && item.status) {
      return true
    }
    else if (this.state.filterCriteria.isOffline && !item.status) {
      return true
    }
  }

  UpdateFilterCritiera(value) {

    this.setState({ ...this.state, filterCriteria: value })
  }

  GetBodyCompoenet() {

    if(this.props.errorFetch)
    {
      return ()=><div className={styles.noData}>{Messages[this.props.lang]["NetworkError"]}</div>;
    }
    if (!this.props.data.length  && !this.props.isLoading) {
      return ()=><div className={styles.noData}>{Messages[this.props.lang]["NoData"]}</div>;
    }

    return ()=><CarLisbody lang={this.props.lang} data={this.props.data.filter(item => this.applyFilter(item)).slice(this.state.currentPageIndex * this.state.numberOfRowsPerPage, this.state.currentPageIndex * this.state.numberOfRowsPerPage + this.state.numberOfRowsPerPage)} />
  }

  GetLoadingComponent() {
    if (this.props.isLoading) {
      return ()=><React.Fragment><div className={styles.loadingBg}></div><div className={styles.loadingContainer}> <div className={styles.loading}>{Messages[this.props.lang]["loading"]}</div></div></React.Fragment>
    }
    else {
      return ()=><div></div>
    }
  }

  render() {

    let BodyComponent = this.GetBodyCompoenet();

    let LoadingCompoenent = this.GetLoadingComponent();

    return (
      <Grid container className={styles.carsGridArea}>
        <CarListHeader lang={this.props.lang} UpdateFilterCritiera={this.UpdateFilterCritiera.bind(this)} filterCriteria={this.state.filterCriteria} isOwnersFilterShown={this.state.isOwnersFilterShown} data={this.props.data} toggleStatusFilter={this.toggleStatusFilter.bind(this)}
          toggleOwnersFilter={this.toggleOwnersFilter.bind(this)} isStatusFilterShown={this.state.isStatusFilterShown} />
        <Grid container >
          <Grid item xs={12} >
            <LinearProgress />
          </Grid>
        </Grid>

        <LoadingCompoenent />
        <StatusFilter lang={this.props.lang} toggleStatusFilter={this.toggleStatusFilter.bind(this)} isStatusFilterShown={this.state.isStatusFilterShown} filterCriteria={this.state.filterCriteria} StatusFilterChanged={this.UpdateFilterCritiera.bind(this)} />

        <OwnersFilter lang={this.props.lang} items={this.props.data.reduce((acc,item) => acc.indexOf(item.owner)===-1?acc.concat(item.owner):acc,[])} toggleOwnersFilter={this.toggleOwnersFilter.bind(this)} isOwnersFilterShown={this.state.isOwnersFilterShown} filterCriteria={this.state.filterCriteria} OwnersFilterChanged={this.UpdateFilterCritiera.bind(this)} />
<div id="bodyContainer" className={styles.bodyContainer}>
<BodyComponent/>
</div>
        <CarListFooter lang={this.props.lang} dataLength={this.props.data.length} numberOfRowsPerPage={this.state.numberOfRowsPerPage} currentPageIndex={this.state.currentPageIndex} pageChanged={(event, newIndex) => this.setCurrentPage(newIndex)} handleRowPerPageChange={(event) => {
          this.setRowsPerPage(+event.target.value)
          this.setCurrentPage(0)
        }} />

      </Grid>
    )
  }
}
