import { createSlice } from '@reduxjs/toolkit'

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    options: {}
  },
  reducers: {
    putDashboardData(state, action) {
        state.options = action.payload
        console.log('[putDashboardData] = ', action.payload)
      }
  }
})

export const { putDashboardData } = dashboardSlice.actions

export default dashboardSlice.reducer

// export const queryDashboard = (get) => async (dispatch) => {
//     // const { get } = useHttp()
//     const res = await get('/api/v1/auth/dbd/sales')
//     dispatch(putDashboardData(res))
//   }
