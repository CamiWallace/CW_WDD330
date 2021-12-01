export function getJSON(url){
    return fetch(url)
        .then(response => {
            // handle the response
            (!response.ok) ? Error(response.statusText)  : response.json();

        })
        .catch(error => {
            // handle the error
            console.log(error);
        });

}

export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};