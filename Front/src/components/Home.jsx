import Boy from "./images/boy.png"
import Girl from "./images/girl.png"

const Home = () => {
  return (


<>

{/* header section */}

<div className="p-3 m-10">


<div className='flex justify-between items-center border'>

<section className="">

  <img src={Boy} alt="" />

</section>


<section>



    <p className='text-center text-4xl font-bold text-[#102c57]'> Secure the <span className='text-[#ff7f3e]'> Better</span> <span className=' block'
    > <b className='text-[#ff7f3e]' > Future</b>  
    for your ward
    </span> 
    </p>

<p className='text-center mt-4'>
All round learning and development of a 
<span className='block'>child at a very affordable fee</span>

</p>

</section>

<section className="">

<img src={Girl} alt="" />

</section>

    </div>


</div>

  </>
  )
}

export default Home
