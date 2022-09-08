import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';

declare var window:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Array<any>;

  constructor(
    private router: Router,
    public itemService: ItemService
  ){}

  ngOnInit(){
    this.items = this.itemService.getItems();
  }

  ionViewDidEnter() {
    var one = window.One;
    one.sendInteraction("/home", null, 
      function(response) {
        console.log(response)
      }, 
      function(error) { 
        console.log(error)
      }
    );
  }
}
