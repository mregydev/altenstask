import reducer from '../../../src/reducers/'

import { CHANGE_LANGUAGE, UPDATE_CARS,ERROR_FETCHING } from '../../../src/actions/'




describe('reducer test cases', () => {

    const state = {
        lang: 'Sw',
        cars: [

        ]
    }


    test('Should hamdle CHANGE_LANGUAGE correclty', () => {

        let newState = reducer(state, {
            type: CHANGE_LANGUAGE,
            data: {
                lang: 'En'
            }
        })

        expect(newState.lang).toEqual('En')
    })


    test('Should handle ERROR_FETCHING correctly', () => {

        let newState = reducer(state, {
            type: ERROR_FETCHING
        })

        expect(newState.errorFetch).toEqual(true)
    })

    test('Should handle UPDATE_CARS correctly', () => {

        let cars = [
            {
                "vin": "YS2R4X20005399401",
                "regnr": "ABC123",
                "owner": "Kalles Grustransporter AB 222 ",
                "status": 0
            }
        ]

        let newState = reducer(state, {
            type: UPDATE_CARS,
            data: cars
        })

        expect(newState.cars[0]).toEqual(cars[0])
    })
})