import { Component } from '@angular/core';
import { User } from './user';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics = [ 'Angular', 'React',  'Vue'];
  topicHasError = true;

  userModel = new User('Rob', 'rob@test.com', 1112223333, 'default', 'morning', true );

  validateTopic(value){
    if (value === 'default'){
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
}
