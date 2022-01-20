import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
  return [
    {
      name: 'Very Important Event',
      date: '02.02.2022',
      time: '20:20',
      location: {
        address: 'Big Road',
        city: 'Small City',
        country: 'WhereverLand'
      }
    },
    {
      name: 'Not So Important Event',
      date: '03.03.2022',
      time: '13:31',
      location: {
        address: 'Narrow Street',
        city: 'Small City',
        country: 'WhereverLand'
      }
    },
    {
      name: 'Unimportant Event',
      date: '04.04.2022',
      time: '08:18',
      location: {
        address: 'Tiny Lane',
        city: 'Small City',
        country: 'WhereverLand'
      }
    },
  ]
}

}

