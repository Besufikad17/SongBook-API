const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');
const artistController = require('../controller/ArtistController');
const trackController = require('../controller/TrackController');
const albumController = require('../controller/AlbumController');

//user end points

router.post('/signup', userController.signup);

router.post('/login', userController.login);

//artist end points

router.post('/addArtist', artistController.addArtist);

router.get('/artists', artistController.getAllArtists);

router.get('/artist', artistController.getArtistByName);

//track end points

router.post('/addTrack', trackController.addTrack);

router.get('/tracks', trackController.getAllTracks);

router.get('/track', trackController.getTrackByTitle);

//album end points

router.post('/addAlbum', albumController.addAlbum);

router.get('/albums', albumController.getAllAlbums);

router.get('/album', albumController.getAlbumByTitle);

module.exports = router;
