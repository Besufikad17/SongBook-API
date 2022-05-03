const Track = require('../models/TrackModel');
const trackController = {};

trackController.addTrack = async(req, res) => {
    const { title , album, img_url, artist, lyrics } = req.body;

    if(!title  || !album || !img_url || !artist || !lyrics){
        return res.status(400).json({ msg: 'Please enter all fields' });   
    }

    Track.findOne({title })
    .then(track => {
        if(track){
            return res.status(400).json({msg: 'Track already exists!!'});
        }else{
            const newTrack = new Track({
                title ,
                album,
                img_url,
                artist, 
                lyrics
            })
            newTrack.save().
            then(track => {
                res.json({
                    track: {
                        title : track.title ,
                        album: track.album,
                        img_url: track.img_url,
                        artist: track.artist,
                        lyrics: track.lyrics
                    }
                })
            })
        }
    })
}

trackController.getAllTracks = async(req,res) => {
    Track.find({}, (err, track) => {
        if(track){
            res.json(track)
        }
        if(err){
            res.json(err)
        }
    })
}

trackController.getTrackByTitle = async(req, res) => {
    const { title } = req.body;
    console.log(title);
    Track.find({ title }, (err, track) => {
        if(track){
            res.json(track)
        }
        if(err){
            res.json(err)
        }
    })
}

module.exports = trackController;