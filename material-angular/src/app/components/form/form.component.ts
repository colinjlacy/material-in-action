import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  private firstName: string;
  private middleName: string;
  private lastName: string;
  private age: number;

  constructor() {}

  onSubmit() {
    console.log('entries', {
      firstName: this.firstName,
      lastName: this.lastName,
      middleName: this.middleName,
      age: this.age
    })
  }

}
