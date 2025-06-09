import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css'],
})
export class RecordsComponent implements OnInit {
  payments: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  links: any[] = [];

  constructor(private coreService: CoreService) {}

  ngOnInit(): void {
    this.loadPayments();
  }

  loadPayments(page: number = 1): void {
    this.coreService.getPayments(page).subscribe((res) => {
      this.payments = res.data;
      this.currentPage = res.current_page;
      this.totalPages = res.last_page;
      this.links = res.links;
    });
  }

  goToPage(page: number | string): void {
    if (typeof page === 'number') this.loadPayments(page);
  }

  extractPage(url: string | null): number {
    if (!url) return this.currentPage;
    const match = url.match(/page=(\d+)/);
    return match ? +match[1] : 1;
  }
}
