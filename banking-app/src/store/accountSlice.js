import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../apis/accountsAndTransaction';

export const getAccounts= createAsyncThunk(
  "accounts/getData",
  async (object, { getState, rejectWithValue }) => {

    try {
      const { data } = await API.get(
        '/accounts'
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
)


const accountSlice = createSlice({
  name: 'counter',
  initialState:{
    data: [],
    success: false,
    message:"",
    loading:false,

  },
  reducers: {},
  extraReducers: {

    [getAccounts.pending]: (state, action) => {
      state.loading = true;
    },
    [getAccounts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getAccounts.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    }

    


  }

})

export default accountSlice;
