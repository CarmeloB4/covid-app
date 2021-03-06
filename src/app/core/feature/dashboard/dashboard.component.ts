import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Data} from '../../../shared/models/data';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  single: any[] = [];
  view: any[] = [700, 400];
  @Input() getData$: Observable<Data>;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  yAxisLabel = 'Country';
  showYAxisLabel = true;
  xAxisLabel = 'Cases';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {}

  ngOnInit(): void {
  }


  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
