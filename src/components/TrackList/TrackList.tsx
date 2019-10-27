
// global dependencies
import React, { Component } from 'react';
import moment from 'moment';
import 'moment-duration-format';

// local dependencies
import IAlbum from '../../interfaces/Album';
import ITrack from '../../interfaces/Track';

interface IProps {
    tracks: Array<ITrack>,
    album: IAlbum,
}

class AlbumList extends Component<IProps> {

    render() {

        // initialization
        const { tracks, album } = this.props;

        console.log('track props', this.props);

        // local components
        const tracksView = (tracks: Array<ITrack>, album: IAlbum) => (
            <table className="track-list">
                <caption>{album.title}</caption>
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
                        <td>{track.track_position}</td>
                        <td>{track.title}</td>
                        <td>{track.artist.name}</td>
                        <td>{moment.duration(track.duration, 'minutes').format('h:mm')}</td>
                        <td>{moment(album.release_date).format('YYYY')}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );

        return (
            <div>
                {tracksView(tracks, album)}
            </div>
        );
    }
}

export default AlbumList;
