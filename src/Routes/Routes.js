import {
    Route,
    Switch
} from 'react-router-dom';
import Start from '../Pages/Start/Start';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

export default function UserRoutes () {
    return (
        <Switch>
            <Route exact={true} path='/'>
                <Start />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/register'>
                <Register />
            </Route>
        </Switch>
    );
}