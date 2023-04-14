import { configureStore } from '@reduxjs/toolkit'
import Jobslice from '../features/Job/Jobslice'
import filterslice from '../features/filter/filterslice'

export default configureStore({
  reducer: {
    jobs:Jobslice,
    fill:filterslice
  }
})