declare module 'rn-apple-healthkit' {
  export interface HealthKitPermissions {
    permissions: {
      read: string[];
      write: string[];
    };
  }
  export interface MindfulSessionData {
    startDate?: Date;
    endDate?: Date;
    limit?: number;
  }

  export interface SampleOptions {
    startDate: string;
    endDate?: string;
    ascending?: boolean;
    limit?: number;
  }

  export interface StartEndDateOptions {
    startDate: string;
    endDate?: string;
  }

  export interface DateUnitQueryOptions {
    unit?: string;
    startDate: string;
    endDate?: string;
    ascending?: boolean;
    limit?: number;
  }

  export interface DistanceOptions {
    unit?: string;
    date?: string;
  }

  export interface SampleQuery {
    startDate: string;
    endDate: string;
    type: SampleQueryOptionType;
  }

  export interface UnitOnlyOptions {
    unit: string;
  }

  export interface Date {
    startDate: string;
    endDate: string;
  }

  export interface Value {
    value: number;
  }

  export interface ValueDate {
    value: number;
    startDate: string;
    endDate: string;
  }

  export interface AppleHealthKit {
    authorizationStatusForType(type: string): Promise<string>;

    isAvailable(callback: (error: Object, results: boolean) => void): void;

    initHealthKit(
      permissions: HealthKitPermissions,
      callback: (error: string, result: Object) => void
    ): void;

    initStepCountObserver(
      options: Object,
      callback: (error: string, result: Object) => void
    ): void;

    getActiveEnergyBurned(
      options: StartEndDateOptions,
      callback: (error: Object, resutls: Object) => void
    ): void;

    getBasalEnergyBurned(
      options: StartEndDateOptions,
      callback: (error: Object, results: Object) => void
    ): void;

    getBiologicalSex(
      options: Object,
      callback: (error: string, result: Object) => void
    ): void;

    getBloodGlucoseSamples(
      options: DateUnitQueryOptions,
      callback: (error: Object, results: Array<Object>) => void
    ): void;

    getBloodPressureSamples(
      options: DateUnitQueryOptions,
      callback: (error: Object, results: Array<Object>) => void
    ): void;

    getBodyTemperatureSamples(
      options: DateUnitQueryOptions,
      callback: (error: Object, results: Array<Object>) => void
    ): void;

    getDateOfBirth(
      options: Object,
      callback: (error: string, result: Object) => void
    ): void;

    getWeightSamples(
      options: Object,
      callback: (error: string, result: Object) => void
    ): void;

    getHeightSamples(
      options: DateUnitQueryOptions,
      callback: (error: Object, results: Array<ValueDate>) => void
    ): void;

    getLatestBmi(
      options: null,
      callback: (error: string, result: ValueDate) => void
    ): void;

    getLatestBodyFatPercentage(
      options: null,
      callback: (error: Object, results: ValueDate) => void
    ): void;

    getBodyFatPercentageSamples(
      options: SampleOptions,
      callback: (error: Object, results: Array<ValueDate>) => void
    ): void;

    getLeanBodyMassSamples(
      options: DateUnitQueryOptions,
      callback: (err: Object, results: Array<ValueDate>) => void
    ): void;

    saveBmi(
      options: Value,
      callback: (error: string, result: Object) => void
    ): void;

    saveBodyFatPercentage(
      options: Value,
      callback: (error: Object, result: Object) => void
    ): void;

    saveLeanBodyMass(
      options: Value,
      callbacK: (error: Object, result: Object) => void
    ): void;

    saveWeight(
      options: Value,
      callback: (error: string, result: Object) => void
    ): void;

    saveHeight(
      options: Value,
      callback: (error: string, result: Object) => void
    ): void;

    saveMindfulSession(
      options: Date,
      callback: (error: Object, result: Object) => void
    ): void;

    saveSteps(
      options: ValueDate,
      callback: (error: Object, result: Object) => void
    ): void;

    getDateOfBirth(
      options: any,
      callback: (error: Object, results: HealthDateOfBirth) => void
    ): void;

    getLatestHeight(
      options: null,
      callback: (err: string, results: ValueDate) => void
    ): void;

    getLatestWeight(
      options: UnitOnlyOptions,
      callback: (err: string, results: ValueDate) => void
    ): void;

    getLatestLeanBodyMass(
      options: null,
      callback: (err: Object, results: ValueDate) => void
    ): void;

    getMindfulSession(
      options: MindfulSessionData,
      callback: (err: string, results: Date) => void
    ): void;

    getStepCount(
      options?: Object | undefined,
      callback: (err: Object, results: Object) => void
    ): void;

    getSleepSamples(
      options: Object,
      callback: (err: Object, results: Array<Object>) => void
    ): void;

    getSamples(
      options: SampleQuery,
      callback: (err: Object, results: Array<Object>) => void
    ): void;

    getDailyDistanceWalkingRunningSamples(
      options: SampleOptions,
      callback: (error: string, results: Array<Object>) => void
    ): void;

    getDailyDistanceCyclingSamples(
      options: SampleOptions,
      callback: (error: string, results: Array<Object>) => void
    ): void;

