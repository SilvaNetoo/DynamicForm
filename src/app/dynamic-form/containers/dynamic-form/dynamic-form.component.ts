import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dynamic-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="submitted.emit(form.value)">
      <ng-container *ngFor="let field of config;" dynamicField [config]="field" [group]="form"></ng-container>
    </form>
  `
})
/**
 * Created by Silva Neto, this component is
 * reponsability for view the field of skeleton of the form
 */
export class DynamicFormComponent implements OnInit {

  @Input() // Responsible for the input of the config form
  config: any[] = [];

  @Output() // Responsible for the output of the form response
  submitted: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(
      control => {
        group.addControl(
          control.name, this.fb.control(control.value)
        );
      }
    );
    return group;
  }
}
