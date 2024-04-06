export interface Country {
    countryId: number;
    name: string;
    iso2: string;
    iso3: string;
    

}

export interface City {
    cityid: number;
    latitude: number;
    longitude: number;
    countryId: number;
    name: string;
    population: number;
    country: string;
}
