
// global dependencies
import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

import Map from 'sequences/Map';
import FromArray from 'sequences/FromArray';
import ToArray from 'sequences/ToArray';

// local dependencies
import IAlbum from '../../interfaces/Album';
import AlbumListItem from '../AlbumListItem'

interface IProps {
    albums: Array<IAlbum>,
    selectedAlbum: IAlbum,
    onSelectAlbum: Function,
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
            onSelectAlbum,
        } = this.props;

        // local components
        const albumListItemView = (album: IAlbum) => (
            <AlbumListItem
                className={(selectedAlbum && selectedAlbum.id === album.id ? 'is-active' : '')}
                album={album}
                key={album.id}
                onSelectAlbum={onSelectAlbum}
            />
        );


        const albumsView =
            FromArray(albums)
            .pipe(Map, (album: IAlbum) => albumListItemView(album))
            .pipe(ToArray)
            .read();

        return (
            <React.Fragment>
                {albumsView}
            </React.Fragment>
        );
    }
}

export default AlbumList;
