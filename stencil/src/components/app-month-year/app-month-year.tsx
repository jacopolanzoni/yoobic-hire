import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-month-year',
  styleUrl: 'app-month-year.css',
  shadow: true
})
export class AppMonthYear {

  render() {
    return (
      <div>
        <select id="cars">
          <option value="volvo">January</option>
          <option value="saab">February</option>
          <option value="mercedes">March</option>
          <option value="audi">April</option>
          <option value="audi">May</option>
          <option value="audi">June</option>
          <option value="audi">July</option>
          <option value="audi">August</option>
          <option value="audi">September</option>
          <option value="audi">October</option>
          <option value="audi">November</option>
          <option value="audi">December</option>
        </select>
        <input type="number" min="2000" max="2050"/>
      </div>
    );
  }
}
