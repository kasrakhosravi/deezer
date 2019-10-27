
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

        const newTracksView = (tracks: Array<ITrack>, album: IAlbum) => (
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
                        <td>{track.track_position}</td>
                        <td>{track.title}</td>
                        <td>{track.artist.name}</td>
                        <td>{moment.duration(track.duration, 'minutes').format('h:mm')}</td>
                        <td>{moment(album.release_date).format('YYYY')}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        );

        return (
            <React.Fragment>
                {newTracksView(tracks, album)}
            </React.Fragment>
        );
    }
}

export default AlbumList;
