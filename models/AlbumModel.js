const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type:String,
        required: true
    },
    date_of_release: {
        type: String,
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

module.exports = mongoose.model("Album", albumSchema);