import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInput {

  value = output<string>()

  placeholder = input('Buscar')

  onSearch(value:string){
    console.log(value)
  }

}