    getDailyFlightsClimbedSamples(
      options: SampleOptions,
      callback: (error: string, results: Array<Object>) => void
    ): void;

    getStepCountSamples(
      options: StartEndDateOptions,
      callback: (error: string, results: Array<Object>) => void
    ): void;

    getDistanceCycling(
      options: DistanceOptions,
      callback: (error: string, results: ValueDate) => void
    ): void;

    getDistanceWalkingRunning(
      options: DistanceOptions,
      callback: (error: string, results: ValueDate) => void
    ): void;

    getFlightsClimbed(
      options: Object,
      callback: (error: Object, results: ValueDate) => void
    ): void;

    getHeartRateSamples(
      options: DateUnitQueryOptions,
      callback: (error: Object, results: Array<ValueDate>) => void
    ): void;

    getRespiratoryRateSamples(
      options: DateUnitQueryOptions,
      callback: (error: Object, results: Array<Object>) => void
    ): void;

    Constants: {
      Permissions: Permissions;
      Units: HealthUnit;
    };
  }

  export interface HealthDateOfBirth {
    value: string;
    age: number;
  }

  export interface HealthValue {
    value: number;
    startDate: string;
    endDate: string;
  }

  export interface HealthUnitOptions {
    unit: HealthUnit;
  }

  export enum SampleQueryOptionType {
    Walking = 'Walking',
    StairClimbing = 'StairClimbing',
    Running = 'Running',
    Cycling = 'Cycling',
    Workout = 'Workout',
  }

  export enum Permissions {
    ActiveEnergyBurned = 'ActiveEnergyBurned',
    AppleExerciseTime = 'AppleExerciseTime',
    BasalEnergyBurned = 'BasalEnergyBurned',
    BiologicalSex = 'BiologicalSex',
    BloodGlucose = 'BloodGlucose',
    BloodPressureDiastolic = 'BloodPressureDiastolic',
    BloodPressureSystolic = 'BloodPressureSystolic',
    BodyFatPercentage = 'BodyFatPercentage',
    BodyMass = 'BodyMass',
    BodyMassIndex = 'BodyMassIndex',
    BodyTemperature = 'BodyTemperature',
    DateOfBirth = 'DateOfBirth',
    Biotin = 'Biotin',
    Caffeine = 'Caffeine',
    Calcium = 'Calcium',
    Carbohydrates = 'Carbohydrates',
    Chloride = 'Chloride',
    Cholesterol = 'Cholesterol',
    Copper = 'Copper',
    EnergyConsumed = 'EnergyConsumed',
    FatMonounsaturated = 'FatMonounsaturated',
    FatPolyunsaturated = 'FatPolyunsaturated',
    FatSaturated = 'FatSaturated',
    FatTotal = 'FatTotal',
    Fiber = 'Fiber',
    Folate = 'Folate',
    Iodine = 'Iodine',
    Iron = 'Iron',
    Magnesium = 'Magnesium',
    Manganese = 'Manganese',
    Molybdenum = 'Molybdenum',
    Niacin = 'Niacin',
    PantothenicAcid = 'PantothenicAcid',
    Phosphorus = 'Phosphorus',
    Potassium = 'Potassium',
    Protein = 'Protein',
    Riboflavin = 'Riboflavin',
    Selenium = 'Selenium',
    Sodium = 'Sodium',
    Sugar = 'Sugar',
    Thiamin = 'Thiamin',
    VitaminA = 'VitaminA',
    VitaminB12 = 'VitaminB12',
    VitaminB6 = 'VitaminB6',
    VitaminC = 'VitaminC',
    VitaminD = 'VitaminD',
    VitaminE = 'VitaminE',
    VitaminK = 'VitaminK',
    Zinc = 'Zinc',
    Water = 'Water',
    DistanceCycling = 'DistanceCycling',
    DistanceSwimming = 'DistanceSwimming',
    DistanceWalkingRunning = 'DistanceWalkingRunning',
    FlightsClimbed = 'FlightsClimbed',
    HeartRate = 'HeartRate',
    Height = 'Height',
    LeanBodyMass = 'LeanBodyMass',
    MindfulSession = 'MindfulSession',
    NikeFuel = 'NikeFuel',
    RespiratoryRate = 'RespiratoryRate',
    SleepAnalysis = 'SleepAnalysis',
    StepCount = 'StepCount',
    Steps = 'Steps',
    Weight = 'Weight',
    Workout = 'Workout',
  }

  export enum HealthUnit {
    bpm = 'bpm',
    calorie = 'calorie',
    celsius = 'celsius',
    count = 'count',
    day = 'day',
    fahrenheit = 'fahrenheit',
    foot = 'foot',
    gram = 'gram',
    hour = 'hour',
    inch = 'inch',
    joule = 'joule',
    meter = 'meter',
    mgPerdL = 'mgPerdL',
    mile = 'mile',
    minute = 'minute',
    mmhg = 'mmhg',
    mmolPerL = 'mmolPerL',
    percent = 'percent',
    pound = 'pound',
    second = 'second',
  }

  const appleHealthKit: AppleHealthKit;
  export default appleHealthKit;
}
