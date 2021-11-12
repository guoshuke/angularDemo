import {OnInit, EventEmitter, Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AppService {
    constructor() {
    }

    themeChanged = new EventEmitter(); // 主题更换完成
    beforeThemeChange = new EventEmitter(); // 主题更换之前
    // 配置
    public themeList = ['default', 'blue'];
    currentTheme = 'default';


    public changeTheme(theme?: any) {
        if (!this.themeList.includes(theme)) {
            return; // 提示
        }
        this.beforeThemeChange.emit(this.currentTheme);
        this.doChangeTheme(theme);
    }

    /**
     * @Description: 做主题更换
     * @author guoKe
     * @date 2021/7/12
     */
    doChangeTheme(theme) {
        const dom = document.querySelectorAll<HTMLElement>('body');
        dom.forEach((n: HTMLElement) => {
            n.setAttribute('data-theme', theme);
        });
        this.currentTheme = theme;
        // 所有的都做完了 通知一下
        setTimeout(() => this.themeChanged.emit(this.currentTheme), 0);
    }

    /**
     * @Description: 获取 currentTheme
     * @author guoKe
     * @date 2021/7/12
     */
    getCurrentTheme() {
        return this.currentTheme;
    }
    /**
     * @Description: 获取 themeList
     * @author guoKe
     * @date 2021/7/12
     */
    getThemeList(): Array<string> {
        return this.themeList;
    }
}
