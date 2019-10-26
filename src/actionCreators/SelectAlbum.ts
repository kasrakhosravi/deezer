
import FetchSingleAlbum from './FetchSingleAlbum';
import FetchAlbumTracks from './FetchAlbumTracks';

// selector
export default (id: any) => {
    let thunk = async (dispatch: Function) => {

        dispatch(FetchSingleAlbum(id));
        dispatch(FetchAlbumTracks(id));
    };

    return thunk;
};
