const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions = require("./features/icecream/icecreamSlice").icecreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

const unsubscribe = store.subscribe(() => {});

// store.dispatch(cakeActions.ordered(1));
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(icecreamActions.ordered(2));
// store.dispatch(icecreamActions.restocked(1));
store.dispatch(fetchUsers());

unsubscribe();
