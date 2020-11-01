import React from 'react'
import {Card,Button} from 'react-bootstrap'
import AboutCard from './AboutCard'
import Navigationbar from '../navigationbar/Navigationbar'

import anjol from './profile_photos/anjol.jpeg'
import vishnu from './profile_photos/vishnu.jpg'
import sushma from './profile_photos/sushma.jpeg'
import common from './profile_photos/common.png'
import rony from './profile_photos/rony.jpg'
import mamta from './profile_photos/mamta.jpg'
import './About.css'

let teammates = [
    {"name" : "Vishnu Vijayakumar", "img": vishnu, "Role" : "Software Developer" , "linkedin": "https://www.linkedin.com/in/vishnu-vijayakumar-a397b093/"},
    {"name" : "Sushma", "img": sushma, "Role" : "QA Analyst" , "linkedin": "https://www.linkedin.com/in/sushma-jayaram/"},
    {"name" : "Anjol" , "img": anjol, "Role" : "React Developer" , "linkedin": "https://www.linkedin.com/in/anjol-tuladhar/?trk=public_profile_browsemap_profile-result-card_result-card_full-click&originalSubdomain=au"},
    {"name" : "Alan", "img": common, "Role" : "Python Developer" , "linkedin": "https://www.linkedin.com/in/alan-thomas-9873661b5/"},
    {"name" : "Mamta", "img": mamta,"Role" : "Business Analyst" , "linkedin": ""},
    {"name": "Rony", "img": rony,"Role": "Data Analyst", "linkedin": "https://www.linkedin.com/in/rony-james-4b31b1178"}


]

class About extends React.Component
{
    render()
    {
        return (
        <div>
        <Navigationbar filter_visibility="hidden"></Navigationbar>
         <h1 id="team-heading">Team Members</h1>
        <div id="about-container" >
        <AboutCard  profileinfo={teammates[0]}></AboutCard>
        <AboutCard  profileinfo={teammates[1]}></AboutCard>
        <AboutCard profileinfo={teammates[2]}></AboutCard>
        <AboutCard  profileinfo={teammates[3]}></AboutCard>
        <AboutCard  profileinfo={teammates[4]}></AboutCard>
        <AboutCard  profileinfo={teammates[5]}></AboutCard>

        </div>
        </div>)
    }
}

export default About;