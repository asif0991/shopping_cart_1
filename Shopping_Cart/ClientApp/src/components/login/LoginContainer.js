import React, {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {setLoginAction} from '../../store/actions/productsAction';

const Login = () => {

    const [userName,
        setUserName] = useState();
    const [password,
        setPassword] = useState();

    const dispatch = useDispatch();

    const onLogin = () => {
        debugger;
        dispatch(setLoginAction(userName, password))
    }

    const isLoading = useSelector(state => state.products.isLoading)

    if(isLoading){
        return( <div className="loader"></div>)
       
    }
    else{
        return (
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">User Name</Label>
                    <Input
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Username"/>
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password"/>
                </FormGroup>
                <Button onClick={onLogin}>Submit</Button>
            </Form>
        )
    }
    
}

export default Login;
