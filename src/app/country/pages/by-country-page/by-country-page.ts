import { Component } from '@angular/core';
import { CountryTopMenu } from "../../components/country-top-menu/country-top-menu";
import { RouterOutlet } from '@angular/router';
import { SearchInput } from "../../components/search-input/search-input";
import { List } from "../../components/list/country-list";


@Component({
  selector: 'app-by-country-page',
  imports: [CountryTopMenu, RouterOutlet, SearchInput, List],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage { }
