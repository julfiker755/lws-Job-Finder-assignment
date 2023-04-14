import './App.css'
import routes from './Component/routes/routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <RouterProvider router={routes} />
    </div>
  )
}

export default App
