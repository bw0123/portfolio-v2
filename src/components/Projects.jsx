import React from 'react'
import { Carousel } from 'antd';


function Projects() {

    return(
            <>
            <div class="flex-row card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Github Finder</h2>
                <p>Description</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">View</button>
                    <button class="btn btn-primary">Github Repo</button>
                </div>
            </div>
        </div><div className='p-10'>
                <Carousel autoplay effect='fade'>
                    <div>
                        <h3 className='text-white text-center text-xl h-80 bg-blue-600'>Github Finder</h3>
                    </div>
                    <div>
                        <h3 className='text-white text-center text-xl h-80 bg-blue-600'>Feedback UI</h3>
                    </div>
                    <div>
                        <h3 className='text-white text-center text-xl h-80 bg-blue-600'>Venue Page</h3>
                    </div>
                    <div>
                        <h3 className='text-white text-center text-xl h-80 bg-blue-600'>Number Guessing Game</h3>
                    </div>
                </Carousel>
            </div>
            </>
    )
}

export default Projects