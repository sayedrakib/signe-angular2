/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { HakuComponent } from './haku/haku.component';



export const ROUTES: Routes = [
    {path: '', redirectTo: 'haku', pathMatch: 'full'},
    {path: 'haku', component: HakuComponent},
    {path: 'admin', component: AdminComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
