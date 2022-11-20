import {useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Form} from 'react-bootstrap';

import {addToNewsLetter} from '../../store/utils/thunks';
import {clearNewsLetter} from '../../store/reducers/users';

import {showToast} from './tools';

const NewsLetter = () => {
    const textInput = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const value = textInput.current.value;

        dispatch(addToNewsLetter({email:value}))
        .unwrap()
        .then((res)=>{
            if(res.newsletter === 'added'){
                showToast('SUCCESS', 'Thank you')
                textInput.current.value = '';
            }
            if(res.newsletter === 'failed'){
                showToast('ERROR', 'You are already on the db')
                textInput.current = '';
            }
            dispatch(clearNewsLetter)
        })
    }


  return (
    <div className='newsletter_container'>
        <h1>Join our newsletter</h1>
        <div className="form">
            <Form onSubmit={handleSubmit} className='mt-4'>
            <Form.Group>
                <Form.Control 
                    text='text'
                    placeholder='Ex: youremail@email.com'
                    email="email"
                    ref={textInput}
                />
            </Form.Group>
            <Button className='mt-2' variant='primary'
            type='submit'>
            Add me to the List
            </Button>
            </Form>
        </div>
      
    </div>
  );
}

export default NewsLetter;
