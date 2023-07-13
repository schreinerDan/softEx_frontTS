import { ConnectableObservable } from 'rxjs';
import { StorageService } from './../shared/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public storage:StorageService,private router: Router) { }

  ngOnInit(): void {

  }
  checkout():void{

    this.router.navigate(['/shop']);
  }
}
