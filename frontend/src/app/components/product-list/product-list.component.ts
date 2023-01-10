import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Products:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getProducts().subscribe( res=>{
      console.log(res)
      this.Products = res;
    })
  }

  delete(id:any, i:any){
    console.log(id);
    this.crudService.deleteProduct(id).subscribe( res=>{
      this.Products.splice(i,1);
    })
  }
}
