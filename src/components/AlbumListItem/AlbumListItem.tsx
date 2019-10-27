
// global dependencies
import React, { Component } from 'react';
import { Col } from 'reactstrap';

// local dependencies
import IAlbum from '../../interfaces/Album';
import './AlbumListItem.scss';

interface IProps {
    album: IAlbum,
    onSelectAlbum: Function,
    className: String,
}

class AlbumListItem extends Component<IProps> {

    static defaultProps = {
        className: '',
    };

    // local methods
    onClick = () => {
        const { album, onSelectAlbum } = this.props;
        onSelectAlbum(album.id);
    };

    render() {

        // initialization
        const { album, className } = this.props;

        return (
            <div
                className={`album-list-item ${className}`}
                onClick={this.onClick}
            >
                <img src={album.cover_medium} alt="" />
                <div className="album-list-item-title">{album.title}</div>
            </div>
        );
    }
}

export default AlbumListItem;
