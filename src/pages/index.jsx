import React from 'react';
import ContentIndex from '../components/organims/content-index/content-index';
import Layout from '../components/templates/layout/layout';
import './index.scss';
import image from '../images/rick-y-morty.png';
import Seo from '../components/organims/SEO/SEO';

const IndexPage = props => {
    return ( 
        <Layout>
            <Seo image={image} title="Rick and morty - practica con gatsby" url="https://anderrc.github.io/rickandmorty/" description="Consumo de la api https://rickandmortyapi.com con gatsby"/>
            <ContentIndex></ContentIndex>
        </Layout>
     );
}
 
export default IndexPage;