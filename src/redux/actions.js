import {INPUT_TEXT, WALLET_CHECK, WALLETS_DISPLAY} from "./types";

const sleep = ms => new Promise(r => setTimeout(r, ms));

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function walletsShow(text) {
    return async dispatch => {
        const textArray = text.split(/\r?\n/);
        // console.log(textArray)
        const walletsArray = textArray.map((str) => {
            return str.slice(str.indexOf('umee'), str.indexOf('umee') + 43);
        })
        dispatch({
            type: WALLETS_DISPLAY,
            walletsArray
        });
        for (const walletAddress of walletsArray) {
            try {
                const resp = await fetch(`https://umee.api.explorers.guru/api/accounts/${walletAddress}/balance`)
                const respJson = await resp.json();
                const delegated = parseFloat(respJson['delegated']['amount']) / 1_000_000;
                const unbonding = parseFloat(respJson['unbonding']['amount']) / 1_000_000;
                const reward = parseFloat(respJson['reward']['amount']) / 1_000_000;
                const lockedvesting = parseFloat(respJson['lockedvesting']['amount']) / 1_000_000;
                const spendable = parseFloat(respJson['spendable']['amount']) / 1_000_000
                dispatch({
                    type: WALLET_CHECK,
                    data: {
                        walletAddress,
                        delegated,
                        unbonding,
                        reward,
                        lockedvesting,
                        spendable
                    }
                });
            } catch (err) {
                console.log('Error with checking...')
            }
            // console.log(`wallet ${walletAddress} checked`)
            await sleep(1000)
        }
    }
}