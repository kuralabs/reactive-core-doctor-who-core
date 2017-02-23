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