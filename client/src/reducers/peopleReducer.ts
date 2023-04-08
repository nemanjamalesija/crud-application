import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';
import { people } from '../states/peopleState';
import { personType } from '../types/personType';

const peopleSlice = createSlice({
  name: 'people',
  initialState: people,
  reducers: {
    storeInitialPeople: (state, action: PayloadAction<personType[]>) => {
      const { payload: peopleAPI } = action;

      return { ...state, peopleSTATE: peopleAPI, loading: false };
    },

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
});

export const peopleReducer = peopleSlice.reducer;
export const {
  storeInitialPeople,
  addNewPerson,
  deletePerson,
  editPersonInfo,
  setCurrentPersonID,
  finishEditing,
} = peopleSlice.actions;
