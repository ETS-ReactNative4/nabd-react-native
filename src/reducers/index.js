import { persistCombineReducers } from "redux-persist";
import SignUpReducer from './SignUpReducer';
import OpenAppReducer from './OpenAppReducer';
import SignInReducer from './SignInReducer';
import FirstAidReducer from './FirstAidReducer';
import RequestHelpReducer from './RequestHelpReducer';
import persistConfig from "../config/ReduxPersist";

export default persistCombineReducers(persistConfig.storeConfig, {
  signup: SignUpReducer,
  signin: SignInReducer,
  openApp: OpenAppReducer,
  firstAid: FirstAidReducer,
  requestHelp: RequestHelpReducer
});