import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public categoryService: CategoryService,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      contactno: new FormControl('', Validators.required),
      emailadd: new FormControl('', Validators.required),
      medicalcondition: new FormControl('', Validators.required),
      prescription: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required)
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.categoryService.create(this.form.value).subscribe((res:any) => {
         console.log('Category created successfully!');
         this.router.navigateByUrl('category/index');
    })
  }

}
