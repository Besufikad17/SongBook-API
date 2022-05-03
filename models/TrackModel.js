const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    img_url : {
        type: String,
        required: true
    },
    artist: {
        type: String,
        requires: true
    },
    lyrics : {
        type: String,
        requires: true
    }
});

module.exports = mongoose.model("Track", trackSchema);