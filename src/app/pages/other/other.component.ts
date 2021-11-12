import { Component, OnInit, AfterViewInit } from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit, AfterViewInit {

  textValue: string;
  title = '1';

  public get text(): string { // 计算属性
    console.log('检测2221', this.textValue); // 打印log
    // 检测
    // 检测
    return this.textValue;
  }

  constructor(private themeService: AppService) {
    this.textValue = 'text1';
  }
  test = 'test';
  themeList = [];

  ngOnInit() {
    console.log('检测2', this.textValue); // 打印log
    setTimeout(() => {
      this.title = '2111';
    }, 5000);
    this.themeList = this.themeService.getThemeList();
  }

  changeTheme(theme) {
      this.themeService.changeTheme(theme);
  }

  ngAfterViewInit(): void { // 检测完成后初始函数（只执行一次）
    console.log('检测3', this.textValue); // 打印log
    // this.textValue = '123'; // 第一次检测后更改 textValue
    setTimeout(() => {
      this.textValue = '123';
    }, 0);
  }


}
