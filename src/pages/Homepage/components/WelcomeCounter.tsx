import React, { useState } from 'react';
import logoFull from 'assets/logoFull.png'
import { useAppSelector, useAppDispatch } from 'hooks'
import { incrementByAmount } from './WelcomeCounterSlice'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import './WelcomeCounter.scss';
import {Card, Row, Col} from 'react-bootstrap';

const WelcomeCounter = () => {

    const count = useAppSelector(state => state.welcomeCounter.value)
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState('0');

    return (
    <>
        <div className="pathlight-logo">
            <img src={logoFull}/>
        </div>
        <div className="card-body">
            <Row className="justify-content-md-center">
            <Card

                bg="info"
                style={{ width: '18rem' }}
                className="mb-2 text-center"
                >
                <Card.Header>Pathlight Score Counter</Card.Header>
                <Card.Body>
                <Card.Text>
                    {count}
                </Card.Text>
                </Card.Body>
            </Card>   
            </Row>
        </div>

        <div className="increment-input">
            <Row>
                <Col>
                <InputGroup className="mb-2">
            <FormControl
                placeholder="Set Increment Amount"
                aria-label="Set Increment Amount"
                onChange={e => setIncrementAmount(e.target.value)}
            />
        </InputGroup>
        </Col>
        <Col>
        <Button variant="primary" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Submit</Button>
        </Col>
        </Row>
        </div>
    </>
      )
  }

export default WelcomeCounter;