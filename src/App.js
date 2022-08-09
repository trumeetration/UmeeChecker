import './App.css';
import WalletsTable from "./components/WalletsTable";
import {useDispatch, useSelector} from "react-redux";
import {inputText, walletsShow} from "./redux/actions";

function App() {
    const text = useSelector(state => {
        const {inputReducer} = state;
        return inputReducer.text;
    })
    const dispatch = useDispatch();

    const handleInput = (e) => {
        // console.log('input >', e.target.value)
        dispatch(inputText(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('input >', e.target.value)
        dispatch(walletsShow(text));
    }

    return (
        <div className="p-3 container">
            <div className="p-5 mb-4 bg-light rounded-3 container">
                <h1>Umee checker</h1>
                <form className="mb-4" onSubmit={handleSubmit}>
                    <textarea onChange={handleInput} className="form-control mb-3 wallets-textarea"/>
                    <button className="btn btn-primary" type="submit">Check</button>
                </form>
                <WalletsTable/>
            </div>
        </div>
    );
}

export default App;
