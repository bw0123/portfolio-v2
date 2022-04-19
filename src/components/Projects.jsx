import React from 'react'
import { Carousel } from 'antd';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { GithubFilled } from '@ant-design/icons'

function Projects() {
    return(
        <div class='base-300'>
         <div className='p-10'>
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
            <div>
                <div class="card-body ">
                    <h2 class="card-title">Github Finder</h2>
                        <p>Description</p>
                            <ul class='list-disc list-inside text-base text-justify'>
                                <li>Bullet 1</li>
                                <li>Bullet 2</li>
                                <li>Bullet 3</li>
                            </ul>
                        <div class="card-actions justify-end">
                            <button class="btn btn-circle btn-primary"><ZoomInIcon/></button>
                            <button class="btn btn-circle btn-primary"><GithubFilled/></button>
                        </div>
                </div>
                <div class="card-body ">
                    <h2 class="card-title">Feedback UI</h2>
                        <p>Description</p>
                        <ul class='list-disc list-inside text-base text-justify'>
                                <li>Bullet 1</li>
                                <li>Bullet 2</li>
                                <li>Bullet 3</li>
                        </ul>
                    <div class="card-actions justify-end">
                        <button class="btn btn-circle btn-primary"><ZoomInIcon/></button>
                        <button class="btn btn-circle btn-primary"><GithubFilled/></button>
                    </div>
                </div>
                <div class="card-body ">
                    <h2 class="card-title">Number Guessing Game</h2>
                        <p>Description</p>
                        <ul class='list-disc list-inside text-base text-justify'>
                                <li>Bullet 1</li>
                                <li>Bullet 2</li>
                                <li>Bullet 3</li>
                        </ul>
                    <div class="card-actions justify-end">
                        <button class="btn btn-circle btn-primary"><ZoomInIcon/></button>
                        <button class="btn btn-circle btn-primary"><GithubFilled/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects