
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'


const CakeView = () => {
  const dispatch = useDispatch()
  const numberOfCakes = useSelector((state)=> state.cake.numberOfCakes)
  const [value, setValue] = useState(1)

  return (
    <div>
        <h2>Number of cakes: {numberOfCakes}</h2>
        <button onClick={() => dispatch(ordered(1))}>Order Cakes</button>
        <input type="number" placeholder='Insert ampount to restock' value={value} onChange={(e)=> setValue(parseInt(e.target.value))} />
        <button onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
    </div>
  )
}

export default CakeView
