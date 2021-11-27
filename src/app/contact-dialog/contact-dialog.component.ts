import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
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
  isLoading: boolean = false;
  isFormSubmit: boolean = false;
  constructor() { 
  }

  ngOnInit(): void {
  }

  submitForm(contactForm){
    this.isError = false;
    if(contactForm.firstName === '' || contactForm.lastName === '' || contactForm.email === '' || contactForm.phoneNumber === '' || contactForm.message === ''){
      this.isError = true;
      this.isLoading = false;
    }else{
      this.isError = false;
      this.isLoading = true;
      var template_params = {
        "from_name": contactForm.email,
        "to_name": "Kollen",
        "first_name": contactForm.firstName,
        "last_name": contactForm.lastName,
        "phone": contactForm.phoneNumber,
        "message": contactForm.message
     }

     var service_id = "service_2mn9g7d";
   var template_id = "template_i85rat4";
   emailjs.send(service_id, template_id, template_params,'user_851UUPc50hG8UDXtqZsyn').then(
    (response) =>{
      this.isLoading = false;
      this.isFormSubmit = true;
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      this.isLoading = false;
      this.isError = true;
      console.log('FAILED...', err);
    });

    }
    
  }

}
