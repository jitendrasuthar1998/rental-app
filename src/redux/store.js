import {configureStore} from '@reduxjs/toolkit'

import favoriteReducer from './favoriteSlice'


export default configureStore({
    reducer:{
        favorites: favoriteReducer
    }
})