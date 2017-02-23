export const getDoctors = () => {
    return {
        type: 'GET_DOCTORS'
    }
}

export const selectDoctor = (doctor) => {
    return {
        type: 'SELECT_DOCTOR',
        doctor: doctor
    }
}

export const showDoctorslist = () => {
    return {
        type: 'SHOW_DOCTORS_LIST'
    }
}

export const orderByName = () => {
    return {
        type: 'ORDER_BY_NAME'
    }
}

export const orderByNumber = (doctors) => {
    return {
        type: 'ORDER_BY_NUMBER'
    }
}