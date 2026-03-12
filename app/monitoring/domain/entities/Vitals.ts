export class Vitals {
  constructor(
    readonly heartRate: number,
    readonly bloodPressure: { systolic: number; diastolic: number },
    readonly recordedAt: Date,
  ) {}

  isHeartRateCritical(): boolean {
    return this.heartRate > 100 || this.heartRate < 50;
  }
}