function initialize() {
    let initPos = new google.maps.LatLng(32.77158, 129.88385);
    let myOptions = {
      noClear : true,
      center : initPos,
      zoom : 14,
      mapTypeId : google.maps.MapTypeId.HYBRID // 航空写真+都市名や道路名を表示します
    };
    let map_canvas = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    let kmlUrl = "https://nobuta9999.org/kml2/2025-09-15konpirasan.kml"; 
       //KMLファイルの読み込みをnobuta9999.comから、 .org へﾃﾞｨﾚｸﾄﾘｰ変更した
    let kmlLayer = new google.maps.KmlLayer(kmlUrl, {preserveViewport:true});
    kmlLayer.setMap(map_canvas);

  }
  //ファイル変更　kmzからkml
  //　変数宣言をconst から 定数宣言let 変更