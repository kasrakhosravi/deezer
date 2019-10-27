
import * as Types from '../constants/ActionTypes';

export const fetchAllAlbumsRequest = () => ({
    type: Types.FETCH_ALL_ALBUMS_REQUEST,
});

export const fetchAllAlbumsSuccess = (albums: any, next: any, total: number) => ({
    type: Types.FETCH_ALL_ALBUMS_SUCCESS,
    payload: {
        albums,
        next,
        total,
    }
});

export const fetchSingleAlbumRequest = () => ({
    type: Types.FETCH_SINGLE_ALBUM_REQUEST,
});

export const fetchSingleAlbumSuccess = (album: any) => ({
    type: Types.FETCH_SINGLE_ALBUM_SUCCESS,
    payload: {
        album
    }
});

export const fetchAlbumTracksRequest = () => ({
    type: Types.FETCH_ALBUM_TRACKS_REQUEST,
});

export const fetchAlbumTracksSuccess = (tracks: any) => ({
    type: Types.FETCH_ALBUM_TRACKS_SUCCESS,
    payload: {
        tracks
    }
});

export const clearAlbumTracks = () => ({
    type: Types.CLEAR_ALBUM_TRACKS,
});


