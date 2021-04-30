import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

export default function Landing() {
    return (
        <div id="landing-page">
            <div id="lading-page-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />
                <div className="button-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Study" />
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="give-classes" />
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 111 conexões já realizadas
                    <img src={purpleHeartIcon} alt="Icone de coração" />
                </span>
            </div>
        </div>
    )
}
