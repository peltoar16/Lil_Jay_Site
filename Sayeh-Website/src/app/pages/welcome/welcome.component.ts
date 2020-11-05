import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  coinwallet: string[] = ['wallet1','wallet2'];
  selectedwallet: string;

  constructor() { }

  ngOnInit(): void { 
  }

}
