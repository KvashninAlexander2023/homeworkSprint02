const initState = {
    isLoading: false,
}


type loadingACType = ReturnType<typeof loadingAC>
export type initStateType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

// type LoadingActionType = {
//     type: 'CHANGE_LOADING'
//     isLoading: boolean
// }

export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING',
    isLoading,
}as const)
