import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { List } from "../../components/list/country-list";
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, List],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService)
  query = signal('')

  queryValue(query: string){
    if (!query) return [];
    return firstValueFrom(this.countryService.searchByCapital(query))
  }

  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async ({ params }) => this.queryValue(params.query)
  })

}
