import React from 'react'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Navbars from './components/Navbars'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Dasbboard from './components/Dasbboard'
// import Form from './components/Form'


const App = () => {
  return (

    <>


    
      <Navbars />

      
    
    <div className='sm:mx-10 mx-3 p-3 my-5' >
      
{/* <Form/> */}

    <Routes>
      

<Route path='/' element={<Home/>}/>
<Route path='/Signin' element={<Signin/>}/>
<Route path='/Signup' element={<Signup/>}/>
<Route path='/dashboard' element={<Dasbboard/>}/>

</Routes>

    </div>
    </>
  )
}

export default App
