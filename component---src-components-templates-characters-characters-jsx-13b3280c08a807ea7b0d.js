(self.webpackChunkrickandmorty=self.webpackChunkrickandmorty||[]).push([[936],{545:function(e,a,t){"use strict";var r=t(7294),c=t(5102);a.Z=function(e){var a=e.info,t=a.name,n=a.image,i=a.location,s=a.episode,o=a.id;return r.createElement("div",{className:"o-character"},r.createElement("div",{className:"o-character-img"},r.createElement("img",{src:n,alt:t})),r.createElement("div",{className:"o-character-container"},r.createElement("a",{href:"https://anderrc.github.io/rickandmorty/personaje/"+o,className:"o-character-container-title"},r.createElement("h2",null," ",t," ")),r.createElement(c.Z,{info:e.info}),r.createElement("div",{className:"o-character-container-data"},r.createElement("span",{className:"o-character-container-data-title"},"Ultima ubicación conocida"),r.createElement("span",{className:"o-character-container-data-text"},i.name)),r.createElement("div",{className:"o-character-container-data"},r.createElement("span",{className:"o-character-container-data-title"},"Visto por primera vez"),r.createElement("span",{className:"o-character-container-data-text"},s[0].name))))}},1864:function(e,a,t){"use strict";t.r(a);var r=t(7294),c=t(545),n=t(6762),i=t(2179),s=t(2987);a.default=function(e){var a=e.pageContext,t=e.data.rickandmorty.characters.results;return r.createElement(n.Z,null,r.createElement(s.Z,{image:i.Z,title:"Pagina "+a.page+"- Rick and morty",url:"https://anderrc.github.io/rickandmorty/personaje/"+a.page,description:"Consumo de la api https://rickandmortyapi.com con gatsby"}),r.createElement("div",{className:"t-characters"},r.createElement("div",{className:"t-characters-title"},r.createElement("h1",null,"Personajes de Rick y Morty")),r.createElement("div",{className:"t-characters-container"},t.map((function(e,a){return r.createElement(c.Z,{key:a,info:e})}))),r.createElement("div",{className:"t-characters-pagination"},r.createElement("div",{className:"t-characters-pagination-buttons"},1!==a.page?r.createElement("a",{href:"https://anderrc.github.io/rickandmorty/personajes/"+(a.page-1),className:"t-characters-pagination-buttons-button"},"Anterior"):"",a.page!==a.totalPage?r.createElement("a",{href:"https://anderrc.github.io/rickandmorty/personajes/"+(a.page+1),className:"t-characters-pagination-buttons-button"},"Siguiente"):""))))}}}]);
//# sourceMappingURL=component---src-components-templates-characters-characters-jsx-13b3280c08a807ea7b0d.js.map