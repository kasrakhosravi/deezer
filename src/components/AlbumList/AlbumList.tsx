
// global dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Map from 'sequences/Map';
import FromArray from 'sequences/FromArray';
import ToArray from 'sequences/ToArray';

// local dependencies
import IAlbum from '../../interfaces/Album';
import AlbumListItem from '../AlbumListItem'

interface IProps {
    albums: Array<IAlbum>,
    next: string,
    total: number,
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
            next,
            total,
            selectedAlbum,
            onSelectAlbum,
        } = this.props;

        console.log('AlbumList props', this.props);

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
            <Container noGutters>
                <Row className="p-0 m-0">
                    <Col xs={12} className="p-0 m-0">
                        <h5>Albums Found ({total})</h5>
                        <hr />
                    </Col>
                </Row>
                <Row className="p-0 m-0">
                    {albumsView}
                </Row>
            </Container>
        );
    }
}

export default AlbumList;
