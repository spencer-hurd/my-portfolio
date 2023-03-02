import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Routes} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Portfolio from './components/Portfolio'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Route>
  )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}
export default App