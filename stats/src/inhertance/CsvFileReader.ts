import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: string[][] = [];

  constructor(public fileanme: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.fileanme, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
