function bgChange() {
    $('body').css({"background":"url('https://maps.googleapis.com/maps/api/streetview?size=2000x2000&location="+$('#address').val()+"&fov=90&heading=235&pitch=10&key=AIzaSyA2gsiXBZZs90Ha2DoPsCCMzmzvf8z8ZMM') no-repeat center center fixed","-webkit-background-size":"cover", "-moz-background-size":"cover", "-o-background-size":"cover", "background-size":"cover"})
}