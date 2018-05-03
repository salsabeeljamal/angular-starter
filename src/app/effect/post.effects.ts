import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';


@Injectable()
export class PostEffects {

  constructor(private actions$: Actions) {}
}
