import React from 'react';

import MainComp from '../src/Components/HOC/index'

import { Provider  } from 'react-redux'

import store from './store/'


export default function(){
  return (
    <Provider store={store}>
<MainComp/>
    </Provider>
  )
};