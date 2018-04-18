import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-button',
  template: `
    <div [formGroup]="group">
      <button [type]="config.type">{{ config.label }}</button>
    </div>
  `,
})
/*
 * Created by Silva Neto, this component have responsability the button of submit
 */
export class FormButtonComponent {
  config;
  group: FormGroup;
}