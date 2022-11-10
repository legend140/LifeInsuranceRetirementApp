import { Component, OnInit } from '@angular/core';
import { IConsumer } from './consumer';
import { ConsumerService } from './consumer.service';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.less']
})
export class ConsumerListComponent implements OnInit {

  pageTitle: string = "Consumer List";

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
    this.consumers = this.consumerService.getConsumers();
    this.filteredConsumers = this.consumers;
  }

  performFilter(): IConsumer[] {
    return this.consumers.filter((consumer: IConsumer) =>
          consumer.Name.toLocaleLowerCase().includes(this.listFilter.toLocaleLowerCase()));
  }

}
