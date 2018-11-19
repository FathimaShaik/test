import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonComponent } from './person/person.component';
import { TablistComponent } from './tablist/tablist.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

  {path:'person',component:PersonComponent},
  {path:'tab',component:TablistComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'typography',component:TypographyComponent},
  {path:'icons',component:IconsComponent},
  {path:'notification',component:NotificationsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
