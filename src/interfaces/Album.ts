
export default interface IAlbum {
    id: number;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    title: string;
    release_date: Date;
    artist: {
        name: string;
        picture_small: string;
    }
}
