import { AppConfig } from 'src/app/shared/services/config/config.service';

export class AppConfigServiceMock {
    public appConfig: AppConfig;

    constructor() {
    }

    public load(): Promise<any> {
        return new Promise((resolve: any, reject: any) => {

        });
    }
}
