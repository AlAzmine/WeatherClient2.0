import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { City } from './country';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment.development';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-country-cities',
  standalone: true,
  imports: [RouterLink, MatTableModule],
  templateUrl: './country-cities.component.html',
  styleUrl: './country-cities.component.css'
})
export class CountryCitiesComponent {
  public cities: City[] = [];
  public displayedColumns: string[] = ["cityId", "name", "latitude", "longitude"]
  //serverurlswaggerui
  id: number;

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {
    this.id = -1;
  }

  ngOnInit() {
    this.getCities();
  }
  getCities() {
   let idparameter = this.activateRoute.snapshot.paramMap.get("id");
   this.id = idparameter? + idparameter : 0,
    this.http.get<City[]>(`${environment.baseUrl}api/countries/CountryCities/${this.id}`).subscribe(
      {
        next: result => this.cities = result, 
        error: error => console.error(error)
      }
    );
  }


}
