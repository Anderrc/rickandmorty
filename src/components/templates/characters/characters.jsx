import { graphql } from 'gatsby';
import React from 'react';
import Character from '../../organims/character/character';
import Layout from '../layout/layout';
import image from '../../../images/rick-y-morty.png';
import './characters.scss';
import Seo from '../../organims/SEO/SEO';

const Characters = props => {
    const { pageContext , data } = props;

    const {
        rickandmorty: {
          characters: { results: charactersData },
        },
      } = data

    return ( 
        <Layout>
            <Seo image={image} title={"Pagina " + pageContext.page +"- Rick and morty"} url={"https://anderrc.github.io/rickandmorty/personaje/"+pageContext.page} description="Consumo de la api https://rickandmortyapi.com con gatsby"/>
            <div className="t-characters">
                <div className="t-characters-title">
                    <h1>Personajes de Rick y Morty</h1>
                </div>
                <div className="t-characters-container">
                  {
                    charactersData.map((item,key)=>(
                      <Character key={key} info={item} />
                    ))
                  }
                </div>
                <div className="t-characters-pagination">
                    <div className="t-characters-pagination-buttons">
                        { pageContext.page !== 1 ? 
                            <a href={"/personajes/"+(pageContext.page-1)} className="t-characters-pagination-buttons-button">Anterior</a>:
                            ""             
                        }
                        
                        { pageContext.page !== pageContext.totalPage ?
                            <a href={"/personajes/"+(pageContext.page+1)} className="t-characters-pagination-buttons-button">Siguiente</a>:
                            ""
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}
 
export default Characters;
export const pageQuery = graphql`
  query($page: Int!) {
    rickandmorty {
      characters(page: $page) {
        results {
          id
          name
          status
          species
          gender
          image
          origin {
            name
          }
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
`