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

  export type DistanceUnit = 'meter' | 'mile' | 'inch' | 'foot' | 'yard';

  export type EnergyUnit =
    | 'calorie'
    | 'kilocalorie'
    | 'smallCalorie'
    | 'largeCalorie';

  export interface DistanceSaveOptions {
    unit: DistanceUnit;
    value: number;
    startDate: string;
    endDate: string;
  }

  export interface WorkoutOptions {
    type: Activities;
    startDate: string;
    endDate: string;
    duration?: number;
    energyBurned?: number;
    energyBurnedUnit?: EnergyUnit;
    totalDistance: number;
    totalDistanceUnit: DistanceUnit;
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

    saveDistanceWalkingRunning(
      options: DistanceSaveOptions,
      callback: (err: Object, result: Object) => void
    ): void;

    saveDistanceCycling(
      options: DistanceSaveOptions,
      callback: (err: Object, results: Object) => void
    ): void;

    saveActiveEnergyBurned(
      options: ValueDate,
      callback: (err: Object, result: Object) => void
    ): void;

    saveWorkout(
      options: WorkoutOptions,
      callback: (err: Object, result: Object) => void
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
    kilocalorie = 'kilocalorie',
    smallCalorie = 'smallCalorie',
    largeCalorie = 'largeCalorie',
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
    yard = 'yard',
  }

  export enum Activities {
    archery = 2,
    bowling = 7,
    fencing = 18,
    gymnastics = 22,
    trackAndField = 49,
    americanFootball = 1,
    australianFootball = 3,
    baseball = 5,
    basketball = 6,
    cricket = 10,
    discSports = 75,
    handball = 23,
    hockey = 25,
    lacrosse = 27,
    rugby = 36,
    soccer = 41,
    softball = 42,
    volleyball = 51,
    preparationAndRecovery = 33,
    flexibility = 62,
    walking = 52,
    running = 37,
    wheelchairWalkPace = 70,
    wheelchairRunPace = 71,
    cycling = 13,
    handCycling = 74,
    coreTraining = 59,
    elliptical = 16,
    functionalStrengthTraining = 20,
    traditionalStrengthTraining = 50,
    crossTraining = 11,
    mixedCardio = 73,
    highIntensityIntervalTraining = 63,
    jumpRope = 64,
    stairClimbing = 44,
    stairs = 68,
    stepTraining = 69,
    fitnessGaming = 76,
    barre = 58,
    dance = 14,
    yoga = 57,
    mindAndBody = 28,
    pilates = 66,
    badminton = 4,
    racquetball = 34,
    squash = 43,
    tableTennis = 47,
    tennis = 48,
    climbing = 9,
    equestrianSports = 17,
    fishing = 19,
    golf = 21,
    hiking = 24,
    hunting = 26,
    play = 32,
    crossCountrySkiing = 60,
    curling = 12,
    downhillSkiing = 61,
    snowSports = 40,
    snowboarding = 67,
    skatingSports = 39,
    paddleSports = 31,
    rowing = 35,
    sailing = 38,
    surfingSports = 45,
    swimming = 46,
    waterFitness = 53,
    waterPolo = 54,
    waterSports = 55,
    boxing = 8,
    kickboxing = 65,
    martialArts = 28,
    taiChi = 72,
    wrestling = 56,
    other = 3000,
  }
  const appleHealthKit: AppleHealthKit;
  export default appleHealthKit;
}
