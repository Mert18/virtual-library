
import { QUOTE_LIST_SUCCESS, QUOTE_LIST_FAIL, QUOTE_LIST_REQUEST} from '../constants/quoteConstants';

export const quoteListReducer = (state = {quotes: []}, action) => {
    switch(action.type) {
        case QUOTE_LIST_REQUEST:
            return {loading: true, quotes:[]}
        case QUOTE_LIST_SUCCESS:
            return {loading: false, quotes: action.payload}
        case QUOTE_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;

    }
}