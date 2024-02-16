import { Routes } from '@angular/router';
import { PlaceOrderComponent } from './orders/place-order/place-order.component';
import { ViewOrdersComponent } from './orders/view-orders/view-orders.component';
import { ViewOrderInfoComponent } from './orders/view-order-info/view-order-info.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'header', component: HeaderComponent},
    {path:'footer', component: FooterComponent},
    {path:'menu', component: MenuComponent},
    {path:'place_order', component: PlaceOrderComponent},
    {path:'home', component: HomeComponent},
    {path:'view_orders', component: ViewOrdersComponent,
    //  children:[
    //     {path:'view_order_info', component: ViewOrderInfoComponent},
    // ]
    },

    {path:'view_order_info', component: ViewOrderInfoComponent},
    {path:'view_order_info/:id', component: ViewOrderInfoComponent,},
    {path:'**', component: HomeComponent}

    // children:[
    //     {path:'travel', component:},
    // ]}  
];
