import { Component, OnInit } from '@angular/core';
import { ArtykulyServiceService } from '../artykuly-service.service';
import { Artykul } from '../Artykul';


@Component({
  selector: 'app-artykuly',
  templateUrl: './artykuly.component.html',
  styleUrls: ['./artykuly.component.css']
})
export class ArtykulyComponent implements OnInit {

  private artykul: Artykul[];
  title = 'Artykuły:';

  constructor(private artykulService: ArtykulyServiceService) {
  }

  ngOnInit() {
    this.artykulService.getArtykuly().subscribe (this.artykul => {
    this.artykul = this.artykul;
    });
  }
}
