import { IBenefit } from "../benefits/benefit";

export interface IConsumer {
    id: number;
    name: string;
    basicSalary: number;
    birthDate: Date;
    benefits?: IBenefit[];
    benefitId?: number;
    benefit?: IBenefit;
}

export interface IConsumerHistory {
    id: number;
    logType: LogType;
    name: string;
    basicSalary: number;
    birthDate: Date;
    benefits?: IBenefit[];
    benefitId?: number;
    benefit?: IBenefit;
    loggedBy: string;
    loggedDT: Date;
}

export enum LogType {
    Created = 1,
    Updated,
    Deleted
}