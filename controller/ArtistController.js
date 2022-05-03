const Artist = require('../models/ArtistModel');
const artistController = {};

artistController.addArtist = async(req, res) => {
    const { full_name, albums, img_url, tracks } = req.body;

    if(!full_name || !albums || !img_url || !tracks){
        return res.status(400).json({ msg: 'Please enter all fields' });   
    }

    Artist.findOne({full_name})
    .then(artist => {
        if(artist){
            return res.status(400).json({msg: 'Artist already exists!!'});
        }else{
            const newArtist = new Artist({
                full_name,
                albums,
                img_url,
                tracks
            })
            newArtist.save().
            then(artist => {
                res.json({
                    artist: {
                        full_name: artist.full_name,
                        albums: artist.albums,
                        img_url: artist.img_url,
                        tracks: artist.tracks
                    }
                })
            })
        }
    })
}

artistController.getAllArtists = async(req,res) => {
    Artist.find({}, (err, artist) => {
        if(artist){
            res.json(artist)
        }
        if(err){
            res.json(err)
        }
    })
}

artistController.getArtistByName = async(req, res) => {
    const { full_name } = req.body;
    console.log(full_name);
    Artist.find({ full_name }, (err, artist) => {
        if(artist){
            res.json(artist)
        }
        if(err){
            res.json(err)
        }
    })
}

module.exports = artistController;