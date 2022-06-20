import React, {forwardRef, useRef, useState} from 'react';
import 'rsuite/dist/rsuite.min.css';
import {Button, ButtonToolbar, Form, Schema} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../../redux/store";
import {useNavigate} from "react-router-dom";


const {StringType, NumberType} = Schema.Types;

const model = Schema.Model({
    name: StringType().isRequired('This field is required.'),
    email: StringType()
        .isEmail('Please enter a valid email address.')
        .isRequired('This field is required.'),
    age: NumberType('Please enter a valid number.').range(
        18,
        120,
        'Please enter a number from 18 to 120'
    ),
    password: StringType().isRequired('This field is required.'),
    verifyPassword: StringType()
        .addRule((value, data) => {
            console.log(data);

            if (value !== data.password) {
                return false;
            }

            return true;
        }, 'The two passwords do not match')
        .isRequired('This field is required.')
});

const TextField = forwardRef((props, ref) => {
    const {name, label, accepter, ...rest} = props;
    return (
        <Form.Group controlId={`${name}-4`} ref={ref}>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );
});

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formRef = useRef();
    const [formError, setFormError] = useState({});

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: '',
        verifyPassword: ''
    });


    const handleSubmit = () => {
        if (!formRef.current.check()) {
            console.error('Form Error');
            return;
        } else {
            const isAuth = true
            dispatch({type: 'setIsAuth', payload: isAuth})
            console.log(store.getState().loginReducer.isAuth)
            navigate('/admin')


        }

    };

    return (
        <div>
            <Form
                style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center"}}
                ref={formRef}
                onChange={setFormValue}
                onCheck={setFormError}
                formValue={formValue}
                model={model}
            >
                <TextField name="name" label="Username"/>
                <TextField name="email" label="Email"/>
                <TextField name="password" label="Password" type="password" autoComplete="off"/>
                <TextField
                    name="verifyPassword"
                    label="Verify password"
                    type="password"
                    autoComplete="off"
                />

                <ButtonToolbar>
                    <Button appearance="primary" onClick={handleSubmit}>
                        Sign up
                    </Button>


                </ButtonToolbar>
            </Form>
        </div>
    )
}

export default LoginForm;