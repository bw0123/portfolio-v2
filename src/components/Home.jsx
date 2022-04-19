import React from 'react'
import { LinkedinFilled, GithubFilled,}  from '@ant-design/icons'

function About() {  
    return(
        <div class='pt-10 h-screen'>
            <p className='text-lg p-10'>
            I am currently looking for internships in the field of Web Development or IT. Becoming a Full-Stack Developer is my goal because I enjoy the creative process of planning the layout of websites and using code to make it functional. I look forward to learning frameworks, technologies, and improving my current skillset. In the process of this search, I am pursuing a Bachelors of Science degree in Computer Science at John Jay College.            </p>
            <div className='flex justify-center p-10 gap-x-2'>
                <div>
                        <a href='https://www.linkedin.com/in/britneywu01/' target='_blank' rel='noreferrer'>
                            <button class="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg">   
                                <LinkedinFilled/>
                            </button>
                        </a>
                </div>
                <div>
                        <a href='https://github.com/bw0123' target='_blank' rel='noreferrer'>
                            <button class="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                                <GithubFilled/>
                            </button>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default About