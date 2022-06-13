import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { GooglePlaceModule,GooglePlaceDirective } from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {


//@ViewChild('map') mapElement: ElementRef;
@ViewChild('placesRef') placesRef: GooglePlaceDirective;
@ViewChild('map', { static: false }) mapElement: ElementRef;
ds: google.maps.DirectionsService;
dr: google.maps.DirectionsRenderer;
map: any;
latitude = 7.448153415867239;
longitude = 80.72284109804686;
markerPositions: any = [];
infoWindows: any;
marker: any;
content: any;
position: any;
userAddressFrom = '';
userAddressTo = '';
userLatitude0: any = 7.2;
userLongitude0: any = 80;
dir: any = {};
userLatitude: any = {};
userLongitude: any = {};
time: any;
distance: any;
userLatitude1: any = {};
userLongitude1: any = {};
userData: any = {};
address: any = {};
geoCoder: any = {};
searchBox: any;
zoom: number;
empRequest: any = {};
constructor() {}

ngOnInit(): void {
  this.userData = JSON.parse(localStorage.getItem('user') || '{}');
  this.setCurrentLocation();
}



from(address: any) {
  console.log('1', address);
  this.userAddressFrom = address.formatted_address;
  this.userLatitude = address.geometry.location.lat();
  this.userLongitude = address.geometry.location.lng();
  console.log('dammika', this.userAddressFrom);
  this.markerPositions.push({
    lat: this.userLatitude,
    lng: this.userLongitude,
  });
}

to(address: any) {
  this.userAddressTo = address.formatted_address;
  this.userLatitude1 = address.geometry.location.lat();
  this.userLongitude1 = address.geometry.location.lng();
  this.markerPositions.push({
    lat: this.userLatitude1,
    lng: this.userLongitude1,
  });
  console.log(this.userAddressTo);
  console.log(this.userLatitude1, this.userLongitude1);
}
private setCurrentLocation() {
  console.log('setCurrentLocation');
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.zoom = 8;

      this.markerPositions.push({
        lat: this.latitude,
        lng: this.longitude,
      });
    });
    console.log(this.markerPositions);
  }
}
 // eslint-disable-next-line @typescript-eslint/member-ordering
 setRoutePolyline() {
  console.log('setRoutePolyline');
  this.dir = {
    origin: { lat: this.userLatitude, lng: this.userLongitude },
    destination: { lat: this.userLatitude1, lng: this.userLongitude1 },
    travelMode: google.maps.TravelMode.DRIVING,
  };

  this.ds = new google.maps.DirectionsService();
  this.dr = new google.maps.DirectionsRenderer();
  this.dr.setMap(this.map);
  this.ds.route(this.dir, (res, status) => {
    if (status === google.maps.DirectionsStatus.OK) {
      this.dr.setDirections(res);
      console.log(res);
      this.distance = res.routes[0].legs[0].distance.text;
      this.time = res.routes[0].legs[0].duration.text;
      console.log(this.distance, this.time);
    }
  });
}

}
