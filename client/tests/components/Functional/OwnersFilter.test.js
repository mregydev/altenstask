import React from 'react';

import { createShallow } from '@material-ui/core/test-utils';

import { Button } from '@material-ui/core'

import toJson from 'enzyme-to-json';

import OwnersFilter from '../../../src/Components/Functional/FilterControls/OwnersFilter'

import MultiPicker from 'material-multi-picker'

import jest from 'jest-mock'


const shallow = createShallow()

describe('<OwnersFilter /> test cases', () => {
  describe('', () => {
    test('renders', () => {

      const wrapper = shallow(
        <OwnersFilter lang={"En"} items={[]} toggleOwnersFilter={() => { }} isOwnersFilterShown={true} filterCriteria={{ ownerNames: [] }} OwnersFilterChanged={() => { }} />
      );

      const component = wrapper.dive();


      expect(toJson(component)).toMatchSnapshot();
    });

    test('should raise toggleOwnersFilter when close button clicked', () => {

      const toggleOwnersFilterFn = jest.fn()


      const wrapper = shallow(
        <OwnersFilter lang={"En"} items={[]} toggleOwnersFilter={toggleOwnersFilterFn} isOwnersFilterShown={true} filterCriteria={{ ownerNames: [] }} OwnersFilterChanged={() => { }} />
      );

      const component = wrapper.find(Button).getElement()

      component.props.onClick()

      expect(toggleOwnersFilterFn.mock.calls.length).toEqual(1);

    });

    test('should raise OwnersFilterChanged when close button clicked', () => {

      const ownersFilterChangedFn = jest.fn()

      const wrapper = shallow(
        <OwnersFilter lang={"En"} items={[]} toggleOwnersFilter={() => { }} isOwnersFilterShown={true} filterCriteria={{ ownerNames: [] }} OwnersFilterChanged={ownersFilterChangedFn} />
      );

      const component = wrapper.find(MultiPicker).getElement();


      component.props["onChange"](['test'])

      expect(ownersFilterChangedFn.mock.calls.length).toEqual(1);

    });


  });
});