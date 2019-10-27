
import { clearAlbumTracks } from '../actions/AlbumActions';

const ClearAlbumTracks = () =>
    async (dispatch: Function) => {
        dispatch(clearAlbumTracks());
    };

export default ClearAlbumTracks;
