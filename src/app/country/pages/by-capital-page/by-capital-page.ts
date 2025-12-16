import { Component, inject, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { List } from "../../components/list/country-list";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, List],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService)
  isLoading = signal(false)
  isError = signal<string | null>(null)
  countries = signal<Country[]>([])

  onSearch(query: string) {
    if (this.isLoading()) {
      return
    }

    this.countryService.getCountry(query)
      .subscribe(country => {

        this.isLoading.set(false)
        this.countries.set(country)

        console.log(country)
      })
  }

}
