import { API_URL } from '../config';

//Selectors

//Actions
const createActionName = actionName => `app/advert/${actionName}`;


//Action creators

const advertReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
            return statePart;
    };
};

export default advertReducer;