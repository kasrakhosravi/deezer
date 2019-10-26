
// global dependencies
import React, { Component } from 'react';

import Map from 'sequences/Map';
import FromArray from 'sequences/FromArray';
import ToArray from 'sequences/ToArray';

// local dependencies
import IAlbum from '../../interfaces/Album';
import AlbumListItem from '../AlbumListItem'

interface IProps {
    albums: Array<IAlbum>,
    selectedAlbum: IAlbum,
    onAlbumSelected: Function,
}

class AlbumList extends Component<IProps> {

    static defaultProps = {
        selectedAlbum: null,
    };

    render() {

        // initialization
        const {
            albums,
            selectedAlbum,
            onAlbumSelected,
        } = this.props;

        console.log('PROPS', this.props);

        // local components
        const albumListItemView = (album: IAlbum) => (
            <AlbumListItem
                className={(selectedAlbum && selectedAlbum.id === album.id ? 'is-active' : '')}
                album={album}
                key={album.id}
                onAlbumSelected={onAlbumSelected}
            />
        );


        const albumsView =
            FromArray(albums)
            .pipe(Map, (album: IAlbum) => albumListItemView(album))
            .pipe(ToArray)
            .read();

        return (
            <div>
                {albumsView}
            </div>
        );
    }
}

export default AlbumList;
