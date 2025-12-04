import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-country-top-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './country-top-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryTopMenu { }
