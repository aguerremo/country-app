import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { CountryService } from '../../../services/country.service';
import { Country } from '../../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-information-content',
  imports: [DecimalPipe],
  templateUrl: './country-information.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryInformation {

  country = input.required<Country>() //
}
