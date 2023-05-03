import { Component, OnInit } from '@angular/core';
import { CompanieService } from '../../services/companie.service';
import { Companie } from '../../models/companie';


// https://medium.com/@fernandoevangelista_28291/consumindo-api-rest-com-httpclient-no-angular-8-62c5d733ffb6

@Component({
  selector: 'app-companie',
  templateUrl: './companie.component.html',
  styleUrls: ['./companie.component.css']
})

export class CompanieComponent implements OnInit{
  companie = {} as Companie;
  companies!: Companie[];

  constructor(private companieService: CompanieService) {}

  ngOnInit() {
    this.getCompanie();
  }

  getCompanie() {
    this.companieService.getCompanie().subscribe((companies: Companie[]) => {
      console.log(this.companieService.getCompanie())
      this.companies = companies;
    });
  }
}
