import React from 'react'
import CarList from './Components/Container/CarsListViewer'

export default class App extends React.Component {
    render() {
        let data = [{ vin: 'YS2R4X20005399401', regnr: 'ABC123', owner: 'this is a test this is a testthis is a testthis is a testthis is a testthis is a test', status: 1 }]

        for (let counter = 0; counter < 10; ++counter) {
            data.push({ vin: 'YS2R4X20005399401', regnr: 'ABC123', owner: 'Kalles Grustransporter AB ', status: counter % 2 == 0 ? 1 : 0 })
        }
        return (
            <div className="App">

                <CarList filterCriteria={this.props.filterCriteria} filterChanged={this.props.filterChanged} isStatusFilterShow={this.props.isStatusFilterShow}  filterExp={this.props.filterExp} toggleStatusFilter={this.props.togglerStatusFilterMenu} data={data}></CarList>
            </div>
        );
    }
}