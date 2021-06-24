import { configureStore } from '@reduxjs/toolkit';
import WelcomeCounterReducer from 'pages/Homepage/components/WelcomeCounterSlice';

export const store = configureStore({
  reducer: {
      welcomeCounter: WelcomeCounterReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch