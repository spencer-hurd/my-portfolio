import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes} from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Portfolio from './components/Portfolio'


const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/'>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Route>
      
    
  )
)
export default App