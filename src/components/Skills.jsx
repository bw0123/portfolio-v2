import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiCplusplus } from "react-icons/si";

function Skills() {
    return(
        <div className='p-10 text-xl font-bold'>
            <p class='text-start pb-5'>Skills</p>
            <ul class="menu menu-compact lg:menu-normal w-56 p-2 bg-base-300 rounded-box">
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