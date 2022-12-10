import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/models";

interface IAction {
  type: string;
  payload?: any;
  meta?: {
    arg: any;
    requestId: string;
    requestStatus: string;
  };
}

export interface IState {
  users: IUser[] | null;
}

const initialState: IState = {
  users: null,
};

export const getUsersList = createAsyncThunk<IUser[]>(
  "users",
  async (users: any) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url, {
      method: "GET",
      body: JSON.stringify(users),
    });

    const result = await res.json();
    return result;
  }
);

export const usersList = createSlice({
  name: "store",
  initialState,
  reducers: {
    sortUsers: (state, action: IAction) => {
      state.users.sort((a, b) => {
        if (action.payload === "city") return a.name > b.name ? 1 : -1;

        if (action.payload === "company") {
          return a.company.name > b.company.name ? 1 : -1;
        }
      });

      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUsersList.fulfilled, (state, action: IAction) => {
      return {
        ...state,
        users: action.payload,
      };
    });
  },
});

export const { sortUsers } = usersList.actions;

export default usersList.reducer;
