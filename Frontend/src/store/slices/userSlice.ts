import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface User {
  msg? : string | null,
  user? : {
    _id: string,
        username: string,
        email: string,
        password: string,
        createdAt: Date,
        updatedAt: Date,
        __v: number
  } | null
  token? : string | null
}

const initialState:User = {};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload.user;
      state.msg = action.payload.msg;
      state.token = action.payload.token;
    },
    requestFail: (state, action: PayloadAction<{ msg: string }>) => {
      state.msg = action.payload.msg;
    },
  },
});

export const { addUser, requestFail } = userSlice.actions;
// export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
