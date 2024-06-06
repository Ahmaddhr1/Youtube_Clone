import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Feed = () => {
  return (
    <div className='h-cover flex'>
        <Sidebar />
        <h1 className='text-2xl'>Videos</h1>
    </div>
  )
}

export default Feed