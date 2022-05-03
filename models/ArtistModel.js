const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    full_name: {
        type:String,
        required: true
    },
    albums: {
        type: Array,
        required: true
    },
    img_url : {
        type: String,
        required: true
    },
    tracks: {
        type: Array,
        requires: true
    }
});

module.exports = mongoose.model("Artist", artistSchema);