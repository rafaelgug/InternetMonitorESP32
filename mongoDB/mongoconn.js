const mongoose = require('mongoose')
mongoose
    .connect(process.env.MONGO_CONNECT)
    .then((success) => console.log("Conectado!!"))
    .catch((err) => console.log(err.message));
   
