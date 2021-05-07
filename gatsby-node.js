const path = require('path');

exports.createPages = async ({ graphql, actions }) => {

    const { createPage } = actions;

    const result = await graphql(`
    {
      rickandmorty {
        characters {
          info {
            pages
            count
          }
        }
      }
    }
  `)

    const pageCount = result.data.rickandmorty.characters.info.pages;
    const page = result.data.rickandmorty.characters.info.count;

    const charactersTemplate = path.resolve('./src/components/templates/characters/characters.jsx');
    const characterTemplate = path.resolve('./src/components/templates/page-character/page-character.jsx');
    for (var i = 1; i <= pageCount; i++) {
        createPage({
            path: `/personajes/${i}`,
            component: charactersTemplate,
            context: {
                page: i,
                totalPage: pageCount,
            },
        })
    }

    for (var j = 1; j <= page;j++) {
      createPage({
          path: `/personaje/${j}`,
          component: characterTemplate,
          context: {
            id: j,
            totalCharacters: page
          },
      })
    }

}