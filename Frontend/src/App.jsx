import { Provider } from 'react-redux'
import './App.css'
import TermsPage from './components/TermsConditionPage/TermsPage'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { store } from './Redux/Store'
import Login_signIn from './components/Student_forms/Login_signIn'
import Login from './components/Student_forms/Login'
import SignIn from './components/Student_forms/SignIn'
import Features from './components/featuresPage/Features'
import Complaint from './components/Complaint'
import Index from './components/IntroPage/Index'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />} />
      <Route path="/features" element={<Features />} />
      <Route path="/features/TermsPage" element={<TermsPage />} />
      <Route path="/RaiseComplaint" element={<Complaint />} />
      <Route path="/Login_signIn" element={<Login_signIn />}>
        <Route path="/Login_signIn/" element={<Login />} />
        <Route path="/Login_signIn/SignIn" element={<SignIn />} />
      </Route>

    </>
  )
)



function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
