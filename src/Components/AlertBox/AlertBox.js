import './AlertBox.css';
import {Alert} from '@mui/material';


export default function AlertBox (props) {
    return (
        <Alert severity={props.severity}>{props.alertText}</Alert>
    )
}