x = document.getElementById("location");
function showPos() {
    if(navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Not Supported";
    };

};

function showPosition(position) {

    document.getElementById("get_location").setAttribute('src','https://maps.google.co.uk?q='+ position.coords.latitude + "," + position.coords.longitude + '&z=40&output=embed');

};