import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IConsumer } from './consumer';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ConsumerService } from './consumer.service';

@Component({
  templateUrl: './consumer-detail.component.html',
  styleUrls: ['./consumer-detail.component.less']
})
export class ConsumerDetailComponent implements OnInit {

  pageTitle: string = "Consumer Detail";
  consumer: IConsumer | undefined;
  faChevronLeft = faChevronLeft;
  errorMessage: string = '';
  promptMessage: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private consumerService: ConsumerService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getConsumer(id);
    } else {
      this.consumer = {
        id: 0,
        name: '',
        basicSalary: 0,
        birthDate: new Date(),
        benefits: undefined
      };
    }
  }

  getConsumer(id: number): void {
    this.consumerService.getConsumer(id).subscribe({
      next: consumer => {
        this.consumer = consumer;
      },
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/Consumers']);
  }

  calculateBenefits(): void {
    if (this.consumer) {
      if (this.consumer.id > 0) {
        this.consumerService.updateConsumer(this.consumer.id, this.consumer).subscribe({
          next: updatedConsumer => {
            this.consumer = updatedConsumer;
            this.promptMessage = "Update success!";
          },
          error: err => this.errorMessage = err
        });
      } else {
        this.consumerService.addConsumer(this.consumer).subscribe({
          next: addedConsumer => {
            this.consumer = addedConsumer;
            this.promptMessage = "Add success!";
          },
          error: err => this.errorMessage = err
        });
      }
    }
  }
}
