export interface IBenefit {
    id: number;
    consumerId: number;
    configurationId: number;
    benefitDetails: IBenefitDetail[];
    updatedDT?: Date;
}

export interface IBenefitDetail {
    multiple: number;
    benefitsAmountQuotation: number;
    pendedAmount: number;
    status: BenefitStatus;
}

export enum BenefitStatus {
    ForApproval = 1, 
    Approved
}