import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassportService } from '../../services/passport.service';
import { YotiRequest } from '../../models/yoti-request.model';
import { YotiResponse } from '../../models/yoti-response.model';
import { APP_CONFIG } from '../../../../shared/services/config/config.service';
import { UserService } from '../../../../shared/services/api/user/user.service';
import { UserResponse } from '../../../../shared/models/user/user-response.model';

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
    public verificationLevel: number;

    constructor(
        private route: ActivatedRoute,
        private passportService: PassportService,
        private userService: UserService
    ) { }

    public ngOnInit(): void {

        this.getCurrentLoggedUser();

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
        const model: YotiRequest = {
            token: token
        };

        this.passportService.verifyYoti(model).subscribe(
            (data: YotiResponse) => {
                this.isYotiVerified = data.isVerified;
            });
    }

    public getCurrentLoggedUser(): void {
        this.userService.getCurrentLoggedUser().subscribe(
            (data: UserResponse) => {
                this.verificationLevel = data.verificationLevelId;
            });
    }
}
