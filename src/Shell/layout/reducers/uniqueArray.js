let _ = {
    isArray: require('lodash/lang/isArray'),
    uniq: require('lodash/array/uniq')
};

const add = (state, items) => {
    if (!items) {
        return state;
    }

    if (!_.isArray(items)) {
        items = [ items ];
    }

    return _.uniq([...state, ...items], (item) => (
        item && item.toLowerCase()
    ));
}

export default function createUniqueArrayReducer(actionType, initialState) {
    let addActionType = actionType + '_ADD';
    let defaultState = initialState || [ ];

    return (state = defaultState, action) => {
        switch (action.type) {
            case addActionType:
                return add(state, action.items);

            default:
                return state;
        }
    };
}
