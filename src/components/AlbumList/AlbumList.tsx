
// global dependencies
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';

import Map from 'sequences/Map';
import FromArray from 'sequences/FromArray';
import ToArray from 'sequences/ToArray';

// local dependencies
import IAlbum from '../../interfaces/Album';
import AlbumListItem from '../AlbumListItem'

interface IProps {
    albums: Array<IAlbum>,
    next: string,
    prev: string,
    total: number,
    selectedAlbum: IAlbum,
    onSelectAlbum: any,
    paginateAlbums: any,
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
            prev,
            total,
            selectedAlbum,
            onSelectAlbum,
            paginateAlbums,
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

        const prevAlbumsView = prev ? (
            <Button
                className="mr-2"
                onClick={() => paginateAlbums(prev)}
            >
                Previous
            </Button>
        ) : null;

        const nextAlbumsView = next ? (
            <Button
                className="mr-2"
                onClick={() => paginateAlbums(next)}
            >
                Next
            </Button>
        ) : null;

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
                <Row className="text-center mt-3 mb-5">
                    <Col xs={12}>
                        {prevAlbumsView}
                        {nextAlbumsView}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AlbumList;
