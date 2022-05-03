const Album = require('../models/AlbumModel');
const albumController = {};

albumController.addAlbum = async(req, res) => {
    const { title, artist, date_of_release, img_url, tracks } = req.body;

    if(!title || !artist || !date_of_release || !img_url || !tracks){
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    Album.findOne({title: title, artist: artist})
    .then(album => {
        if(album){
            return res.status(400).json({msg: 'Album already exists!!'});
        }else{
            const newAlbum = new Album({
                title,
                artist,
                date_of_release,
                img_url,
                tracks
            })
            newAlbum.save().
            then(album => {
                res.json({
                    album: {
                        title: album.title,
                        artist: album.artist,
                        date_of_release: album.date_of_release,
                        img_url: album.img_url,
                        tracks: album.tracks
                    }
                })
            })
        }
    })

}

albumController.getAllAlbums = async(req, res) => {
    Album.find({}, (err, album) => {
        if(album){
            res.json(album)
        }
        if(err){
            res.json(err)
        }
    })
}

albumController.getAlbumByTitle = async(req, res) => {
    const { title } = req.body;

    Album.findOne({title})
    .then(album => {
        res.json(album);
    })
    .catch(err => {
        res.json(err);
    })
}

module.exports = albumController;
