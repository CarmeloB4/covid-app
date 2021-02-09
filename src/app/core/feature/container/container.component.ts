import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {Observable} from 'rxjs';
import {Data} from '../../../shared/models/data';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  getData: Observable<Data>;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getData = this.service.getData();
  }

}
