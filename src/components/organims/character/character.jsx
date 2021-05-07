import React from 'react';
import Status from '../../molecules/status/status';
import './character.scss';

const Character = props => {

    const { name, image, location, episode, id } = props.info;

    return ( 
        <div className="o-character">
            <div className="o-character-img">
                <img src={image} alt={name} />
            </div>
            <div className="o-character-container">
                <a href={"/personaje/"+id} className="o-character-container-title"><h2> {name} </h2></a>
                <Status info={props.info} />
                <div className="o-character-container-data"> 
                    <span className="o-character-container-data-title">
                        Ultima ubicación conocida
                    </span>
                    <span className="o-character-container-data-text">
                        {location.name}
                    </span>
                </div>
                <div className="o-character-container-data"> 
                    <span className="o-character-container-data-title">
                        Visto por primera vez
                    </span>
                    <span className="o-character-container-data-text">
                        { episode[0].name }
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Character;