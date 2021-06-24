import React, { useState } from 'react';
import logoFull from 'assets/logoFull.png'
import { useAppSelector, useAppDispatch } from 'hooks'
import { incrementByAmount } from './WelcomeCounterSlice'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';

const WelcomeCounter = () => {

    const count = useAppSelector(state => state.welcomeCounter.value)
    const dispatch = useAppDispatch()
    const [incrementAmount, setIncrementAmount] = useState('0');

    return (
      <>
      <img src={logoFull} alt="Logo" />
      <h1>Hello, Homepage!</h1>

    <InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
            placeholder="Set Increment Amount"
            aria-label="Set Increment Amount"
            onChange={e => setIncrementAmount(e.target.value)}
        />
    </InputGroup>
    <Button variant="primary" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Submit</Button>
    </>
      )
  }

export default WelcomeCounter;