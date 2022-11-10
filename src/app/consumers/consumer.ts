export interface IConsumer {
    id: number;
    name: string;
    basicSalary: number;
    birthDate: Date;
    benefits: IBenefits[] | undefined;
}

export interface IBenefits {
    multiple: number;
    benefitsAmountQuotation: number;
    pendedAmount: number;
    status: string;
}