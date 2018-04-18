import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <dynamic-form [config]="config" (submitted)="formSubmitted($event)"></dynamic-form>
    </div>
  `,
})
export class AppComponent {

  formSubmitted(value) {
    console.log(value);
  }

  config = [
    {
      field: 'input',
      label: 'Email',
      type: 'email',
      value: '',
      name: 'name',
      placeholder: 'entre com seu email',
    },
    {
      field: 'input',
      label: 'Senha',
      type: 'password',
      value: '',
      name: 'name',
      placeholder: '',
    },
    {
      field: 'select',
      label: 'Favourite food',
      name: 'food',
      value: '',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
    },
    {
      label: 'Submit',
      type: 'submit',
      value: '',
      name: 'submit',
      field: 'button',
    }
  ];
}