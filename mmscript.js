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
      34.668024377861016,
      135.4307727723262,
      "./assets/img/yoshihouse.png",
      38,
      31,
    ],
    [
      "You Are Here",
      34.66763804451388,
      135.42979044498887,
      "./assets/img/pointer.png",
      30,
      47.8,
    ],
    [
      "Ghost House",
      34.66825633160138,
      135.43353012980901,
      "./assets/img/ghosthouse.png",
      40,
      48,
    ],
    [
      "Ghost House",
      34.66859681848616,
      135.4275558020745,
      "./assets/img/ghosthouse.png",
      40,
      48,
    ],
    [
      "Ghost House",
      34.66969182611654,
      135.4322132146896,
      "./assets/img/ghosthouse.png",
      40,
      48,
    ],
    [
      "Castle",
      34.66738241892456,
      135.4309079116888,
      "./assets/img/castle.png",
      40,
      53,
    ],
    [
      "Warp Pipe",
      34.66740716136074,
      135.4320280671954,
      "./assets/img/pipe.png",
      38,
      42.5,
    ],
    [
      "Warp Pipe",
      34.66734710808932,
      135.43053040885513,
      "./assets/img/pipe.png",
      38,
      42.5,
    ],
    [
      "Warp Pipe",
      34.66837293038833,
      135.4308719194534,
      "./assets/img/pipe.png",
      38,
      42.5,
    ],
    [
      "Warp Pipe",
      34.66898760353658,
      135.42917426533404,
      "./assets/img/pipe.png",
      38,
      42.5,
    ],
    [
      "Star World",
      34.666777201318055,
      135.43019879712025,
      "./assets/img/star.png",
      38,
      38,
    ],
    [
      "Donut Plains",
      34.669524929977456,
      135.4317083729398,
      "./assets/img/hill.png",
      50,
      60.7,
    ],
    [
      "Donut Plains",
      34.66847563309339,
      135.43245436928734,
      "./assets/img/hill.png",
      50,
      60.7,
    ],
    [
      "Donut Plains",
      34.66764012499393,
      135.4327946680466,
      "./assets/img/hill.png",
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
