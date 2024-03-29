import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  //serverurlswaggerui
  baseUrl = "http://localhost:5256/";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
  }
  getForecasts() {
    this.http.get<WeatherForecast[]>(this.baseUrl +'weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

 // title = 'angularappproj.client';


}
