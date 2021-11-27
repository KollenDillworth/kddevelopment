import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  contactForm : any = {
    "firstName":"",
    "lastName":"",
    "email": "",
    "phoneNumber": "",
    "message": ""
  }

  isError: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(contactForm){
    this.isError = false;
    if(contactForm.firstName === '' || contactForm.lastName === '' || contactForm.email === '' || contactForm.phoneNumber === '' || contactForm.message === ''){
      this.isError = true;
    }else{
      this.isError = false;
    }
    
  }

}
