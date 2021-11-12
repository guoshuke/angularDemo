import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angularDome1';
    themeUI: string;

    constructor(private themeService: AppService) {
    }

    themeList: Array<string>;

    ngOnInit() {
        this.themeList = this.themeService.getThemeList();
        this.themeService.changeTheme(this.themeList[0]);

        setTimeout(() => {
            this.themeService.changeTheme(this.themeList[1]);
        }, 5000);
    }
    // ngOnInit() {
    //
    //     this.setTheme();
    //     setTimeout(() => {
    //         this.changeTheme('blue');
    //     }, 3000);
    // }
}
