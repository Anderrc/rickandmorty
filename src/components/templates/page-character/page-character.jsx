import { graphql } from 'gatsby';
import React from 'react';
import Status from '../../molecules/status/status';
import Seo from '../../organims/SEO/SEO';
import Layout from '../layout/layout';
import './page-character.scss';

const PageCharacter = props => {
    const { data, pageContext } = props;

    const { name , image, episode, location, gender, type, id } = data.rickandmorty.character

    return ( 
        <Layout>
            <Seo image={image} title={name + " Rick and morty"} url={"https://anderrc.github.io/rickandmorty/personaje/"+id} description="Consumo de la api https://rickandmortyapi.com con gatsby"/>
            <div className="t-character">
                <div className="t-character-data">
                    <div className="t-character-data-img">
                        <img src={ image } alt="" />
                    </div>
                    <div className="t-character-data-text">
                        <h1 className="t-character-data-text-name">{name}</h1>
                        <Status info={data.rickandmorty.character} />
                        <div className="t-character-data-text-container"> 
                            <span className="t-character-data-text-container-title">
                                Visto por primera vez
                            </span>
                            <span className="t-character-data-text-container-text">
                                { episode[0].name }
                            </span>
                        </div>
                        <div className="t-character-data-text-container"> 
                            <span className="t-character-data-text-container-title">
                                Ultima ubicación conocida
                            </span>
                            <span className="t-character-data-text-container-text">
                                {location.name}
                            </span>
                        </div>
                        <div className="t-character-data-text-container"> 
                            <span className="t-character-data-text-container-title">
                                Genero
                            </span>
                            <span className="t-character-data-text-container-text">
                                { gender === "" ? gender : " Desconocido "  }
                            </span>
                        </div>
                        <div className="t-character-data-text-container"> 
                            <span className="t-character-data-text-container-title">
                                Tipo
                            </span>
                            <span className="t-character-data-text-container-text">
                                { type === " " ? type : " Desconocido "  }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="t-character-pagination">
                    <div className="t-character-pagination-buttons">
                        { parseInt(id) !== 1 ? 
                            <a href={"https://anderrc.github.io/rickandmorty/personaje/"+(parseInt(id)-1)} className="t-character-pagination-buttons-button">Anterior</a>:
                            ""             
                        }
            
                        { parseInt(id) !== pageContext.totalCharacters ?
                            <a href={"https://anderrc.github.io/rickandmorty/personaje/"+(parseInt(id)+1)} className="t-character-pagination-buttons-button">Siguiente</a>:
                            ""
                        }
                    </div>
                </div>
            </div>
        </Layout>
     );
}
 
export default PageCharacter;
export const pageQuery = graphql`
    query($id: ID!) {
        rickandmorty {
            character(id: $id) {
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
`

