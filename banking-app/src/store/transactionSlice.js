import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../apis/accountsAndTransaction';

export const getTransactions = createAsyncThunk(
    'transactions/getData',
    async (accountId, { getState,rejectWithValue }) => {
      try {
        const {data} = await API.get(`/transactions/${accountId}`)
        return data
      } catch (err) {
        return rejectWithValue(err.response.data)
      }
    }
  )


const transactionSlice = createSlice({
  name: 'counter',
  initialState:{
    data: [],
    success: false,
    message:"",
    loading:false,

  },
  reducers: {},
  extraReducers: {

    [getTransactions.pending]: (state, action) => {
      state.loading = true;
    },
    [getTransactions.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getTransactions.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    }

    


  }

})

export default transactionSlice;
