function setup() {
    noCanvas();

    let randomNumber = floor(random(6)) + 1;
    let vid = createVideo('motivator/' + randomNumber + '.mp4');

    vidLoad();

    function vidLoad() {
        vid.loop();
        vid.volume(1);
        vid.autoplay;
        vid.size(windowWidth, windowHeight);
        vid.position(0, 0);
      }
}