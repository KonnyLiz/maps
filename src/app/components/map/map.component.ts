import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // apiLoaded: Observable<boolean>

  constructor(
    private http: HttpClient
  ) {
    // this.apiLoaded = this.http.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDVhBz-lR0r853Ayp6va7p0ZMHhJHFUnJs', 'callback')
    //   .pipe(
    //     map(() => true),
    //     catchError(() => of(false)),
    //   );
  }

  ngOnInit(): void {
  }

}
