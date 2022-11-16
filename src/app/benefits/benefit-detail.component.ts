import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BenefitStatus, IBenefit } from './benefit';

@Component({
  selector: 'app-benefit-detail',
  templateUrl: './benefit-detail.component.html',
  styleUrls: ['./benefit-detail.component.less']
})
export class BenefitDetailComponent implements OnInit {

  @Input() benefit: IBenefit | undefined;
  pageTitle: string = "Benefit Detail";
  readonly BenefitStatus = BenefitStatus;

  constructor() { }

  ngOnInit(): void {
  }
}
