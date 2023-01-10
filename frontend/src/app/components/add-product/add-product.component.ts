import { Component, OnInit, NgZone  } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  ProductForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.ProductForm = this.formBuilder.group({
      name: [''],
      barcode: [''],
      description: [''],
      manufacturer: [''],
      category: [''],
    })
  }

  ngOnInit(): void {

  }

  onSubmit():any{
    this.crudService.addProduct(this.ProductForm.value)
    .subscribe(()=>{
      console.log('Data added successfully')
      this.ngZone.run(()=> this.router.navigateByUrl('/products-list'))
    },(err)=>{
      console.log(err)
    })
  }

}
