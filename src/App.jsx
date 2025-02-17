import React from 'react'
import './App.css'
import Tolbar from './container/Tolbar'
import Slidebar from './container/Slidebar'
import Chatbox from './container/Chatbox'
function App() {
  return (
    <div className='app'>
    <div className='app_body'>
    {/* tolbar
      sidebar
      chatbar  */}
<Tolbar/>
<Slidebar/>
<Chatbox/>
    </div>
    </div>
  )
}

export default App
