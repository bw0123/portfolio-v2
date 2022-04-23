import React from 'react'

function WorkExperience() {
    return(
        <div class='bg-secondary-content flex justify-center h-screen p-12'>
            <div class='flex-col'>
                <div class='p-3'>
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                        <div class="card-body">
                            <p class="card-title font-bold text-xl">Software Engineer Intern</p>
                                <div>
                                    <p class="italic font-semibold text-lg">EnergyWatch - (June'21 to August'21)</p>
                                </div>
                                    <ul class="list-disc list-inside text-base text-justify">
                                        <li>Created and styled a responsive Front-end UI in React</li>
                                        <li>Implemented a CSV file importer that validates fields using Flat File and Javascript</li>
                                        <li>Formed project workflow using Trello and Bitbucket while using Zoom and Slack for communication</li>
                                    </ul>
                                    <div class="card-actions justify-end font-bold">
                                        New York, NY
                                    </div>
                        </div>
                    </div>
                </div>
                <div class='p-3'>
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                        <div class="card-body">
                            <p class="card-title font-bold text-xl">Tutor</p>
                                <p class="italic font-semibold text-lg">A & A Tutoring - (June'19 to August'19)</p>
                                    <ul class="list-disc list-inside text-base text-justify">
                                        <li>Supervised students of various grade levels, ranging from 3rd to 6th grade</li>
                                        <li>Prepared classroom materials for reading, writing, and math subjects</li>
                                        <li>Measured learning progress of students by grading homework and quizzes</li>
                                    </ul>
                                    <div class="card-actions justify-end font-bold">
                                        Brooklyn, NY
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
