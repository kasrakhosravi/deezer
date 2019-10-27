
export const SEARCH_ARTIST_URL = `/api/search/artist?q=:keyword&offset=0&limit=5`;
export const ARTIST_URL = `/api/artist/:id`;
export const ARTIST_ALBUMS_URL = `${ARTIST_URL}/albums?limit=4`;
export const ALBUM_URL = `/api/album/:id`;
export const ALBUM_TRACKS_URL = `${ALBUM_URL}/tracks`;
