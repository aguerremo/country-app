import { RESTCountry } from './../interfaces/rest-countries.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mapper/country.mapper';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() {
    console.log('Service on!')
   }

   private http = inject(HttpClient)

   searchByCapital(query:string) {
    query = query.toLowerCase()

   return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
   .pipe(
    delay(1000),
    map( resp => CountryMapper.mapRestCountrytoArray(resp)),
    catchError((error) => {
      console.log('Error fetching ', error)

      return throwError(
        () => new Error(`No se han encontrado capital con ${query}`)
      )
    })
   )
   }

    searchByCountry(query:string) {
    query = query.toLowerCase()

   return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
   .pipe(
    delay(1000),
    map( resp => CountryMapper.mapRestCountrytoArray(resp)),
    catchError((error) => {
      console.log('Error fetching ', error)

      return throwError(
        () => new Error(`No se han encontrado país con ${query}`)
      )
    })
   )
   }

   searchCountryByCode(code: string) {

   return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
   .pipe(
    map( resp => CountryMapper.mapRestCountrytoArray(resp)),
    map(countries => countries.at(0)),
    catchError((error) => {
      console.log('Error fetching ', error)

      return throwError(
        () => new Error(`No se han encontrado país con ${code}`)
      )
    })
   )
   }
}
