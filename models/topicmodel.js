const { default: mongoose } = require("mongoose");

const topicSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please provide a valid title."]
    },
    description:{
        type:String,
    require:[true,"Provide"]
    }
})

export const Topic = mongoose.models.Topic || mongoose.model("Topic",topicSchema);