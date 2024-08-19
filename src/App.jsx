import { Provider } from 'react-redux'
import './App.css'
import TermsPage from './components/TermsPage'
import { createBrowserRouter, createRoutesFromElements , RouterProvider , Route } from 'react-router-dom'
import {store} from './Redux/Store'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={ <TermsPage/>} />
    </>
  )
)



function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App
