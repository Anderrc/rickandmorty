import { Helmet } from "react-helmet";
import React from 'react';

const Seo = props => {

    const { title,description,image,url } = props;

    return ( 
        <>
            <Helmet>
                {/* General tags */}
                <title> {title} </title>
                <meta name="description" content={description} />
                <meta name="image" content={image} />

                {/* OpenGraph tags */}
                <meta property="og:url" content={url} />             <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Helmet>
        </>
     );
}
 
export default Seo;