import { Component, inject, signal } from '@angular/core';
import { CountryTopMenu } from "../../components/country-top-menu/country-top-menu";
import { RouterOutlet } from '@angular/router';
import { SearchInput } from "../../components/search-input/search-input";
import { List } from "../../components/list/country-list";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries.interfaces';


@Component({
  selector: 'app-by-capital-page',
  imports: [ SearchInput, List],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService)
  isLoading = signal(false)
  isError = signal<string|null>(null)
  countries = signal<RESTCountry[]>([])

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
