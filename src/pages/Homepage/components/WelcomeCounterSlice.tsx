import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'


interface CounterState {
    value: number
  }
  
  const initialState: CounterState = {
    value: 0
  }

export const WelcomeCounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = WelcomeCounterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.welcomeCounter.value

export default WelcomeCounterSlice.reducer