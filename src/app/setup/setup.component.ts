import { Component, OnInit } from '@angular/core';
import { ISetup } from './setup';
import { SetupService } from './setup.service';

@Component({
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.less']
})
export class SetupComponent implements OnInit {

  pageTitle: string = "Setup";
  setup: ISetup | undefined;
  errorMessage: string = '';
  promptMessage: string = '';

  constructor(private setupService: SetupService) { }

  ngOnInit(): void {
    this.setup = {
      id: 0,
      guaranteedIssue: 0,
      maxAgeLimit: 0,
      minAgeLimit: 0,
      minRange: 0,
      maxRange: 0,
      increments: 0
  }
    this.getSetup();
  }

  getSetup(): void {
    this.setupService.getSetup().subscribe({
      next: setup => {
        this.setup = setup;
      },
      error: err => this.errorMessage = err
    });
  }

  saveSetup(): void {
    if (this.setup) {
      if (this.setup.id > 0) {
        this.setupService.updateSetup(this.setup.id, this.setup).subscribe({
          next: savedSetup => {
            this.setup = savedSetup;
            this.promptMessage = "Save success!";
          },
          error: err => this.errorMessage = err
        });
      } else {
        this.setupService.addSetup(this.setup).subscribe({
          next: savedSetup => {
            this.setup = savedSetup;
            this.promptMessage = "Save success!";
          },
          error: err => this.errorMessage = err
        });
      }
    }
  }
}
