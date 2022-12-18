

import {createStore, compose, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./rootReducer";
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'



const sayHiOnDispatch = (createStore) => {
    return (rootReducer, preloadedState, enhancers) => {
        const store = createStore(rootReducer, preloadedState, enhancers);
        function newDispatch(action) {
            const result = store.dispatch(action);
            console.log("Hi!");
            return result;
        }
        return { ...store, dispatch: newDispatch };
    };
};
const includeMeaningOfLife = (createStore) => {
    return (rootReducer, preloadedState, enhancers) => {
        const store = createStore(rootReducer, preloadedState, enhancers);
        function newGetState() {
            return {
                ...store.getState(),
                meaningOfLife: 42,
            };
        }
        return { ...store, getState: newGetState };
    };
};
const print1 = (storeAPI) => (next) => (action) => {
    console.log("1");
    return next(action);
};
const print2 = (storeAPI) => (next) => (action) => {
    console.log("2");
    return next(action);
};
const print3 = (storeAPI) => (next) => (action) => {
    console.log("3");
    return next(action);
};


const loggerMiddleware = storeAPI => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', storeAPI.getState())
    return result
}

// const composeEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
// const middlewareEnhancer = applyMiddleware(print1, print2, print3, loggerMiddleware)

// const com = composeWithDevTools(applyMiddleware(print1, print2, print3, loggerMiddleware))


const thunkMiddlewareEnharidenc = composeWithDevTools(
    applyMiddleware( thunkMiddleware, logger)
)

const store = createStore(rootReducer, undefined, thunkMiddlewareEnharidenc)

export default store