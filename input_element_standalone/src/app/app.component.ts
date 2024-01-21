import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'input_element_standalone';
  @Input() widgetInput = 'Angular Calculator Component';

  @Output() widgetOutput = new EventEmitter<number>();

  numberOne = 0;
  numberTwo = 0;

  add() {
    this.widgetOutput.emit(this.numberOne + this.numberTwo);
    console.log(this.widgetOutput);
  }
  susbtract() {
    this.widgetOutput.emit(this.numberOne - this.numberTwo);
  }
  multiply() {
    this.widgetOutput.emit(this.numberOne * this.numberTwo);
  }
  divide() {
    this.widgetOutput.emit(this.numberOne / this.numberTwo);
  }
}
