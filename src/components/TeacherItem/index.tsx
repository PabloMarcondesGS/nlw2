import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
// import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/13985639?s=400&u=4ef493ff75a9a7a8c23c82d517ce1e2a36ef9407&v=4" alt="Pablo Marcondes"/>
                <div>
                    <strong>Pablo Marcondes</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaxonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>

        </article>
    )
}

export default TeacherItem;