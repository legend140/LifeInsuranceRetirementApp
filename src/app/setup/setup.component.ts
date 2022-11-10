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
      this.setupService.saveSetup(this.setup).subscribe({
        next: savedSetup => {
          this.setup = savedSetup;
          this.promptMessage = "Save success!";
        },
        error: err => this.errorMessage = err
      });
    }
  }
}
