const w = window.innerWidth;
const h = window.innerHeight;

const map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.5666805, 126.9784147),
    zoom: 11,
    size : new naver.maps.Size(w,h)
});

function MarkParkiglot(parkingCode){
    response = fetch("http://openapi.seoul.go.kr:8088/75506a6646676d6c3131326d6272476c/json/GetParkInfo/1/5/ /"+parkingCode)
    .then((response) =>response.json())
    .then((data)=>{
        parsedData = data.GetParkInfo.row[0];

        var marker1 = new naver.maps.Marker({
            position: new naver.maps.LatLng(parsedData.LAT, parsedData.LNG),
            map: map});
    });
}

MarkParkiglot(1033125);
MarkParkiglot(1041839);
MarkParkiglot(1163833);




