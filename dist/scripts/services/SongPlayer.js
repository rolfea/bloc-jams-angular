(function() {
  function SongPlayer() {
    var SongPlayer = {};

    /**
    * @desc Song object
    * @type {Object}
    */

    var currentSong = null;

    /**
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;

    /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */

    var setSong = function(song) {
      if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      currentSong = song;
    };

    /**
    * @function playSong
    * @desc Plays the currently loaded Buzz Object and sets the song.playing status to 'true'
    * @param {Object} song
    */

    var playSong = function(song) {
      if (currentBuzzObject) {
        currentBuzzObject.play();
        song.playing = true;
      }
    }

    /**
    * @function SongPlayer.play
    * @desc if the passed song Object is not the currentSong, it plays the song, else it unpauses
    * @param {Object} song
    */

    SongPlayer.play = function(song) {
      if (currentSong !== song) {
        setSong(song);
        playSong(song);
      } else if (currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          currentBuzzObject.play();
          song.playing = true;
        }
      }
    };

    /**
    * @function SongPlayer.pause
    * @desc pauses the currentBuzzObject and sets the song.playing status to false
    * @param {Object} song
    */

    SongPlayer.pause = function(song) {
      currentBuzzObject.pause();
      song.playing = false;
    }

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
