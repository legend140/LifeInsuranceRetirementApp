import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IConsumerHistory, LogType } from '../consumers/consumer';
import { IBenefit } from './benefit';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-benefit-history',
  templateUrl: './benefit-history.component.html',
  styleUrls: ['./benefit-history.component.less']
})
export class BenefitHistoryComponent implements OnInit, OnChanges {
  @Input() consumerHistory: IConsumerHistory[] | undefined;
  pageTitle: string = "Benefit History";
  readonly LogType = LogType;
  logTypes: string[] = [
    "Created",
    "Updated",
    "Deleted"
  ];
  benefit: IBenefit | undefined;
  faEyeSlash = faEyeSlash;
  faEye = faEye;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.consumerHistory);
  }

  viewBenefitHistory(benefit: IBenefit | undefined):  void {
    this.benefit = benefit;
  }

}
