import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
const Form = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Enter First-Name'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Enter Last-Name'),
            email: Yup.string().email('Invalid email address').required('Required'),
          }),

        onSubmit: (values) => {
           console.log(values);
        }
    })



    return (
    <>
        <div className="border p-3 rounded shadow w-[100%] sm:w-[550px] sm:mx-auto">
    
    <form action=""  onSubmit={formik.handleSubmit}>

<div className='mt-2'>
    <label htmlFor="" className='block font-bold'>First Name</label>
    <input className="rounded outline-none border w-full" type="text" placeholder="Enter First Name" 
    
    name='firstName'
    onChange={formik.handleChange}
    value={formik.values.firstName}
    onBlur={formik.handleBlur}
        
    />
{formik.touched.firstName && formik.errors.firstName ? (
         <div className='font-bold text-[#ff0505]'>{formik.errors.firstName}</div>
       ) : null}
 
</div>
<div className='mt-2'>
    <label className='block font-bold' htmlFor="">Last Name</label>
    <input className=" rounded outline-none border w-full" type="text" placeholder="Enter Last Name" />
</div>
<div className='mt-2'>
    <label htmlFor="" className='block font-bold'>Email</label>
    <input className="rounded outline-none border  w-full" type="email" placeholder="Enter email" />
</div>
<div className='mt-2'>
    <label htmlFor="" className='block font-bold'>Password</label>
    <input className="rounded outline-0 border w-full" type="password" placeholder="Enter your password" />
</div>


<div className='cursor-pointer my-2  rounded p-2'>
    <button className='bg-[#01041b] rounded block mx-auto p-2  w-[50%] text-white font-bold text-center hover:bg-[#0c0e22f5]' type='submit'>Submit</button>
</div>


    </form>
    </div>
    </>
  )
}

export default Form
