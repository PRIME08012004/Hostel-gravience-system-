import { Provider } from 'react-redux'
import './App.css'
import TermsPage from './components/TermsPage'
import { createBrowserRouter, createRoutesFromElements , RouterProvider , Route } from 'react-router-dom'
import {store} from './Redux/Store'
import Login_signIn from './components/Login_signIn'
import Login from './components/Login'
import SignIn from './components/SignIn'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={ <TermsPage/>} />
      <Route path="/Login_signIn" element={<Login_signIn />}>
        <Route path="/Login_signIn/" element={<Login/>} />
        <Route path="/Login_signIn/SignIn" element={<SignIn/>} />
      </Route>
    
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
