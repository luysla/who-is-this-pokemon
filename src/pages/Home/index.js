import React from 'react';
import './style.scss';

import iconQuestion from '../../assets/img/icon-question.png';
import imgPokemon from '../../assets/img/image-pokemon.png';

const Home = () => {
    return (
        <div className="main">
			<p className="title">Quem é esse</p>
			<img src={imgPokemon} alt="" />
			<img src={iconQuestion} alt="" />

			<button className="bt-start" onClick={() => console.log('teste')}>
				Começar
			</button>
		</div>
    )
}

export default Home;