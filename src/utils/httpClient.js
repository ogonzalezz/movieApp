const API = "https://api.themoviedb.org/3/";

export function get(path) {
    return fetch(API + path, {
            headers: {
                Authorization: 
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmYwYmVjNzY2ZTlhNDczMGRlYzIxZDVmYTAwOGVmOSIsInN1YiI6IjYyMDdlYWUzOTQ1ZDM2MDBiMzgxMDNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmCY3GP_npue8foQFkyo3iXkh-AdwPqhXKo0Sv82SP0",
                    "Content-Type": "application/json; charset=utf-8",
            },
    }).then(result => result.json())
}