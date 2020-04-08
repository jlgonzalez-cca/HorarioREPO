import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { HorarioVpnSharedModule } from 'app/shared/shared.module';
import { HorarioVpnCoreModule } from 'app/core/core.module';
import { HorarioVpnAppRoutingModule } from './app-routing.module';
import { HorarioVpnHomeModule } from './home/home.module';
import { HorarioVpnEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    HorarioVpnSharedModule,
    HorarioVpnCoreModule,
    HorarioVpnHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    HorarioVpnEntityModule,
    HorarioVpnAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class HorarioVpnAppModule {}
