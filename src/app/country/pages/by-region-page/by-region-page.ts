import { Component } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { List } from "../../components/list/country-list";


@Component({
  selector: 'app-by-region-page',
  imports: [SearchInput, List],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage { }
