import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Declaration of config class
 */
export class AppConfig {
    public readonly AppSettings:
        {
            readonly AppUrl: string;
            readonly ApiUrl: string;
            readonly AuthUrl: string;
        };

    public readonly ApplicationInsights:
        {
            readonly InstrumentationKey: string
        };
}

/**
 * Global variable containing actual config to use. Initialised via ajax call
 */
export let APP_CONFIG: AppConfig;

/**
 * Service in charge of dynamically initialising configuration
 */
@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    constructor(private http: HttpClient) {
    }

    public load(): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            return this.http.get('assets/appsettings.json')
            .subscribe((envResponse: any) => {
                const t: AppConfig = new AppConfig();
                // Modify envResponse here if needed (e.g. to ajust parameters for https,...)

                APP_CONFIG = Object.assign(t, envResponse);
                resolve(true);
            });

        });
    }
}
