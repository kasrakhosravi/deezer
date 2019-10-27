
// global dependencies
import React, { Component } from 'react';
import moment from 'moment';
import { Table } from 'reactstrap';
import 'moment-duration-format';

// local dependencies
import IAlbum from '../../interfaces/Album';
import ITrack from '../../interfaces/Track';
import './TrackList.scss';

interface IProps {
    tracks: Array<ITrack>,
    album: IAlbum,
}

class AlbumList extends Component<IProps> {

    render() {

        // initialization
        const { tracks, album } = this.props;

        // local components
        const tracksView = (tracks: Array<ITrack>, album: IAlbum) => (
          <React.Fragment>
              <div className="TrackListAlbum">
                <img
                    src={album.cover_medium}
                    alt=""
                />
                  <div>
                      <p className="TrackListAlbumTitle">
                          {album.title}
                      </p>
                      <div className="TrackListAlbumArtist">
                          <img
                              className="rounded-circle"
                              src={album.artist.picture_small}
                              alt=""
                          />
                          <p className="TrackListAlbumArtistName">
                              {album.artist.name}
                          </p>
                      </div>
                  </div>
              </div>
              <Table dark responsive borderless striped className="TrackListTable">
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Artist</th>
                      <th>Time</th>
                      <th>Released</th>
                  </tr>
                  </thead>
                  <tbody>
                  {tracks.map(track => (
                      <tr key={track.id}>
                          <td className="TrackListTable__narrow-cel">{track.track_position}</td>
                          <td className="TrackListTable__wide-cel">{track.title}</td>
                          <td className="TrackListTable__wide-cel">{track.artist.name}</td>
                          <td className="TrackListTable__narrow-cel">{moment.duration(track.duration, 'minutes').format('h:mm')}</td>
                          <td className="TrackListTable__narrow-cel">{moment(album.release_date).format('YYYY')}</td>
                      </tr>
                  ))}
                  </tbody>
              </Table>
          </React.Fragment>
        );

        return (
            <React.Fragment>
                {tracksView(tracks, album)}
            </React.Fragment>
        );
    }
}

export default AlbumList;
