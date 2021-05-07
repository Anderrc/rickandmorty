module.exports = {
  siteMetadata: {
    title: "rickandmorty",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'MyNodes',
        imagePath: 'imageUrl',
        // OPTIONAL: Name you want to give new image field on the node.
        // Defaults to 'localImage'.
        name: 'allItemImages',
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'RICKANDMORTY',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'rickandmorty',
        // Url to query from
        url: 'https://rickandmortyapi.com/graphql',
      },
    },
  ],
};
