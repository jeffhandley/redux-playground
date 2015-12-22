export default function createPropertyReducer(actionType, initialState) {
    let undefinedValue;

    if (initialState === undefinedValue) {
        initialState = null;
    }

    return (state = initialState, action) => {
        if (action.type !== actionType) {
            return state;
        }

        return action.value;
    };
}
