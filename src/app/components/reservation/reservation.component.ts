import { Component, Input } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  /**
   * Member Variables
   */

  @Input()
  reservation : Reservation = {
    reservationId : 0, 
    userId : 0, 
    restaurantId : 0,
    time : "0:00"
  };



  /**
   * Constructor
   */

  constructor() { }



  /**
   * Class Methods
   */

}
