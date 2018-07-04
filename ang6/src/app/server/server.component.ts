import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  // if the user types the correct email
  // display the success message
  //otherwise display the error message

  //hide the the messages success and failure
  successMsg: boolean = true;
  failureMsg: boolean = true;

  //email
  user: string = "gels@email.com";


  constructor() {}

  ngOnInit() {}

  //captures user input from field
  onKey(event: any) {
    this.user = event.target.value;

    console.log(this.user);
  }

  onValidate() {
    if (this.user === "gels@email.com") {
      console.log(this.user);
      this.successMsg = false;
      this.failureMsg = true;
    } else {
      console.log(this.user);
      this.failureMsg = false;
      this.successMsg = true;
      return false;
    }
  }
}
