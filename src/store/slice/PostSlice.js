import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: []
  },
  reducers: {
    postAdded(state, action) {
        state.items.push(action.payload)
    },
    listPosts(state, action) {
      state.items = action.payload
    },
    updatePost: (state, action) => {
      const idx = state.findIndex(post => post.id === action.payload.id)
      if (idx != -1) {
        state[idx] = action.payload
      }
    },
    deletePost: (state, action) => {
      state.filter(post => post.id !== action.payload.id)
    }
  }
})

export const { postAdded, listPosts } = postsSlice.actions

export default postsSlice.reducer