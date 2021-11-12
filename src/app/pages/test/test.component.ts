// // 如果值的变化过于频繁，可能不考虑绑定, 通过操作DOM，减少检测开销
//
// import {
//   Component,
//   OnInit,
//   AfterViewChecked,
//   NgZone,
//   ViewChild,
//   ElementRef,
//   Renderer2,
//   OnDestroy
// } from '@angular/core';
// import { formatDate } from '@angular/common';
//
// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.scss'],
// })
// export class TestComponent implements OnInit, AfterViewChecked, OnDestroy {
//   dateValue: number;
//   @ViewChild('date', { static: true }) dateRef: ElementRef = new ElementRef(
//     'p'
//   ); // 获取模板
//   date = formatDate(Date.now(), 'HH:mm:ss:SSS', 'en-US');
//   timer = null;
//
//   constructor(private ngZone: NgZone, private r2: Renderer2) {
//     this.dateValue = Date.now();
//   }
//
//   ngOnInit(): void {
//     this.timer = setInterval(() => {
//       this.date = formatDate(Date.now(), 'yyyy-MM-dd HH:mm:ss:SSS', 'en-US');
//     }, 1);
//   }
//
//   ngAfterViewChecked(): void {
//     // console.log(this.date);
//     // throw new Error('Method not implemented.');
//   }
//   ngOnDestroy() {
//     clearInterval(this.timer);
//     this.timer = null;
//   }
// }




import {
  Component,
  OnInit,
  AfterViewChecked,
  NgZone,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit, AfterViewChecked {
  dateValue: number;
  @ViewChild('date', { static: true }) dateRef: ElementRef = new ElementRef(
    'p'
  ); // 获取模板

  public get date(): number {
    console.log('检测');
    return this.dateValue;
  }

  constructor(private ngZone: NgZone, private r2: Renderer2) {
    this.dateValue = Date.now();
  }

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.r2.setProperty( // 直接操作DOM, 修改日期
          this.dateRef.nativeElement,
          'innerHTML',
          formatDate(Date.now(), 'HH:mm:ss:SSS', 'en-US') // 格式化
        );
      }, 0);
    });
  }
}

