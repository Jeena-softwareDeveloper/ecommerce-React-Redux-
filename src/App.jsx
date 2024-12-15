

import { RouterProvider } from 'react-router-dom'
import './App.css'
import Index from './routes'
import {Provider} from 'react-redux'
import Store from './redux/Store'

function App() {
  
  
  return (
    <Provider store={Store}>
    <div>
    <Index/>
    </div>
    </Provider>
  )
}

export default App
