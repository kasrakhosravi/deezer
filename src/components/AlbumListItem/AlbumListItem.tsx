
// global dependencies
import React, { Component } from 'react';

// local dependencies
import IAlbum from '../../interfaces/Album';

interface IProps {
    album: IAlbum,
    onAlbumSelected: Function,
    className: String,
}

class AlbumListItem extends Component<IProps> {

    static defaultProps = {
        className: '',
    };

    // local methods
    onClick = () => {
        const { album, onAlbumSelected } = this.props;
        onAlbumSelected(album.id);
    };

    render() {

        // initialization
        const { album, className } = this.props;

        return (
            <div
                className={`album-list-item ${className}`}
                onClick={this.onClick}
                role="presentation"
            >
                <img src={album.cover_big} alt="" />
                <div className="album-list-item-title">{album.title}</div>
            </div>
        );
    }
}

export default AlbumListItem;
