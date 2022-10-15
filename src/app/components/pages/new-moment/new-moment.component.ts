import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  btnText:string = "Share right now"

  constructor() { }

  ngOnInit(): void {
  }

  createHandler(event: any) {
    console.log("deu boa")
  }

}
