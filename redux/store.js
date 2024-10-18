import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './features/wishlistSlice'
import globalDataReducer from './features/globalDataSlice'

export const store = configureStore({
    reducer: {
        wishlist: wishlistReducer,
        globalData: globalDataReducer
    },
})
