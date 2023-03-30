import { Store } from '@ngrx/store';
import { AppState } from '../core.state';
import { HomeSection, MenuSection } from '@core/services/menu.models';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class MenuService {
    private store;
    private router;
    currentMenuSections: Array<MenuSection>;
    menuSections$: Subject<Array<MenuSection>>;
    homeSections$: Subject<Array<HomeSection>>;
    constructor(store: Store<AppState>, router: Router);
    private buildMenu;
    private updateOpenedMenuSections;
    private buildSysAdminMenu;
    private buildSysAdminHome;
    private buildTenantAdminMenu;
    private buildTenantAdminHome;
    private buildCustomerUserMenu;
    private buildCustomerUserHome;
    menuSections(): Observable<Array<MenuSection>>;
    homeSections(): Observable<Array<HomeSection>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MenuService>;
}
