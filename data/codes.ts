import codesData from './codes.json';

export type CodeEntry = {
  code: string;
  reward: string;
  addedDate: string;
};

export type CodesData = {
  activeCodes: CodeEntry[];
  expiredCodes: CodeEntry[];
};

export type CodesArchiveMonth = {
  year: string;
  month: string;
  activeCodes: CodeEntry[];
  expiredCodes: CodeEntry[];
};

const typedCodesData = codesData as CodesData;

const monthNames = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const addToArchive = (
  archiveMap: Map<string, CodesArchiveMonth>,
  code: CodeEntry,
  bucket: 'activeCodes' | 'expiredCodes'
) => {
  const [year, monthValue] = code.addedDate.split('-');
  const monthIndex = Number(monthValue) - 1;
  const month = monthNames[monthIndex];

  if (!year || !month) {
    return;
  }

  const archiveKey = `${year}-${month}`;
  let entry = archiveMap.get(archiveKey);

  if (!entry) {
    entry = {
      year,
      month,
      activeCodes: [],
      expiredCodes: [],
    };
    archiveMap.set(archiveKey, entry);
  }

  entry[bucket].push(code);
};

const buildCodesArchive = (data: CodesData) => {
  const archiveMap = new Map<string, CodesArchiveMonth>();

  data.activeCodes.forEach((code) => addToArchive(archiveMap, code, 'activeCodes'));
  data.expiredCodes.forEach((code) => addToArchive(archiveMap, code, 'expiredCodes'));

  return Array.from(archiveMap.values()).sort((a, b) => {
    const yearDiff = Number(b.year) - Number(a.year);
    if (yearDiff !== 0) {
      return yearDiff;
    }
    return monthNames.indexOf(b.month) - monthNames.indexOf(a.month);
  });
};

export const codesArchive = buildCodesArchive(typedCodesData);

export default typedCodesData;
