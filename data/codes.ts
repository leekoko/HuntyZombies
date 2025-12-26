import codesData from './codes.json';

export type CodeEntry = {
  code: string;
  reward: string;
  addedDate: string;
};

export type CodesMonth = {
  year: string;
  month: string;
  activeCodes: CodeEntry[];
  expiredCodes: CodeEntry[];
};

const typedCodesData = codesData as CodesMonth[];

export default typedCodesData;
