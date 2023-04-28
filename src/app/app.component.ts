import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`../styles.css`]
})
export class AppComponent {
  title = 'hogvarts-test';
  questions = [
    {q: `Which lorry is this?`, a1: `volkswagen`, a2: `mercedes`, a3: `ford`, a4: `audi`},
    {q: `Which bird is this?`, a1: `volkswagen`, a2: `mercedes`, a3: `ford`, a4: `audi`},
    {q: `Which mount is this?`, a1: `volkswagen`, a2: `mercedes`, a3: `ford`, a4: `audi`},
    {q: `Which cat is this?`, a1: `volkswagen`, a2: `mercedes`, a3: `ford`, a4: `audi`}
];

checked = false

onClick(val: boolean) {
 this.checked = val

 

}



}
