const initialState = {
    name:'',
    email: '',
    password: '',

}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setV":
            return {...state, name: action.payload.name,email: action.payload.email,password: action.payload.password,}
        default:
            return state;
    }
}

export default loginReducer;