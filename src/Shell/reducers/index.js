import { combineReducers } from 'redux';
import addTopMenuItem from './addTopMenuItem';
import requireJs from './requireJs';
import pageTitle from './pageTitle';

export default combineReducers({ addTopMenuItem, requireJs, pageTitle });
