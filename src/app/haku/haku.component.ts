/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, OnInit  } from "@angular/core";
import { Item, SearchService } from '../shared/index';

@Component({
    styleUrls: ['haku.component.scss'],
    templateUrl: 'haku.component.html',
})

export class HakuComponent implements OnInit {

query: string;
p: string = "all";

searchResults: Array<Item>;

constructor(private searchService: SearchService) {}

  ngOnInit() {}

search(): void {
  this.searchService.searchWithQuery(this.p + "/" + this.query).subscribe(
    data => { this.searchResults = data; },
    error => console.log(error)
  );
}

}
