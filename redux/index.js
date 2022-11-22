const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const CAKE_ORDERED = "CAKE_ORDERED";

const CAKES_RESTOCKED = "CAKES_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";

const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake(payload = 1) {
	return {
		type: CAKE_ORDERED,
		payload,
	};
}

function restockCake(payload = 1) {
	return {
		type: CAKES_RESTOCKED,
		payload,
	};
}

function orderIcecream(payload = 1) {
	return {
		type: ICECREAM_ORDERED,
		payload,
	};
}

function restockIcecream(payload = 1) {
	return {
		type: ICECREAM_RESTOCKED,
		payload,
	};
}

const initialCakeState = {
	numberOfCakes: 10,
};

const initialIcecreamState = {
	numberOfIcecreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case CAKE_ORDERED:
			return {
				...state,
				numberOfCakes: state.numberOfCakes - action.payload,
			};
		case CAKES_RESTOCKED:
			return {
				...state,
				numberOfCakes: state.numberOfCakes + action.payload,
			};
		default:
			return state;
	}
};

const icecreamReducer = (state = initialIcecreamState, action) => {
	switch (action.type) {
		case ICECREAM_ORDERED:
			return {
				...state,
				numberOfIcecreams: state.numberOfIcecreams - action.payload,
			};
		case ICECREAM_RESTOCKED:
			return {
				...state,
				numberOfIcecreams: state.numberOfIcecreams + action.payload,
			};
		default:
			return state;
	}
};

const rootReducer = combineReducers({ cake: cakeReducer, icecream: icecreamReducer });

const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store.getState());

const unsubscribe = store.subscribe(() => {});

const actions = bindActionCreators({ orderCake, restockCake, orderIcecream, restockIcecream }, store.dispatch);

actions.orderCake(2);
actions.restockCake(1);
actions.orderIcecream(5);
actions.restockIcecream(10);

unsubscribe();
