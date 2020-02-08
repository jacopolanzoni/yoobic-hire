import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  firstDay = 3;

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil Date/Time Picker.
        </p>
        <div>
          <app-month-year></app-month-year>
          <app-month firstMonday={this.firstDay}></app-month>
        </div>
      </div>
    );
  }
}
