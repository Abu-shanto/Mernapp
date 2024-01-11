const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dwa:08052000@cluster0.fkr2mi7.mongodb.net/dwa?retryWrites=true&w=majority'
const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray( async function (err, data) {
                const fooscategory = await mongoose.connection.db.collection("fooscategory");
                fooscategory.find({}).toArray(function (err, catData){
                    if (err) console.log(err);
                else {
                global.food_items = data ;
                global.fooscategory = catData ;
                   
                 }

                })

              //  if (err) console.log(err);
             //   else {
              //  global.food_items = data ; 
                   
                 //}
            })
        }

    });
}

module.exports = mongoDB; 
