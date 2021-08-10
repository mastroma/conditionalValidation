import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'conditionalValidation';
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      user_role: [''],
      locations: [''],
    });

    

      this.registrationForm.get('user_role').valueChanges
      .subscribe(value => {
        const locations = this.registrationForm.get('locations');
        if (value != 'read-only') {
          locations.setValidators(Validators.required)
        } else {
          locations.clearValidators();
        }
        locations.updateValueAndValidity();
      });
  }

}
