
import {Container} from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

const MainLayouts = (props) =>{

    return(
        <Container className="mt-5 mb-5">
            {props.children}
        <ToastContainer />
        </Container>
    )
}

export default MainLayouts;
