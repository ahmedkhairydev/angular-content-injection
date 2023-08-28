import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { OptionDirective } from './directives/option-directive.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DropDownComponent, OptionDirective],
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div class="content">
      <h1>
        Welcome to {{title}}!
      </h1>

      <div style="height: 100%; display: flex; align-items: center; justify-content: center; margin-top: 2rem;">
        <app-drop-down label="Countries" [options]="options" (selected)="getSelectedValue($event)">
          <ng-template ng-option let-option>
            {{ option.text }}
          </ng-template>
        </app-drop-down>
      </div>
    </div>
  `,
  styles: [`
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `],
})
export class AppComponent {
  title = 'angular-content-injection';
  options = [
    {
      id: 1,
      text: 'Egypt'
    },
    {
      id: 2,
      text: 'Oman'
    },
    {
      id: 3,
      text: 'Saudi Arabia'
    }
  ];

  getSelectedValue(value: string) {
    alert(value);
  }
}
