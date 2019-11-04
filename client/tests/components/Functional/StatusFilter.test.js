import React from 'react';

import { createShallow } from '@material-ui/core/test-utils';

import { Button, Checkbox, FormControlLabel } from '@material-ui/core'

import toJson from 'enzyme-to-json';

import StatusFilter from '../../../src/Components/Functional/FilterControls/StatusFilter'

import MultiPicker from 'material-multi-picker'

import jest from 'jest-mock'


const shallow = createShallow()

describe('<StatusFilter /> test cases', () => {
  describe('', () => {
    test('renders', () => {

      const wrapper = shallow(
        <StatusFilter lang={"En"} toggleStatusFilter={() => { }} isStatusFilterShown={true} filterCriteria={{ ownerNames: [] }} StatusFilterChanged={() => { }} />
      );

      const component = wrapper.dive();


      expect(toJson(component)).toMatchSnapshot();
    });

    test('should raise toggleStatusFilter when close button clicked', () => {

      const toggleStatusFilterFn = jest.fn()


      const wrapper = shallow(
        <StatusFilter lang={"En"} toggleStatusFilter={toggleStatusFilterFn} isStatusFilterShown={true} filterCriteria={{ ownerNames: [] }} StatusFilterChanged={() => { }} />
      );

      const component = wrapper.find(Button).getElement()

      component.props.onClick()

      expect(toggleStatusFilterFn.mock.calls.length).toEqual(1);

    });

    test('should raise StatusFilterChanged when close button clicked', () => {

      const statusFilterChangedFn = jest.fn()

      const wrapper = shallow(
        <StatusFilter lang={"En"} toggleStatusFilter={() => { }} isStatusFilterShown={true} filterCriteria={{ ownerNames: [] }} StatusFilterChanged={statusFilterChangedFn} />
      );

      const component = wrapper.find(FormControlLabel).getElements()[0].props.control;

      component.props["onClick"]()

      expect(statusFilterChangedFn.mock.calls.length).toEqual(1);

    });


  });
});