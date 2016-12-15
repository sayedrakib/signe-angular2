/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Time, UpdateDBservice } from '../shared/index';

@Component({
    styleUrls: ['admin.component.scss'],
    templateUrl: 'admin.component.html'
})

export class AdminComponent {

constructor (private updateDBservice: UpdateDBservice ) {}

timestampResponse: string;

doUpdate(): void {
  this.updateDBservice.updateDatabase().subscribe(
    data => {this.timestampResponse = data; },
    error => console.log(error)
  );
}


}
