
const callApi = (url: string) =>
    fetch(url)
        .then(
            response => (response.ok
                    ? response.json()
                    : Promise.reject(response.text())
            ),
            error => Promise.reject(error),
        )
        .then(
            json => ({json}),
            error => (error)
        );

export default callApi;
