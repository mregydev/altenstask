import React from 'react';

import { shallow } from 'enzyme';

import toJson from 'enzyme-to-json';

import CarListViewer from '../../../src/Components/Container/CarListViewer/'

import StatusFilter from '../../../src/Components/Functional/FilterControls/StatusFilter'

import OwnerFilter from '../../../src/Components/Functional/FilterControls/OwnersFilter'

import ListHeader from '../../../src/Components/Functional/CarListHeader/'

const state = {
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

describe('<CarListViewer /> test cases', () => {

    test('should render correct', () => {

        const wrapper = shallow(
            <CarListViewer lang={"En"} data={[]} />
        );

        wrapper.setState(state)

        const component = wrapper.dive();

        expect(toJson(component)).toMatchSnapshot();
    })


    test('should apply status filter correct', () => {

        const wrapper = shallow(
            <CarListViewer lang={"En"} data={[]} />
        );

        wrapper.setState(state)

        const component = wrapper.dive();

        let expected = { ...state.filterCriteria, isOnline: true, isOffline: false }

        let statusFilterComponent = component.find(StatusFilter).getElement()

        statusFilterComponent.props.StatusFilterChanged(expected)

        expect(wrapper.state().filterCriteria).toEqual(expected);
    })

    test('should display status filter correct', () => {

        const wrapper = shallow(
            <CarListViewer lang={"En"} data={[]} />
        );

        wrapper.setState(state)

        const component = wrapper.dive();


        let statusFilterComponent = component.find(ListHeader).getElement()

        statusFilterComponent.props.toggleStatusFilter()

        expect(wrapper.state().isStatusFilterShown).toEqual(true);
    })



    test('should display owners filter correct', () => {

        const wrapper = shallow(
            <CarListViewer lang={"En"} data={[]} />
        );

        wrapper.setState(state)

        const component = wrapper.dive();


        let statusFilterComponent = component.find(ListHeader).getElement()

        statusFilterComponent.props.toggleOwnersFilter()

        expect(wrapper.state().isOwnersFilterShown).toEqual(true);
    })


    test('should apply owners names filrer correct', () => {

        const wrapper = shallow(
            <CarListViewer lang={"En"} data={[]} />
        );

        wrapper.setState(state)

        const component = wrapper.dive();

        let expected = { ...state.filterCriteria, ownerNames:['test']}

        let statusFilterComponent = component.find(OwnerFilter).getElement()

        statusFilterComponent.props.OwnersFilterChanged(expected)

        expect(wrapper.state().filterCriteria).toEqual(expected);
    })

})