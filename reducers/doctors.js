import sortBy from 'lodash/sortBy'

const doctorsData = require('../data/doctors.json')

const doctors = (state = { doctors: doctorsData, showDoctor: false }, action) => {
    switch(action.type) {
        case 'GET_DOCTORS':
            return Object.assign({}, state, {
                doctors: doctorsData
            })

        case 'SELECT_DOCTOR':
            return Object.assign({}, state, {
                doctor: action.doctor,
                showDoctor: true
            })

        case 'SHOW_DOCTORS_LIST':
            return Object.assign({}, state, {
                showDoctor: false
            })

        case 'ORDER_BY_NAME':
            return Object.assign({}, state, {
                doctors: sortBy(doctorsData, 'actor')
            })

        case 'ORDER_BY_NUMBER':
            return Object.assign({}, state, {
                doctors: sortBy(doctorsData, 'doctorNumber')
            })

        default:
            return state
    }
}

export default doctors