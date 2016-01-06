export default function createUniqueArrayActionCreator(actionType) {
    return {
        add(items) {
            return {
                type: actionType + '_ADD',
                items
            };
        }
    }
}
