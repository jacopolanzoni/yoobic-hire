import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-day',
  styleUrl: 'app-day.css',
  shadow: true
})
export class AppDay {

  @Prop() day: number;

  render() {
    return (
      <button class="day">
        {this.day}
      </button>
    );
  }
}
