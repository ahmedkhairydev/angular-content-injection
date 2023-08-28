import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { OptionDirective } from 'src/app/directives/option-directive.directive';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent {
  @Input() label = '';
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() options!: { id: number | string; text: string; }[];

  @Output() selected = new EventEmitter();

  @ContentChild(OptionDirective, { read: TemplateRef }) optionTemplateRef!: TemplateRef<any>;

  getSelectedValue(event: { source: MatSelect; value: string; }) {
    this.selected.emit(event.value);
  }
}
