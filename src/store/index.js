import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './slice/counterSlice'
import postsReducer from './slice/PostSlice'
import systemSlice from './slice/systemSlice'
import DashboardSlice from './slice/DashboardSlice'
import securitySlice from './slice/securitySlice'

import LoggerMiddleware from '../middlewares/LoggerMiddleware'
import Logger2Middleware from '../middlewares/Logger2Middleware'

export default configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        system: systemSlice,
        dbData: DashboardSlice,
        security: securitySlice
    }
    // middleware: () => [LoggerMiddleware]
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(LoggerMiddleware, Logger2Middleware)
})