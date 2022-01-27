import { CHANGE_THEME } from '../actions/types';

export const theme = (toggle = { toggleTheme: 'light' }, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            if (action.payload.toggleTheme) {
                return { toggleTheme: 'dark' };
            }
            return { toggleTheme: 'light' };
        default:
            return toggle;
    }

}