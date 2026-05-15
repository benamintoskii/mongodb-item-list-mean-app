import { Component, inject, OnInit, signal } from '@angular/core';
import { ItemService, Item } from './services/item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `
    <div class="app-container">
      <header class="header">
        <h1>Premium Gear</h1>
        <p>Discover our carefully curated collection</p>
      </header>

      <main class="grid-container">
        <div class="card" *ngFor="let item of items()">
          <div class="card-img-wrapper">
            <img [src]="item.imageUrl" [alt]="item.name" class="card-img">
            <span class="category-badge">{{ item.category }}</span>
          </div>
          <div class="card-content">
            <div class="card-header">
              <h2>{{ item.name }}</h2>
              <span class="price">{{ item.price | currency }}</span>
            </div>
            <p class="description">{{ item.description }}</p>
            <button class="action-button">View Details</button>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap');

    :host {
      display: block;
      font-family: 'Outfit', sans-serif;
      min-height: 100vh;
      background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
      color: #f8fafc;
      padding-bottom: 3rem;
    }

    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    .header {
      text-align: center;
      margin-bottom: 4rem;
      padding-top: 2rem;
      animation: fadeInDown 0.8s ease-out;
    }

    .header h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin: 0;
      background: linear-gradient(to right, #a855f7, #ec4899, #f43f5e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -1px;
    }

    .header p {
      font-size: 1.25rem;
      color: #94a3b8;
      margin-top: 1rem;
      font-weight: 300;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
      animation: fadeInUp 1s ease-out;
    }

    .card {
      background: rgba(30, 41, 59, 0.5);
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
    }

    .card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
                  0 0 20px rgba(168, 85, 247, 0.2);
      border-color: rgba(168, 85, 247, 0.5);
    }

    .card-img-wrapper {
      position: relative;
      height: 220px;
      overflow: hidden;
    }

    .card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .card:hover .card-img {
      transform: scale(1.1);
    }

    .category-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: rgba(15, 23, 42, 0.7);
      backdrop-filter: blur(4px);
      padding: 0.5rem 1rem;
      border-radius: 99px;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #e2e8f0;
      border: 1px solid rgba(255,255,255,0.1);
    }

    .card-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    .card-header h2 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: #f1f5f9;
      line-height: 1.4;
      padding-right: 1rem;
    }

    .price {
      font-weight: 800;
      font-size: 1.25rem;
      color: #a855f7;
    }

    .description {
      color: #94a3b8;
      font-size: 0.95rem;
      line-height: 1.6;
      margin: 0 0 1.5rem 0;
      flex-grow: 1;
    }

    .action-button {
      width: 100%;
      padding: 0.875rem;
      border-radius: 12px;
      border: none;
      background: linear-gradient(135deg, #a855f7, #ec4899);
      color: white;
      font-weight: 600;
      font-size: 1rem;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.3s ease;
      opacity: 0.9;
    }

    .card:hover .action-button {
      opacity: 1;
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(236, 72, 153, 0.3);
    }

    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class App implements OnInit {
  private itemService = inject(ItemService);
  items = signal<Item[]>([]);

  ngOnInit() {
    this.itemService.getItems().subscribe({
      next: (data) => this.items.set(data),
      error: (err) => console.error('Error fetching items', err)
    });
  }
}
