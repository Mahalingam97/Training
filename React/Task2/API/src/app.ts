import express, {Application} from "express";

const app:Application = express();
const PORT:Number = 5000;

app.use('/', require('./routes/search'));

app.listen(PORT,()=>{
    console.log(`Server is listening at port : ${PORT}`);
})