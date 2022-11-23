import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

function IcecreamView() {
  const numberOfIcecreams = useSelector((state)=> state.icecream.numberOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of ice creams: {numberOfIcecreams}</h2>
        <button onClick={()=> dispatch(ordered(1))}>Order Ice creams</button>
        <button onClick={()=> dispatch(restocked(1))}>Restock Ice creams</button>
    </div>
  )
}

export default IcecreamView