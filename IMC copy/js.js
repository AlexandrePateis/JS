const tags = [{ tag: 'p', texto: 'Frase 1' },
{ tag: 'div', texto: 'Frase 2' },
{ tag: 'section', texto: 'Frase 3' },
{ tag: 'footer', texto: 'Frase 4' }
];


const cont = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < tags.length; i++) {
    let { tag, texto } = tags[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}
cont.appendChild(div)
