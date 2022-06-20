const setIsAuth = 'setIsAuth';
const setV = 'setV';

const initialState = {
    name:'',
    email: '',
    password: '',
    isAuth:false,

}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case setV:
            return {...state, name: action.payload.name,email: action.payload.email,password: action.payload.password,}
        case setIsAuth:
            return {...state, isAuth:action.payload}
        default:
            return state;
    }
}

export default loginReducer;