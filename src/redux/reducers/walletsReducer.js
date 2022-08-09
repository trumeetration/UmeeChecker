import {WALLET_CHECK, WALLETS_DISPLAY} from "../types";


const initialState = {
    wallets: []
}

export const walletsReducer = (state = initialState, action) => {
    // console.log('walletsReducer >', action);
    // console.log('walletCheck state >', state)

    switch (action.type) {

        case WALLETS_DISPLAY:
            // console.log('action >>>', action)
            const wallets = action.walletsArray.map((address, index) => {
                return {
                    id: index + 1,
                    walletAddress: address,
                    delegated: '',
                    unbonding: '',
                    reward: '',
                    lockedvesting: '',
                    spendable: '',
                    total: 'Not checked'
                }
            })
            return {
                ...state,
                wallets
            }

        case WALLET_CHECK:
            return (() => {
                const {data} = action;
                const {wallets} = state;
                const itemIndex = wallets.findIndex(res => res.walletAddress === data.walletAddress);
                // console.log(data)
                const nextWallets = [
                    ...wallets.slice(0,itemIndex),
                    {
                        id: itemIndex + 1,
                        walletAddress: data.walletAddress,
                        delegated: data.delegated,
                        unbonding: data.unbonding,
                        reward: data.reward,
                        lockedvesting: data.lockedvesting,
                        spendable: data.spendable,
                        total: data.delegated + data.unbonding + data.reward + data.lockedvesting + data.spendable
                    },
                    ...wallets.slice(itemIndex + 1)
                ]


                return {
                    ...state,
                    wallets: nextWallets
                }
            })();

        default:
            return state;
    }
}