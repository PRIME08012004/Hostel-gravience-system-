<<<<<<< HEAD
import { Provider } from 'react-redux'
import './App.css'
import TermsPage from './components/TermsConditionPage/TermsPage'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { store } from './Redux/Store'
import Login_signIn from './components/Student_forms/Login_signIn'
import Login from './components/Student_forms/Login'
import SignIn from './components/Student_forms/SignIn'
import Features from './components/featuresPage/Features'
import RaiseComplaint from './components/RaiseComplaint'
import Index from './components/IntroPage/Index'
import Warden_SignIn from './components/Warden_Forms/Warden_SignIn'
import Warden_Login_SignIn from './components/Warden_Forms/Warden_Login_SignIn'
import Warden_Login from './components/Warden_Forms/Warden_Login'
import StuProfile from './components/Dashboards/Student/StuProfile'
import MyComplaints from './components/Dashboards/Student/MyComplaints'
import Meal_Poll from './components/Dashboards/Student/Meal_Poll'
import WarDash from './components/Dashboards/Warden/WarDash'
=======
import { Provider } from 'react-redux';
import './App.css';
import TermsPage from './components/TermsConditionPage/TermsPage';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { store } from './Redux/Store';
import Login_signIn from './components/Student_forms/Login_signIn';
import Login from './components/Student_forms/Login';
import SignIn from './components/Student_forms/SignIn';
import Features from './components/featuresPage/Features';
import RaiseComplaint from './components/RaiseComplaint';
import Index from './components/IntroPage/Index';
import Warden_SignIn from './components/Warden_Forms/Warden_SignIn';
import Warden_Login_SignIn from './components/Warden_Forms/Warden_Login_SignIn';
import Warden_Login from './components/Warden_Forms/Warden_Login';
import StuProfile from './components/Dashboards/Student/StuProfile';
import MyComplaints from './components/Dashboards/Student/MyComplaints';
import { StudentProvider } from './context/StudentContext'; // Import the StudentProvider
>>>>>>> 5980ca7adef84ee31e1125f24c5a54a9213b48fa

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />} />
      <Route path="/features" element={<Features />} />
      <Route path="/features/TermsPage" element={<TermsPage />} />
      <Route path='/RaiseComplaint' element={<RaiseComplaint />} />
      <Route path='/MyComplaints' element={<MyComplaints />} />
      <Route path="/StudentProfile" element={<StuProfile />} />
<<<<<<< HEAD
      <Route path='/warden_dashboard' element={<WarDash/>}  />
        <Route path='/Meal-Poll' element={<Meal_Poll />} />
        <Route path="/Login_signIn" element={<Login_signIn />}>
          <Route path="/Login_signIn/" element={<Login />} />
          <Route path="/Login_signIn/SignIn" element={<SignIn />} />
        </Route>
        <Route path='/Warden_Login_SignIn' element={<Warden_Login_SignIn />}>
          <Route path='/Warden_Login_SignIn/' element={<Warden_Login />} />
          <Route path='/Warden_Login_SignIn/warden_signIn' element={<Warden_SignIn />} />
        </Route>

      </>
      )
      )


=======
      <Route path="/Login_signIn" element={<Login_signIn />} >
        <Route path="/Login_signIn/" element={<Login />} />
        <Route path="/Login_signIn/SignIn" element={<SignIn />} />
      </Route>
      <Route path='/Warden_Login_SignIn' element={<Warden_Login_SignIn />} >
        <Route path='/Warden_Login_SignIn/' element={<Warden_Login />} />
        <Route path='/Warden_Login_SignIn/warden_signIn' element={<Warden_SignIn />} />
      </Route>
    </>
  )
);
>>>>>>> 5980ca7adef84ee31e1125f24c5a54a9213b48fa

      function App() {
  return (
<<<<<<< HEAD
      <>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </>
      )
}

      export default App
=======
    <Provider store={store}>
      <StudentProvider> {/* Wrap with StudentProvider */}
        <RouterProvider router={router} />
      </StudentProvider>
    </Provider>
  );
}

export default App;
>>>>>>> 5980ca7adef84ee31e1125f24c5a54a9213b48fa
