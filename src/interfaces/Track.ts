
import IArstist from './Artist';

export default interface Track {
    id: number,
    title: string,
    track_position: number,
    artist: IArstist,
    duration: number,
}
