import {useSelector} from "react-redux";
import uniqid from "uniqid";

function WalletsTable(props) {
    const wallets = useSelector(state => {
        // console.log('WalletsTable state >', state)
        const {walletsReducer} = state;
        return walletsReducer.wallets
    })

    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th scope="col" style={{width: "5%"}}>#</th>
                <th scope="col" style={{width: "35%"}}>Wallet</th>
                <th scope="col" style={{width: "10%"}}>Delegated</th>
                <th scope="col" style={{width: "10%"}}>Unbounding</th>
                <th scope="col" style={{width: "10%"}}>Reward</th>
                <th scope="col" style={{width: "10%"}}>LockedVesting</th>
                <th scope="col" style={{width: "10%"}}>Spendable</th>
                <th scope="col" style={{width: "10%"}}>Total</th>
            </tr>
            </thead>
            <tbody>
            {!!wallets.length && wallets.map(res => {
                return (
                    <tr key={uniqid()}>
                        <th scope="row">{res.id}</th>
                        <td>{res.walletAddress}</td>
                        <td>{res.delegated}</td>
                        <td>{res.unbonding}</td>
                        <td>{res.reward}</td>
                        <td>{res.lockedvesting}</td>
                        <td>{res.spendable}</td>
                        <td>{res.total}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default WalletsTable;