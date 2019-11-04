import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CarListBody from '../../../src/Components/Functional/CarListBody/'

describe('<CarListBody /> test cases', () => {

  test('renders', () => {


    const wrapper = shallow(
      <CarListBody lang="En" data={[{
        "vin": "YS2R4X20005399401",
        "regnr": "ABC123",
        "owner": "Kalles Grustransporter AB ",
        "status": 1
      }]} />
    );
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });

});