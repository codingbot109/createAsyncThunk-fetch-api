import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './features/userSlice';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const { loading , users , error } = useSelector((state)=>state.user) // Destructure the state properly

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])

  // Check loading state and error state properly within the JSX
  if(loading) return <div>loading...</div>; // Return loading indicator if still loading
  if(error) return <div>{error}</div>; // Return error message if error occurred

  return (
     <table className='table table-bordered'>
       <thead>
         <tr>
           <th>ID</th>
           <th>Avatar URL</th>
           <th>URL</th>
           <th>HTML_URL</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         {users.map((user)=>(
           <tr key={user.id}>
             <td>{user.id}</td>
             <td>{user.avatar_url}</td>
             <td>{user.url}</td>
             <td>{user.html_url}</td>
             <td>
              <button className='btn btn-primary'>Edit</button> 
              <button className='btn btn-danger ms-2'>Delete</button>
             </td>
           </tr>
         ))}
       </tbody>
     </table>
  );
}

export default App;
