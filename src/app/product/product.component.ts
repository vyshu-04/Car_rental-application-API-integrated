import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class ProductComponent implements OnInit {
  cars: any[] = [];
  cart: any[] = [];
  sidebarOpen = false;

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    this.http.get<any>('https://www.freetestapi.com/api/v1/cars').subscribe({
      next: (res) => {
        this.cars = res.map((car: any) => ({
          name: `${car.make} ${car.model}`,
          description: `Mileage: ${car.mileage} kmpl | Price: ₹${car.price}`,
          imageUrl: car.image || 'https://via.placeholder.com/150',
          price: car.price
        }));
        this.cart = this.cartService.getCart();
      },
      error: (err) => console.error('Error fetching cars:', err)
    });
  }

  addToCart(car: any): void {
    this.cartService.addToCart(car);
    this.cart = this.cartService.getCart();
  }

  removeFromCart(car: any): void {
    this.cartService.removeFromCart(car);
    this.cart = this.cartService.getCart();
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  getTotalAmount(): number {
    return this.cart.reduce((total, car) => total + (car.price || 0), 0);
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
  }
}
