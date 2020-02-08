import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-week',
  styleUrl: 'app-week.css',
  shadow: true
})
export class AppWeek {

  @Prop() firstDay: number;

  render() {
    return (
      <div>
        <app-day day={this.firstDay}></app-day>
        <app-day day={this.firstDay + 1}></app-day>
        <app-day day={this.firstDay + 2}></app-day>
        <app-day day={this.firstDay + 3}></app-day>
        <app-day day={this.firstDay + 4}></app-day>
        <app-day day={this.firstDay + 5}></app-day>
        <app-day day={this.firstDay + 6}></app-day>
      </div>
    );
  }
}
