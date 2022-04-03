import React from 'react'

function About() {  
    return(
        <div class='pt-10'>
            <p className='text-lg p-10'>
            I am currently looking for internships in the field of Web Development or Software Engineering. Becoming a Full-Stack Developer is my goal because I enjoy the creative process of planning the layout of websites and using code to make it functional. I look forward to learning frameworks, technologies, and improving my current skillset. In the process of this search, I am pursuing a Bachelors of Science degree in Computer Science at John Jay College.            </p>
            <div className='flex justify-center p-10'>
                <div className='pr-2'>
                    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">LinkedIn</button>
                </div>
                <div>
                    <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Github</button>
                </div>
            </div>
        </div>
    )
}

export default About