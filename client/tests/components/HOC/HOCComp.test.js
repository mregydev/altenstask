import configureStore from 'redux-mock-store'

import { CHANGE_LANGUAGE } from '../../../src/actions'

import React from 'react';

import { Select, AppBar } from '@material-ui/core'
import { createShallow } from '@material-ui/core/test-utils';

import MainComp from '../../../src/Components/Container/Main'
import HOCCOMP from '../../../src/Components/HOC'


const shallow = createShallow()

const store = configureStore([])({
    cars: [],
    lang: "En"
});


describe('<MainComp/> test cases', () => {

    test('should dispatch change language event when langugae is changed', () => {

        let wrapper = shallow(
            <HOCCOMP store={store} />
        );

        let langComponent = wrapper.dive().find(MainComp).dive().find(Select).getElement()



        langComponent.props.onChange({ target: { value: 'En' } })

        expect(store.getActions()).toEqual([{ type: CHANGE_LANGUAGE, data: { lang: 'En' } }]);
    })
})



