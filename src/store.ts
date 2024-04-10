import { UnknownAction, applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import { ThunkAction, thunk } from "redux-thunk";



const composedEnhacer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhacer);

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType> = ThunkAction<ReturnType, RootState, undefined, UnknownAction>;

export type RootState = ReturnType<typeof store.getState>;

export default store;