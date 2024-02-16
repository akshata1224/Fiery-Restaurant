import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PlaceOrderComponent } from './orders/place-order/place-order.component';
import { ViewOrderInfoComponent } from './orders/view-order-info/view-order-info.component';
import { ViewOrdersComponent } from './orders/view-orders/view-orders.component';
import { HomeComponent } from "./home/home.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,
        RouterLink,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        PlaceOrderComponent,
        ViewOrdersComponent,
        ViewOrderInfoComponent, HomeComponent]
})
export class AppComponent {
  title = 'Fiery_Restaurant';
}
