import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-month',
  styleUrl: 'app-month.css',
  shadow: true
})
export class AppMonth {

  @Prop() firstMonday = 3;

  render() {
    return (
      <div>
        <app-week firstDay={1}></app-week>
        <app-week firstDay={this.firstMonday}></app-week>
        <app-week firstDay={this.firstMonday + 7}></app-week>
        <app-week firstDay={this.firstMonday + 14}></app-week>
        <app-week firstDay={this.firstMonday + 21}></app-week>
        <app-week firstDay={this.firstMonday + 28}></app-week>
        <app-week firstDay={this.firstMonday + 35}></app-week>
      </div>
    );
  }
}
