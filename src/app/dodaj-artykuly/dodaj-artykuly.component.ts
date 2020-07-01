import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Artykul } from '../Artykul';
import { ArtykulyServiceService } from '../artykuly-service.service';


@Component({
  selector: 'app-dodaj-artykuly',
  templateUrl: './dodaj-artykuly.component.html',
  styleUrls: ['./dodaj-artykuly.component.css']
})
export class DodajArtykulyComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  private artykul: Artykul;

  constructor(private artykulService: ArtykulyServiceService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log('on submit', this.artykul);
    let artykul: Artykul = new Artykul(
      this.form.value.id,
      this.form.value.name,
      this.form.value.price,
      this.form.value.vat,
      this.form.value.amount,
      );
      this.artykulService.addArtykul(artykul);
  }
}
