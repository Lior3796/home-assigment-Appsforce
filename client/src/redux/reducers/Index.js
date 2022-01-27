import { combineReducers } from 'redux';
import { users } from './users';
import { theme } from './theme';

export default combineReducers({
    users,
    theme
});
