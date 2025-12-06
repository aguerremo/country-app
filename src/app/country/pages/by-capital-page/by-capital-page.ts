import { Component, inject } from '@angular/core';
import { CountryTopMenu } from "../../components/country-top-menu/country-top-menu";
import { RouterOutlet } from '@angular/router';
import { SearchInput } from "../../components/search-input/search-input";
import { List } from "../../components/list/country-list";
import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-by-capital-page',
  imports: [ SearchInput, List],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService)

  onSearch(query: string) {
    this.countryService.getCountry(query)
      .subscribe(resp => {
        console.log(resp)
      })
  }

}
