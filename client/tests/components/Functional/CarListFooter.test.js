import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CarlistFooter from '../../../src/Components/Functional/CarListFooter'

import jest from 'jest-mock'

describe('<CarListFooter /> test cases', () => {
  describe('', () => {
    test('renders', () => {

      const fn = jest.fn()

      const wrapper = shallow(
        <CarlistFooter lang={'En'} dataLength={10} numberOfRowsPerPage={3} currentPageIndex={1} pageChanged={fn} handleRowPerPageChange={fn} />
      );

      const component = wrapper.dive();


      expect(toJson(component)).toMatchSnapshot();
    });

    test('should raise pagechange when page change', () => {

      const changepageFn = jest.fn()



      const wrapper = shallow(
        <CarlistFooter lang={'En'} dataLength={10} numberOfRowsPerPage={3} currentPageIndex={1} pageChanged={changepageFn} handleRowPerPageChange={() => { }} />
      );


      const component = wrapper.dive();

      let pagerControl = component.children().first().getElement()


      pagerControl.props['onChangePage'].apply()

      expect(changepageFn.mock.calls.length).toEqual(1);

    });


    test('should raise handleRowPerPageChange when page change', () => {

      const handleRowPerPageChangeFn = jest.fn()



      const wrapper = shallow(
        <CarlistFooter lang={'En'} dataLength={10} numberOfRowsPerPage={3} currentPageIndex={1} pageChanged={() => { }} handleRowPerPageChange={handleRowPerPageChangeFn} />
      );


      const component = wrapper.dive();

      let pagerControl = component.children().first().getElement()


      pagerControl.props['onChangeRowsPerPage'].apply()

      expect(handleRowPerPageChangeFn.mock.calls.length).toEqual(1);

    });
  });
});