import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/42882470?s=400&u=073e8a1c35cb922748fd58dd17f4c7779cd7aeba&v=4" alt="Francesco Gonzalez Muller" />
                <div>
                    <strong>Francesco Gonzalez Müller</strong>
                    <span>Matemático </span>
                </div>
            </header>
            <p>
                Matemático mais perfecionista do mundo, todos os calculos devem estar exatamente alinhados da maneira correta
                se não o quadro inteiro ele apagará.
                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 40,50</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}
export default TeacherItem