function initMap() {
    // Serbia
    const serbia = { lat: 45.2568184121202, lng: 19.847898726779675 };
    const mapSerbia = new google.maps.Map(document.getElementById("map-serbia"), {
        zoom: 12,
        center: serbia,
        mapTypeControl: false,
        streetViewControl: false
    });
    const marker = new google.maps.Marker({
        position: serbia,
        map: mapSerbia,
    });
    // Serbia
    const emirates = { lat: 24.29257661157355, lng: 54.50115990448002 };
    const mapEmirates= new google.maps.Map(document.getElementById("map-emirates"), {
        zoom: 10,
        center: emirates,
        mapTypeControl: false,
        streetViewControl: false
    });
    const marker1 = new google.maps.Marker({
        position: emirates,
        map: mapEmirates,
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function moveToHomePage() {
    location.replace("index.html");
}
