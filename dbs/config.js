const moongoose=require('mongoose');

const connection=moongoose.connect('mongodb+srv://chetanbhagat:chetan@cluster0.lkj8w.mongodb.net/mock6?retryWrites=true&w=majority');


module.exports={connection}