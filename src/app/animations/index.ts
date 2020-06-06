import { animate, style, keyframes, trigger, transition } from '@angular/animations';

export const fade = trigger('fade', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('400ms ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('400ms', style({ opacity: 0 }))
  ])
]);

export const matched = trigger('match', [
  transition('* => active', [
    animate('.3s', keyframes([
      style({ transform: 'scale(0.9)', offset: 0}),
      style({ transform: 'scale(1.1)', offset: 0.8}),
      style({ transform: 'scale(1)', offset: 1.0})
    ])),
  ])
]);
