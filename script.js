// Issue 2: en <div> med en <p> med ditt namn i din <body>

const body = document.querySelector('body') // funkar lika bra även med metod document.getElementById('body')
const script = document.querySelector('script') // funkar lika bra även med metod document.getElementById('script')
const div1 = document.createElement('div')
const para = document.createElement('p')
const name = document.createTextNode('Vytautas Skergelza')

body.insertBefore(div1, script)
div1.appendChild(para)
para.appendChild(name)

// Issue 3: en array som innehåller 4 saker jag är bra på.  
const array = ['spela basket', 'köra båt', 'sova', 'programmera (när jag är klar med utbildninhen)']

// Issue 4: array utskriven till en ny <div> under den tidigare.
const div2 = document.createElement('div')
const values = document.createTextNode(array)
div1.appendChild(div2)
div2.appendChild(values)