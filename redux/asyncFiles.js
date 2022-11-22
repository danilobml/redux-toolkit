const axios = require("axios");
const redux = require("redux");
const createStore = redux.createStore;
const thunkMiddleware = require("redux-thunk").default;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const userInitialState = {
	loading: false,
	users: [],
	error: "",
};

function fetchUsersRequest() {
	return {
		type: FETCH_USERS_REQUESTED,
	};
}

function fetchUsersSucess(users) {
	return {
		type: FETCH_USERS_SUCCEEDED,
		payload: users,
	};
}

function fetchUsersFailure(error) {
	return {
		type: FETCH_USERS_FAILED,
		payload: error,
	};
}

const reducer = (state = userInitialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case FETCH_USERS_SUCCEEDED:
			return {
				loading: false,
				users: action.payload,
				error: "",
			};
		case FETCH_USERS_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

const unsubscribe = store.subscribe(() => {});

const fetchUsers = () => {
	return function (dispatch) {
		dispatch(fetchUsersRequest());
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				const users = response.data.map((user) => user.id);
				dispatch(fetchUsersSucess(users));
			})
			.catch((error) => dispatch(fetchUsersFailure(error.message)));
	};
};

store.dispatch(fetchUsers());

unsubscribe();
