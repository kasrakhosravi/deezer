
import * as Types from '../constants/ActionTypes';

export const FetchArtistRequest = () => ({
    type: Types.FETCH_ARTIST_REQUEST,
});

export const FetchArtistSuccess = (artist: any) => ({
    type: Types.FETCH_ARTIST_SUCCESS,
    payload: {
        artist
    }
});

