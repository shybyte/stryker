interface MatchedMutant {
  readonly mutatorName: string;
  readonly scopedTestIds: number[];
  readonly timeSpentScopedTests: number;
  readonly fileName: string;
  readonly replacement: string;
}

export default MatchedMutant;