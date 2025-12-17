import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { List } from "../../components/list/country-list";
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-by-country-page',
  imports: [ SearchInput, List],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {

  countryService = inject(CountryService)
  query = signal('')

  queryValue(query: string){
    if (!query) return [];
    return firstValueFrom(this.countryService.searchByCountry(query))
  }

  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async ({ params }) => this.queryValue(params.query)
  })

}
