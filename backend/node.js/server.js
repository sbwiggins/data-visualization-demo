const express = require('express')
const architecture_router = require('./routes/architecture-routes')
const app = express()

app.use((req, res, next) => {
    console.log('First Middleware Call ')
    next();
})
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api/ArchitectureData', architecture_router)


app.listen(7000, () => console.log('Listening on port 7000...'))

