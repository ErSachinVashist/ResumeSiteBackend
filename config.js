module.exports ={
    mongoUrl:'mongodb+srv://'+process.env.MONGOUSER+':'+process.env.MONGOPASS+'@sachincluster.ekgy1.mongodb.net/'+process.env.MONGODB+'?retryWrites=true&w=majority',
    dbName:process.env.MONGODB
}