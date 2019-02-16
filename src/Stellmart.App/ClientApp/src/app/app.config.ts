export class AppConfig {
  public readonly AppSettings: {
    readonly AppUrl: string;
    readonly ApiUrl: string;
    readonly AuthUrl: string;
  };

  public readonly ApplicationInsights: {
    readonly InstrumentationKey: string;
  };

  public readonly YotiSettings: {
    readonly AppId: string;
    readonly ScenarioId: string;
  };
}
