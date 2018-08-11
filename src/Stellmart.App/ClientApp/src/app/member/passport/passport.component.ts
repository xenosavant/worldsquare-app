import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from '../../core/services/config/config.service';
import { ActivatedRoute } from '@angular/router';
import { PassportService } from '../../shared/services/passport/passport.service';
import { RequestYoti } from '../../shared/models/passport/request-yoti.model';
import { ResponseYoti } from '../../shared/models/passport/response-yoti.model';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-passport',
    templateUrl: './passport.component.html',
    styleUrls: ['./passport.component.scss']
})
export class PassportComponent implements OnInit {

    public win: any = window;
    public yotiApplicationId: string;
    public yotiScenarioId: string;

    public isYotiVerified: boolean;

    constructor(
        private route: ActivatedRoute,
        private passportService: PassportService
    ) { }

    public ngOnInit(): void {

        this.route.queryParams.subscribe((params: any) => {

            if (params['token'] !== undefined) {
                this.verifyYoti(params['token']);
            }
        });

        this.yotiApplicationId = APP_CONFIG.YotiSettings.AppId;
        this.yotiScenarioId = APP_CONFIG.YotiSettings.ScenarioId;

        setTimeout(() => {
            this.win._ybg.init();
        }, 300);
    }

    public verifyYoti(token: string): void {
        const model: RequestYoti = {
            token: token
        };

        this.passportService.VerifyYoti(model).subscribe(
            (data: ResponseYoti) => {
                this.isYotiVerified = data.isVerified;
            });
    }
}
