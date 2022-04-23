import React from 'react'
import jjcollege from './images/jjcollege.jpg'
import ttplogo from './images/ttp-logo.png'

function Experience() {
    return(
        <div class='bg-secondary-content flex justify-center h-screen p-12'>
            <div class='flex-col'>
                <div class='p-3'>
                    <div class='card lg:card-side bg-base-100 shadow-xl'>
                        <figure><img src={jjcollege} alt='johnjaycollege'/></figure>
                            <div class='card-body'>
                                <h2 class='card-title pb-2'>John Jay College of Criminal Justice</h2>
                                    <div class='text-base'>
                                        <p class='pb-2'>B.S in Computer Science</p>
                                        <p class='italic'>Expected graduation: Spring 2023</p>
                                    </div>    
                                    <div class='card-actions justify-end font-bold'>
                                        New York, NY
                                    </div>                        
                            </div>
                    </div>
                </div>
                <div class='p-3'>
                <div class='card lg:card-side bg-base-100 shadow-xl'>
                    <figure><img src={ttplogo} alt='ttp-logo'/></figure>
                        <div class='card-body'>
                            <h2 class='card-title pb-2'>Web Development Fellow</h2>
                                <div class='text-base'>
                                    <p class='italic pb-2'>NYC Tech Talent Pipeline - January 2021</p>
                                        <ul class='list-disc list-inside text-base text-justify'>
                                            <li>Designed and developed web applications using technologies</li>
                                            <li>Completed and contributed to group projects in teams of 8 developers</li>
                                        </ul>
                                </div>
                                <div class='card-actions justify-end font-bold'>
                                    New York, NY
                                </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}export default Experience