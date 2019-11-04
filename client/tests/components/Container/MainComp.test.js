import React from 'react';

import { shallow } from 'enzyme';

import toJson from 'enzyme-to-json';

import MainComp from '../../../src/Components/Container/Main/'

import jest from 'jest-mock'

describe('<MainComp /> test cases', () => {

    test('should render correct', () => {

        const wrapper = shallow(
            <MainComp cars={[]} lang="En" fetchCars={() => { }} />
        );

        const component = wrapper;

        expect(toJson(component)).toMatchSnapshot();
    })


    test('should fetch cars', () => {

        const fetchCarsFn = jest.fn()

        const wrapper = shallow(
            <MainComp cars={[]} lang="En" fetchCars={fetchCarsFn} />
        );

        expect(fetchCarsFn.mock.calls.length).toEqual(1);
    })

})