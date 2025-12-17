import { RESTCountry } from './../interfaces/rest-countries.interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
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

   searchByCapital(query:string):Observable<Country[]> {
    query = query.toLowerCase()

   return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
   .pipe(
    map( resp => CountryMapper.mapRestCountrytoArray(resp)),
    catchError((error) => {
      console.log('Error fetching ', error)

      return throwError(
        () => new Error(`No se han encontrado capital con ${query}`)
      )
    })
   )
   }

    searchByCountry(query:string):Observable<Country[]> {
    query = query.toLowerCase()

   return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
   .pipe(
    map( resp => CountryMapper.mapRestCountrytoArray(resp)),
    catchError((error) => {
      console.log('Error fetching ', error)

      return throwError(
        () => new Error(`No se han encontrado país con ${query}`)
      )
    })
   )
   }

}
