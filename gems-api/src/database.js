const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://leslysifuentes:5HjMDlq0GrEIIqob@gems-db.bfwdn.mongodb.net/gems?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(db => console.log('DB is connected'))
.catch(err => console.error(err))