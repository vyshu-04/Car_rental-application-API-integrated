import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  addToCart(car: any): void {
    if (!this.cart.includes(car)) {
      this.cart.push(car);
    }
  }

  getCart(): any[] {
    return this.cart;
  }

  removeFromCart(car: any): void {
    this.cart = this.cart.filter(c => c !== car);
  }

  clearCart(): void {
    this.cart = [];
  }
}
