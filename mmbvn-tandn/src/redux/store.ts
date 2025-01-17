import { configureStore } from '@reduxjs/toolkit'
import videoReducer from './slice/videoSlice'

export const store = configureStore({
  reducer: {
    video: videoReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch