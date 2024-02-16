import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Order } from '../order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  // Method to fetch orders from JSON server

  

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }

  // Example method to get an order by order number
  // getOrder(orderNo: string): Observable<Order> {
  //   return this.http.get<Order>('http://localhost:3000/orders/' + orderNo);
  // }

  getOrder(orderNo: string): Observable<Order> {
    console.log('getOrder', orderNo)
    console.log(this.http.get<Order>(`http://localhost:3000/orders/${orderNo}`))
    return this.http.get<Order>(`http://localhost:3000/orders/${orderNo}`)
  }

  getOrderByOrderNo(orderNo: string): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/orders/').pipe(
      map((orders: any[]) => orders.find(order => order.orderNo === orderNo))
    );
  }
}
