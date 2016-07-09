import axios from 'axios';

const PORT = '3000';
const ROOT_URL = `http://localhost:${PORT}/data/`;

export const FETCH_COMPANY = 'FETCH_COMPANY';

export function fetchCompany(ticker) {
    const url = `${ROOT_URL}${ticker}.json`;
    const request = axios.get(url);

    // at this point, this is actually a promise (not a request)
    // what middleware does is stops the promise, and doesn't pass it along to reducer until promise is resolved
    return {
        type: FETCH_COMPANY,
        payload: request
    }
}
