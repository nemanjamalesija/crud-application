import { PayloadAction, createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import { people } from '../states/peopleState';
import { personType } from '../types/personType';
import axios from 'axios';
import { apiURL } from '../constants/apiURL';

export const getAllPeople = createAsyncThunk(apiURL, async (_, { rejectWithValue }) => {
  try {
    const response = await axios(apiURL);
    const {
      data: {
        data: { people },
      },
    } = response;

    console.log(response);
    return people;
  } catch (error: any) {
    rejectWithValue(error.message);
  }
});

const peopleSlice = createSlice({
  name: 'people',
  initialState: people,
  reducers: {
    addNewPerson: (state, action: PayloadAction<personType>) => {
      const { payload: newPerson } = action;

      return { ...state, peopleSTATE: [...state.peopleSTATE, newPerson] };
    },

    deletePerson: (state, action: PayloadAction<string>) => {
      const { payload: clickedPersonID } = action;

      const newPeople = state.peopleSTATE.filter((p) => p._id !== clickedPersonID);

      return { ...state, peopleSTATE: newPeople };
    },

    editPersonInfo: (
      state,
      action: PayloadAction<{
        id: string;
        key: string;
        value: string | number;
      }>
    ) => {
      const {
        payload: { id, key, value },
      } = action;

      const newPeople = state.peopleSTATE.map((p) => {
        if (p._id === id) return { ...p, [key]: value };
        else return p;
      });

      return { ...state, peopleSTATE: newPeople };
    },

    setCurrentPersonID: (state, action: PayloadAction<string | undefined>) => {
      const { payload: id } = action;

      if (!id) return { ...state, currentPersonID: nanoid() };

      return { ...state, currentPersonID: id };
    },

    finishEditing: (state) => {
      return { ...state, currentPersonID: undefined };
    },
  },

  extraReducers: (bulider) => {
    bulider.addCase(getAllPeople.pending, (state, action) => {
      state.loading = true;
    });

    bulider.addCase(getAllPeople.fulfilled, (state, action) => {
      state.loading = false;
      state.peopleSTATE = action.payload;
    });
    bulider.addCase(getAllPeople.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const peopleReducer = peopleSlice.reducer;
export const {
  addNewPerson,
  deletePerson,
  editPersonInfo,
  setCurrentPersonID,
  finishEditing,
} = peopleSlice.actions;
