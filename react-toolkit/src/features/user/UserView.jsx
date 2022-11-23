import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
        {user.loading && <h2> Loading...</h2>}
        {!user.loading && user.error ? <div>Error: {user.error}</div> : null}         
        {!user.loading && user.users.length ? (
          <>
          <h2>List of Users: </h2>
          <ul>
            {user.users.map(user =>(
              <li key={user.id} style={{listStyle: "none"}}>{user.name}</li>
            ))}
          </ul>
          </>
        ): null}    
    </div>
  )
}

export default UserView