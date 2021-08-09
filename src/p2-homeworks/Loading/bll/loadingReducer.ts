const initState = {
    isLoading: false
};
type InitialStateType = {
    isLoading: boolean
}
type ActionType = LoadingAT

export type LoadingAT = ReturnType<typeof loadingAC>;

export const loadingReducer = (state: InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "IS-LOADING":
            return {...state, isLoading: action.isLoading}
        default: return state;
    }
};

export const loadingAC = (isLoading: boolean) => ({type: "IS-LOADING", isLoading} as const); // fix any