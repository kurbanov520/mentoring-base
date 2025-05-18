import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {RemoveDishesPipe} from "./pipes/remove-dishes.pipe";
import {UserCardYellowDirective} from "./directives/user-card-yellow.directive";


const itemNames = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда']

const upperItemNames = itemNames.map (
  (name) => {
    return name.toUpperCase()
  }
)

const newPages = ['5', '4', '3', '2', '1']



const myFunc = (name: string) => {
  return name
}

const copyMyFunc = myFunc('О компании')



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, RouterLink, RemoveDishesPipe, UserCardYellowDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog2 = true;

  isShowCatalog = true;

  isShowPhoto = true

  readonly headerItem1 = 'Главная';

  readonly headerItem2 = 'О компании';

  readonly headerItem3 = 'Каталог';

  readonly header2Item1 = upperItemNames[0];

  readonly header2Item2 = 'Стройматериалы';

  readonly header2Item3 = 'Инструменты';

  readonly header2Item4 = 'Электрика';

  readonly header2Item5 = 'Интерьер и одежда';

  copyUpperItemNames = upperItemNames

  copyNewPages = newPages

  copyCopyMyFunc = copyMyFunc

  isUpperCase = true

  changeMenuText() {
    this.copyUpperItemNames = upperItemNames.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )

    this.isUpperCase = !this.isUpperCase
  }

  readonly numberPhone: string = "+7 (965) 084-29-29"

}

