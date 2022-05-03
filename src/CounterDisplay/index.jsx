import { addNumber, subNumber } from "../store/modules/counter/actions"
import { Container } from "./styles"
const { useDispatch, useSelector } = require("react-redux")

const CounterDisplay = () => {
    const numbers = useSelector((state) => state.numbers)

    const dispatch = useDispatch()

    const handleAddNumber = () => {
        dispatch(addNumber(numbers + 1))
    }

    const handleSubNumber = () => {
        dispatch(subNumber(numbers - 1))
    }

    return(
        <Container>
            <h1>{numbers}</h1>
            <div>
                <button onClick={handleAddNumber}>+</button>
                <button onClick={handleSubNumber}>-</button>
            </div>
        </Container>
    )
}
export default CounterDisplay