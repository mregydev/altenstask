import React from 'react'

import { connect } from 'react-redux'


import io from 'socket.io-client'

import MainComp from '../Container/Main/'

import {CHANGE_LANGUAGE,UPDATE_CARS,ERROR_FETCHING} from '../../actions'

const mapStateToProps = (state) => {
    return {
        lang: state ? state.lang : "En",
        cars: state ? state.cars : [],
        isLoading:state?state.isLoading:true,
        errorFetch:state?state.errorFetch:false
    }
}


const mapdispatchToProps = (dispatch) => {
    return {
        changeLanguage: (lang) => dispatch({ type: CHANGE_LANGUAGE, data: { lang } }),
        fetchCars: () => {

            let socket = io("https://altenstask.herokuapp.com")

            socket.on('UpdateVechiles', (data) => {
                dispatch({
                    type: UPDATE_CARS,
                    data
                })
            })

            socket.on("connect_error",()=>{

                dispatch({
                    type: ERROR_FETCHING
                })
            })
            
        }
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(MainComp)
