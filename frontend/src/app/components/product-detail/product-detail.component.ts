import { Component, OnInit, NgZone  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  getId:any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private activeRout: ActivatedRoute,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.getId = this.activeRout.snapshot.paramMap.get('id');
    this.crudService.getProduct(this.getId).subscribe(res => {
      console.log(res['product'])
      this.updateForm.setValue({
        name: res['product']['name'],
        barcode: res['product']['barcode'],
        description: res['product']['description'],
        manufacturer: res['product']['manufacturer'],
        category: res['product']['category'],
      });
    });

    this.updateForm = this.formBuilder.group({
      name: [''],
      barcode: [''],
      description: [''],
      manufacturer: [''],
      category: [''],
    });
   }

  ngOnInit(): void {


  }

  onUpdate():any {
    this.crudService.updateProduct(this.getId,this.updateForm.value)
    .subscribe(()=> {
      console.log('Data updated successfully')
      this.ngZone.run(()=> this.router.navigateByUrl('/products-list'))
    },(err)=>{
      console.log(err)
    })
  }

}
