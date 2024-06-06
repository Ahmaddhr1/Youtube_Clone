import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import {fetchFromAPI} from '../utils/fetchfromapi'
import { useEffect, useState } from 'react'
import Videos from './Videos'

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([])
    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=> {
            setVideos(data.items);
        })
    },[selectedCategory])
  return (
    <div className='h-cover flex'>
        <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        <h1 className='text-2xl font-semibold'>{selectedCategory} <span  style={{
        background: `linear-gradient(to bottom right, #FFA500, #FF69B4, #00008B)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'}}>Videos</span></h1>
        <Videos videos={videos} />
    </div>
  )
}

export default Feed