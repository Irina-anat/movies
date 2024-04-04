import { createStore } from "redux";
import rootReducer from "./features/reducers";



const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;