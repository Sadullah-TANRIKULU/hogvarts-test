import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`../styles.css`]
})
export class AppComponent {

  gryffindor: number = 0;
  hufflepuff: number = 0;
  ravenclaw: number = 0;
  slytherin: number = 0;


  title = 'hogwarts-test';
  questions = [
    { q: `Which season is your favourite?`, a1: `winter`, a2: `autumn`, a3: `spring`, a4: `summer` },
    { q: `Which is your favourite element?`, a1: `water`, a2: `fire`, a3: `earth`, a4: `air` },
    { q: `What is your favourite time of the day?`, a1: `dawn`, a2: `dusk`, a3: `midnight`, a4: `midday` },
    { q: `If you could visit any of these places, where would you most want to go?`, a1: `sunny flower fields`, a2: `mysterious rainforests`, a3: `high mountains`, a4: `endless beaches` }
  ];

  onSubmit(optionsForm: any) {
    switch (optionsForm.value.option) {
      case 'a1':
        this.gryffindor += 1;
        console.log('gryffindor :', this.gryffindor);
        
        break;
      case 'a2':
        this.hufflepuff += 1;
        console.log('hufflepuff :', this.hufflepuff);
        
        break;
      case 'a3':
        this.ravenclaw += 1;
        console.log('ravenclaw :', this.ravenclaw);
        
        break;
      case 'a4':
        this.slytherin += 1;
        console.log('slytherin :', this.slytherin);
        
        break;

      default:
        console.log('oooo you should choose at least one option!!!');
        
        break;
    };
  }

  onClick() {
    console.log(
      'gryffindor :', this.gryffindor,
      'hufflepuff :', this.hufflepuff,
      'ravenclaw :', this.ravenclaw,
      'slytherin :', this.slytherin
    );
    
    
  }



}
