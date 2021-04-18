const mongoose = require('mongoose');

const meetschema=mongoose.Schema(

    {
        name: { type: String,
         require: true
        },
         no_of_attendee: { type: String,
            require: true
           },
          date: { type: String,
            require: true
           },
           end: { type: String,
            require: true
           }, 
           start: { type: String,
            require: true
           },
           id:{ type: String,
           
           }

    }
)
meeting=mongoose.model('meet',meetschema)
module.exports=  meeting ;