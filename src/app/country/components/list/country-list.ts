import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class List {

  countries = input<Country[]>([])
}
