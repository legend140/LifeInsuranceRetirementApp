import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IConsumer } from './consumer';
import { ConsumerService } from './consumer.service';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.less']
})
export class ConsumerListComponent implements OnInit, OnDestroy {

  pageTitle: string = "Consumer List";
  errorMessage: string = '';
  sub: Subscription | undefined;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredConsumers = this.performFilter();
  }

  filteredConsumers: IConsumer[] = [];
  consumers: IConsumer[] = [];

  constructor(private consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.consumerService.getConsumers().subscribe({
      next: consumers => {
        this.consumers = consumers;
        this.filteredConsumers = this.consumers;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  performFilter(): IConsumer[] {
    return this.consumers.filter((consumer: IConsumer) =>
          consumer.name.toLocaleLowerCase().includes(this.listFilter.toLocaleLowerCase()));
  }

}
