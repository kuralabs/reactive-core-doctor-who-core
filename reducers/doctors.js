import sortBy from 'lodash/sortBy'

const doctors = require('../data/doctors.json')

const doctors = (state = { doctors: doctors }, action) => {
    switch(action.type) {
        case 'GET_DOCTORS':
            return Object.assign({}, state, {
                doctors: doctors
            })

        case 'SELECT_DOCTOR':
            return Object.assign({}, state, {
                doctor: action.doctor
            })

        case 'ORDER_BY_NAME':
            return Object.assign({}, state, {
                doctors: sortBy(doctors, 'actor')
            })

        case 'ORDER_BY_NAME':
            return Object.assign({}, state, {
                doctors: sortBy(doctors, 'doctorNumber')
            })

        default:
            return state
    }
}

export default doctors