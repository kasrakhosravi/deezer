
export const SEARCH_ARTIST_URL = `/search/artist?q=:keyword&offset=0&limit=5`;
export const ARTIST_URL = `/artist/:id`;
export const ARTIST_ALBUMS_URL = `${ARTIST_URL}/albums?limit=4`;
export const ALBUM_URL = `/album/:id`;
export const ALBUM_TRACKS_URL = `${ALBUM_URL}/tracks`;
