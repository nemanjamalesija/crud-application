// import React, { useContext, useReducer } from 'react';
// import { initialState } from './constants/initialState';
// import { contextType } from './types/contextType';
// import { peopleReducer } from './reducers/peopleReducer';
// import { peopleActions } from './actions/peopleActions';

// const AppContext = React.createContext<contextType>({
//   state: initialState,
//   dispatch: (action: peopleActions) => {},
// });

// const AppProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(peopleReducer, initialState);

//   return (
//     <AppContext.Provider
//       value={{
//         state: { ...state },
//         dispatch,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider };
