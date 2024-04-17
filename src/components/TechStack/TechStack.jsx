import React from 'react'
import './TechStack.scss'
import { FaHtml5, FaBootstrap, FaGitAlt, FaReact, FaNodeJs, FaWordpressSimple } from "react-icons/fa";
import { FaSass } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiExpress, SiWoo, SiMongodb  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFigmaLogoDuotone } from "react-icons/pi";



export default function TechStack() {
  return (
    <div className='tech-stack-wrapper'>
      <div>
        <h3 className='section-title'>Tech Stack</h3>
      </div>
      <div className='stack-group'>
        <div className='stack-element'>
            <FaHtml5 color='var(--text-primary)' size={100} />
            <p>HTML</p>
        </div>
        <div className='stack-element'>
            <IoLogoCss3 color='var(--text-primary)' size={100} />
            <p>CSS</p>
        </div>
        <div className='stack-element'>
            <FaSass color='var(--text-primary)' size={100} />
            <p>SASS</p>
        </div>
        <div className='stack-element'>
            <FaBootstrap color='var(--text-primary)' size={100} />
            <p>Bootstrap</p>
        </div>
        <div className='stack-element'>
            <IoLogoJavascript color='var(--text-primary)' size={100} />
            <p>Javascript</p>
        </div>
        <div className='stack-element'>
            <FaGitAlt  color='var(--text-primary)' size={100} />
            <p>GIT</p>
        </div>
        <div className='stack-element'>
            <FaReact  color='var(--text-primary)' size={100} />
            <p>React</p>
        </div>
        <div className='stack-element'>
            <SiRedux  color='var(--text-primary)' size={100} />
            <p>Redux</p>
        </div>
      </div>
      <div className='stack-group'>
        <div className='stack-element'>
            <FaNodeJs  color='var(--text-primary)' size={100} />
            <p>NodeJs</p>
        </div>
        <div className='stack-element'>
            <SiExpress color='var(--text-primary)' size={100} />
            <p>Express</p>
        </div>
        <div className='stack-element'>
            <FaWordpressSimple  color='var(--text-primary)' size={100} />
            <p>Wordpress</p>
        </div>
        <div className='stack-element'>
            <SiWoo color='var(--text-primary)' size={100} />
            <p>WooCommerce</p>
        </div>
        <div className='stack-element'>
            <BiLogoPostgresql  color='var(--text-primary)' size={100} />
            <p>PostgreSQL</p>
        </div>
        <div className='stack-element'>
            <SiMongodb   color='var(--text-primary)' size={100} />
            <p>MongoDB</p>
        </div>
        <div className='stack-element'>
            <PiFigmaLogoDuotone   color='var(--text-primary)' size={100} />
            <p>Figma</p>
        </div>
      </div>
    </div>
  )
}
