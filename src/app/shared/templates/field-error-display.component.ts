import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ast-field-error-display',
  template: `<div *ngIf="displayError" >
                <div class="e-error">
                    {{ errorMsg }}
                </div>
            </div>`,
  styleUrls: ['field-error-display.component.scss']
})
export class FieldErrorDisplayComponent {

  @Input() errorMsg: string;
  @Input() displayError: boolean;

}
