export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current State.item length %s', state.items.length)
			console.log('Updateing state.items length to %s', state.items.length + 1)
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		default:
			return state;
	}
}
