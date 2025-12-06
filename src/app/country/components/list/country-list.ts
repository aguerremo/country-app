import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-countries.interfaces';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class List {

  countries = input<RESTCountry[]>([])
 }
