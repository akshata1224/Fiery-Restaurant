import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Order } from '../order.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { OrderServiceService } from '../services/order-service.service';


@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterLink,RouterOutlet ],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent implements OnInit{

  orders :any;
  rt = inject(Router)
  constructor(private http:HttpClient, private orderservice : OrderServiceService){

  }
  
  ngOnInit() {
    this.getAllOrders()
  }
  getAllOrders(){
    console.log("inside get all")
    this.orderservice.getOrders()
      .subscribe(d=>this.orders = d)
      
  };

  // view(orderNo : string) {
  //   console.log(orderNo)
  //   this.rt.navigate(['/view_order_info', orderNo])
  // }

}
