import { Component, Input } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent {

  /**
   * Member Variables
   */

  @Input()
  reservations : Reservation[] = [];



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

  ngOnInit() : void { }

}
