import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Character from '../character/character';
import './content-index.scss';

const ContentIndex = props => {

    const resultQuery1 = useStaticQuery(
        graphql`{
            rickandmorty {
                characters {
                    results{
                        name
                        id
                        image
                        species
                        status
                        type
                        location {
                            name
                        }
                        episode {
                            name
                        }
                    }
                }
            }
        }
    `);

    console.log(resultQuery1.rickandmorty.characters.results);
    
    return ( 
        <div className="o-content-index">
            <div className="o-content-index-title">
                <h1>Practica de Gatsby y GraphQl</h1>
            </div>
            <div className="o-content-index-content">
                <p>
                    Practica realizada con la Api de Rick y Morty la cual proporciona una version en graphql, vistala 
                    <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer"> https://rickandmortyapi.com/</a>
                </p>

                <p>
                    Ver listado de personajes <a href="/personajes/1">Aquí</a>
                </p>
                
            </div>
            <div className="o-content-index-charactes">
                <Character info={resultQuery1.rickandmorty.characters.results[0]}></Character> 
                <Character info={resultQuery1.rickandmorty.characters.results[1]}></Character>
            </div>
        </div>
    );
}
 
export default ContentIndex;