import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IConsumer } from './consumer';
import { ConsumerService } from './consumer.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.less']
})
export class ConsumerListComponent implements OnInit, OnDestroy {

  pageTitle: string = "Consumer List";
  errorMessage: string = '';
  promptMessage: string = '';
  sub: Subscription | undefined;
  faEdit = faEdit;
  faTrash = faTrash;

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

  constructor(private consumerService: ConsumerService,
              private router: Router) { }

  ngOnInit(): void {
    this.getConsumers();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  performFilter(): IConsumer[] {
    return this.consumers.filter((consumer: IConsumer) =>
          consumer.name.toLocaleLowerCase().includes(this.listFilter.toLocaleLowerCase()));
  }

  deleteConsumer(consumer: IConsumer) {
    if (consumer && consumer.id > 0) {
      if(confirm("Are you sure to delete "+consumer.name)) {
        this.consumerService.deleteConsumer(consumer.id).subscribe({
          next: deletedConsumer => {
            if (deletedConsumer == null) {
              this.promptMessage = "Not found!";
            } else {
              this.promptMessage = "Delete success!";
              this.consumers = this.consumers.filter(c => c.id !== deletedConsumer.id);
              this.filteredConsumers = this.consumers;
            }
          },
          error: err => this.errorMessage = err
        });
      }
    }
  }

  getConsumers() {
    this.consumerService.getConsumers().subscribe({
      next: consumers => {
        this.consumers = consumers;
        this.filteredConsumers = this.consumers;
      },
      error: err => this.errorMessage = err
    });
  }
}
