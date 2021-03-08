import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, pipe } from "rxjs";
import { FortniteServicesService } from '../services/api/fortnite-services.service';

@Component({
  selector: "app-fortnite",
  templateUrl: "./fortnite.component.html",
  styleUrls: ["./fortnite.component.css"],
})
export class FortniteComponent implements OnInit {
  constructor(private http: HttpClient, private fortniteServices: FortniteServicesService) {}

  value: string;
  
  account : any = [];
  battlePass : any = [];
  stats : any = [];
  listaVal: any = [];

  ngOnInit() {}

  ricerca() {
    this.fortniteServices.get(this.value).subscribe((element) => {
      this.listaVal = element.data;
      this.account = this.listaVal.account;
      this.battlePass = this.listaVal.battlePass;
      this.stats = this.listaVal.stats;
      console.log(this.account);
    });
    
  }

}
