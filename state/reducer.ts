import { ActionType, AddClient, SimulatorActions } from "./actions";
import { Client, SimulatorState } from "./state";

export const simulatorReducer = (state: SimulatorState, action: SimulatorActions) => {
    switch (action.type) {
        case ActionType.AddClient:

            if ( state.clients.length < 1 ){
                return {
                    ...state,
                    clients: [action.payload, ...state.clients]
                };
            }

            return state

        default:
            return state;
    }
};

// helper functions to simplify the caller
export const addClient = (Client: Client): AddClient => ({
    type: ActionType.AddClient,
    payload: Client,
});
