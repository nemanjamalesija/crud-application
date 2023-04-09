import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import { people } from '../states/peopleState';
import { personType } from '../types/personType';
import { getAllPeople } from '../helpers/getAllPeople';

const peopleSlice = createSlice({
  name: 'people',
  initialState: people,
  reducers: {
    addNewPerson: (state, action: PayloadAction<personType>) => {
      state.peopleSTATE.push(action.payload);
    },

    deletePerson: (state, action: PayloadAction<string>) => {
      const newPeople = state.peopleSTATE.filter((p) => p._id !== action.payload);

      state.peopleSTATE = newPeople;
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

      state.peopleSTATE = newPeople;
    },

    setCurrentPersonID: (state, action: PayloadAction<string | undefined>) => {
      const { payload: id } = action;

      if (!id) state.currentPersonID = nanoid();

      state.currentPersonID = action.payload;
    },

    finishEditing: (state) => {
      state.currentPersonID = undefined;
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
