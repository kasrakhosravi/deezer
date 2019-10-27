
import * as Types from '../constants/ActionTypes';

export const fetchArtistRequest = () => ({
    type: Types.FETCH_ARTIST_REQUEST,
});

export const fetchArtistSuccess = (artist: any) => ({
    type: Types.FETCH_ARTIST_SUCCESS,
    payload: {
        artist
    }
});
