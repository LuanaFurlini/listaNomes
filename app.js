import express from 'express' // require é do es5
import cors from 'cors'      // import do es6 para cima
import routes from './routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(routes)

app.listen(3000, ()=>{
    console.log('api no ar');
})

