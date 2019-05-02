import { animate, state, style, transition, trigger, query, group, animateChild } from '@angular/animations';

// export const slideInAnimation  =
//     trigger('routeAnimations', [
//         transition('* <=> animate', [
//             style({
//                 opacity: 0,
//                 transform: 'translateY(-30%)'
//             }),
//             query(':enter, :leave', [
//                 animate('300ms linear', style({
//                     opacity: 1,
//                     transform: 'translateY(0)'
//                 }))
//             ])
//         ]),
//     ]);
export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ], { optional: true }),
            query(':enter', [
                style({ opacity: '0' })
            ], { optional: true }),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('400ms ease-out', style({ opacity: '0' }))
                ], { optional: true }),
                query(':enter', [
                    animate('400ms ease-out', style({ opacity: '1' }))
                ], { optional: true })
            ]),
            query(':enter', animateChild(), { optional: true }),
        ]),
    ]);
