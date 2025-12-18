import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-code-not-found',
  imports: [],
  templateUrl: './code-not-found.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeNotFound {

  location = inject(Location)

  goBack(){
    this.location.back()
  }

}
