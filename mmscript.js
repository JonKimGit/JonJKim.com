function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.66777691421453, lng: 135.43060100165303 },
    zoom: 18,
    mapId: "1b013e337275b8be",
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  const markers = [
    [
      "Yoshi's House",
      34.66793507394518,
      135.43014347466126,
      "./assets/img/yoshihouse.png",
      38,
      31,
    ],
    [
      "You Are Here",
      34.66767112713121,
      135.4297887322531,
      "./assets/img/pointer.png",
      30,
      47.8,
    ],
    [
      "Ghost House",
      34.66832715150856,
      135.43292762674864,
      "./assets/img/ghosthouse.png",
      40,
      48,
    ],
    [
      "Castle",
      34.66775608022106,
      135.43139547897843,
      "./assets/img/castle.png",
      40,
      53,
    ],
    [
      "Warp Pipe",
      34.66739738878135,
      135.43225049775214,
      "./assets/img/pipe.png",
      38,
      42.5,
    ],
    [
      "Star World",
      34.667959023359266,
      135.42866400953733,
      "./assets/img/star.png",
      38,
      38,
    ],
    [
      "Donut Plains",
      34.66830355359945,
      135.4320565322381,
      "./assets/img/hill.png",
      50,
      60.7,
    ],
    [
      "Donut Plains",
      34.66829411443392,
      135.43231361996433,
      "./assets/img/hill.png",
      50,
      60.7,
    ],
    [
      "Donut Plains",
      34.6683781779677,
      135.43217016043528,
      "./assets/img/hill/png",
      50,
      60.7,
    ],
  ];

  for (let i = 0; i < markers.length; i++) {
    const currentMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currentMarker[1], lng: currentMarker[2] },
      map,
      title: currentMarker[0],
      icon: {
        url: currentMarker[3],
        scaledSize: new google.maps.Size(currentMarker[4], currentMarker[5]),
      },
      animation: google.maps.Animation.DROP,
    });
    const infowindow = new google.maps.InfoWindow({
      content: currentMarker[0],
    });
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}
