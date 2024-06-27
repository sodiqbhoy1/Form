import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";



const Navbars = () => {

const links = [

{
  path:"/",
  name: "Home"
},

{
  path:"/Signin",
  name:"SignIn"
},
{
  path:"/Signup",
  name:"Signup"
},

{
  path:"/dashboard",
  name:"Dashboard"
}

]


  return (
    <>


<nav className="sticky z-50 text-white w-[100%] top-0 flex items-center justify-between bg-[#040629ee] p-5 rounded cursor-pointer  border">


  <h2 className="text-2xl font-bold">School</h2>


<ul className="flex gap-5 cursor-pointer" >
<li className="font-bold ">
  
<RouterLink to="/" className="font-bold">

Home

</RouterLink>
</li>

<li className="font-bold">

<Link to="about"

activeClass="active"
spy={true}
smooth={true}
offset={-70}
duration={500}

>

About

</Link>
</li>

</ul>

{/* sign in and sign up */}
<ul className="flex gap-3 items-center " >

<li className="font-bold p-1">

<RouterLink to="/Signin">
Sign in
</RouterLink>

  
</li>

<li className="font-bold bg-[#fff] text-[#040629ee] p-1 rounded">
  <RouterLink to="/Signup">
Signup

  </RouterLink>
</li>


</ul>

</nav>


    </>

  )
}

export default Navbars