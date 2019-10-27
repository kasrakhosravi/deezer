
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
          <Col xs={6} sm={6} md={3} lg={3} xl={3} className="p-0 m-0">
              <div
                  className={`album-list-item ${className}`}
                  onClick={this.onClick}
              >
                  <img
                      src={album.cover_medium}
                      alt=""
                      className={`album-list-item-image ${className}`}
                  />
                  <div className="album-list-item-title">
                      {album.title}
                  </div>
              </div>
          </Col>
        );
    }
}

export default AlbumListItem;
