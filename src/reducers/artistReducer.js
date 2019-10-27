import * as types from '../constants/ActionTypes';

const initialState = {
  artist: {},
  artistLoading: false,
  albums: [],
  albumsLoading: false,
  selectedAlbum: null,
  selectedAlbumTracks: [],
};

export default function artistReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCH_ARTIST_REQUEST:
      return {
        ...state,
        artistLoading: true,
      };

    case types.FETCH_ARTIST_SUCCESS:
      return {
        ...state,
        artist: action.payload.artist,
        artistLoading: false,
      };

    case types.FETCH_ALL_ALBUMS_REQUEST:
      return {
        ...state,
        albumsLoading: true,
      };

    case types.FETCH_ALL_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.payload.albums,
        next: action.payload.next,
        prev: action.payload.prev,
        total: action.payload.total,
        albumsLoading: false,
      };

    case types.FETCH_SINGLE_ALBUM_REQUEST:
      return {
        ...state,
      };

    case types.FETCH_SINGLE_ALBUM_SUCCESS:
      return {
        ...state,
        selectedAlbum: action.payload.album,
      };

    case types.FETCH_ALBUM_TRACKS_REQUEST:
      return {
        ...state,
      };

    case types.FETCH_ALBUM_TRACKS_SUCCESS:
      return {
        ...state,
        selectedAlbumTracks: action.payload.tracks,
      };

    case types.CLEAR_ALBUM_TRACKS:
      return {
        ...state,
        selectedAlbumTracks: [],
      };

    default:
      return state;
  }
}
