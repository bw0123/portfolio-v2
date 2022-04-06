import React from 'react'

function WorkExperience() {
    return(
        <div className='bg-base-300 flex justify-center '>
            <div class='flex-col'>
                <div className='p-3'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <p class="card-title font-bold text-xl">Software Engineer Intern</p>
                                <p class="font-semibold text-lg">EnergyWatch</p>
                                    <ul class="list-disc list-inside text-base text-justify">
                                        <li>Created and styled a responsive Front-end UI in React</li>
                                        <li>Implemented a CSV file importer that validates fields using Flat File and Javascript</li>
                                        <li>Formed project workflow using Trello and Bitbucket while using Zoom and Slack for communication</li>
                                    </ul>
                        </div>
                    </div>
                </div>
                <div className='p-3'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <p class="card-title font-bold text-xl">Tutor</p>
                                <p class="font-semibold text-lg">A & A Tutoring</p>
                                    <ul class="list-disc list-inside text-base text-justify">
                                        <li>Supervised students of various grade levels, ranging from 3rd to 6th grade</li>
                                        <li>Prepared classroom materials for reading, writing, and math subjects</li>
                                        <li>Measured learning progress of students by grading homework and quizzes</li>
                                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
