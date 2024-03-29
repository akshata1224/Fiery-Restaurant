import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { OrderServiceService } from '../services/order-service.service';
import { Order } from '../order.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterOutlet],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewOrderInfoComponent implements OnInit{ 


  orderNo: any;
  order: any;
  error: any;
  orderItems: any;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderServiceService,
  ) { }

  ngOnInit(): void {
    console.log(this.route.params.subscribe(params => {
      this.orderNo = params['orderNo']}));
      this.route.queryParams.subscribe(params => {
        this.orderNo = params['orderNo'];
        // Call a method to fetch order details based on orderNo
        //this.getOrderDetail();
        this.getOrderDetails()
      });
    console.log(this.route.queryParams)
    console.log(this.route.snapshot.paramMap.get('orderNo'));
    this.orderNo = this.route.snapshot.paramMap.get('orderNo');

    // this.getOrderDetail();
  }

  getOrderDetails(): void {
    console.log("inside orderDetail")
    //console.log(this.orderService.getOrder(this.orderNo));
    this.orderService.getOrderByOrderNo(this.orderNo).subscribe(
      (order: any) => {
        this.order = order;
        console.log('Fetched order:', this.order);
        this.orderItems = order.itemsOrdered;
      },
      (error) => {
        console.error('Error fetching order:', error);
      }
    );
  }

  getOrderDetail(): void {
    console.log("inside orderDetail")
    console.log(this.orderService.getOrder(this.orderNo));



    this.orderService.getOrder(this.orderNo).subscribe(
      (order: Order) => {
        this.order.orderNo = this.orderNo;
        console.log('Fetched order:', this.order);
      },
    
      (error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.error = `Order with order number ${this.orderNo} not found.`;
        } else {
          this.error = 'An error occurred while fetching order details.';
        }
        console.error('Error fetching order:', error);
      }
    );
  }

//   orderDetails : any
//   orderNo: string = 'ORD123456'; 
// // private route: ActivatedRoute, 

//   ngOnInit(): void {
//     //this.orderNo = this.route.snapshot.paramMap.get('orderNo');
//     this.getOrderDetail();
//   }

//   getOrderDetail(){
//     console.log("inside get orederDeatils all")
//     console.log(this.orderDetails)
    
//     // this.http.get("http://localhost:3000/orders")
//     //   .subscribe(d=>this.orderDetails = d)

//     this.orderService.getOrder(this.orderNo).subscribe(d=>this.orderDetails = d)

//     // this.orderService.getOrder(this.orderNo).subscribe(
//     //   (orders: Order[]) => {
//     //     this.orders = orders;
//     //     console.log('Fetched orders with items:', this.orders);
//     //   },
//     //   (error) => {
//     //     console.error('Error fetching orders with items:', error);
//     //   }
//     // );
      
//  };
}
