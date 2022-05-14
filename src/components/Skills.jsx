import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiCplusplus } from "react-icons/si";

function Skills() {
    return(
        <div className='p-10 text-xl font-bold'>
            <p class='text-center'>Skills</p>
            <ul class="menu bg-base-100 w-56 p-2 rounded-box">
                <li>
                    <a>
                        <FaReact />
                            React
                    </a>
                </li>
                <li>
                    <a>
                        <FaHtml5 />
                            HTML
                    </a>
                </li>
                <li>
                    <a>
                        <FaCss3Alt />
                            CSS
                    </a>
                </li>
                <li>
                    <a>
                        <SiJavascript />                   
                            Javascript
                    </a>
                </li>
                <li>
                    <a>
                        <SiCplusplus />
                            C++
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default Skills