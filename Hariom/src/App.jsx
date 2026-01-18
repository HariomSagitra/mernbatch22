import  { useState } from 'react'
import { useSelector } from 'react-redux';
import { changeName } from './slice/userSlice';
import { useDispatch } from 'react-redux';

const App = () => {
  const {username} = useSelector((state)=>{
    // console.log(state)
    return state.user
  });
  const dispatch = useDispatch();
  console.log(username)
  const [value, setValue] = useState(username);

  return (
    <div>
      <input type="text"  placeholder='enterNaame' 
      onChange={(e)=>setValue(e.target.value)}
      />
      <button onClick={()=>dispatch(changeName(value))}>change Name</button>
      <p>Current Name : <mark>{username}</mark></p>
    </div>
  )
}

export default App
