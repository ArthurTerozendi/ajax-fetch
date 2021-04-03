const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(8080, () => {
    console.log(`Servidor iniciado!`)
})

let index = 0;
app.get('/imagens', (req, res, next) => {
    res.send({img: img[index]});
    index++;
    if (index > 5) {
        index = 0;
    }
});

const img = ['../server/img/garfield1.jpg', '../server/img/garfield2.png', '../server/img/garfield3.gif', '../server/img/garfield4.jpg', '../server/img/garfield8.png', '../server/img/garfield20.jpg']