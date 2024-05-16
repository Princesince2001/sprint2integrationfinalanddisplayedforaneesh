// api.js
export function fetchCourses() {
    const backendEndpoint = "http://localhost:5199/lxp/view/course";
    const controller = new AbortController();
    const signal = controller.signal;

    return fetch(backendEndpoint, { signal })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch course data.");
            }
        })
        .then((data) => {
            if (Array.isArray(data.data)) {
                return data.data;
            } else {
                throw new Error("Fetched data is not an array.");
            }
        })
        .catch((error) => {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                console.error("Error fetching course data:", error);
            }
        });
}
