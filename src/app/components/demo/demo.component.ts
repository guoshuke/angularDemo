import { Component, OnInit,  ChangeDetectionStrategy,
  ChangeDetectorRef, ElementRef, ViewChild, NgZone, Renderer2, AfterViewChecked} from '@angular/core';
import { formatDate } from '@angular/common';
import {Input} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  inputs: ['title', 'age'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent implements OnInit, AfterViewChecked {
  dateValue: number;
  @ViewChild('date', { static: true }) dateRef: ElementRef = new ElementRef(
    'p'
  ); // 获取模板
  @Input() title ;

  public get date(): number {
    console.log('检测');
    return this.dateValue;
  }

  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone, private r2: Renderer2) {
    this.dateValue = Date.now();
    this.cd.markForCheck(); // 手动更新
  }

  ngOnInit() {
  }
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
