import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import bluehome from '../components/images/bluehome.jpg'

function Home() {  
    return(
        <div>
            <div class='h-screen bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${bluehome})` }}>
                <div class="hero-overlay bg-opacity-40">
                    <div class="hero-content text-center text-neutral-content">
                        <h1 class="mt-40 text-5xl font-bold">Hello there, I'm Britney Wu</h1>
                    </div>
                        <p className='text-lg text-center text-white p-12'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in diam justo. Proin quis neque lacinia, vestibulum risus iaculis, maximus arcu. Duis tincidunt est nec est ornare, ac sodales dui rutrum. Vivamus eleifend orci quis leo pellentesque, quis condimentum metus cursus. Morbi lacus enim, cursus et erat ut, vulputate luctus purus. Quisque ac elit dictum, venenatis quam ac, suscipit turpis. Donec viverra est mauris, eu mollis tellus mollis in.                         </p>
                        <div className='flex justify-center p-5 gap-x-2'>
                                <a href='https://www.linkedin.com/in/britneywu01/' target='_blank' rel='noreferrer'>
                                    <button class="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg">   
                                        <FaLinkedin />
                                    </button>
                                </a>
                                <a href='https://github.com/bw0123' target='_blank' rel='noreferrer'>
                                    <button class="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                                        <FaGithub />
                                    </button>
                                </a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Home