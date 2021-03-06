import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {MatchService} from '../../service/match.service';
import { MatchDetailService } from '../../service/match-detail.service';



@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.scss']
})
export class ListMatchesComponent implements OnInit {
   displayedColumns: string[] = ['st','leagueName','homeTeam', 'awayTeam' ];
   dataSource:any;

  constructor(private matchService:MatchService,private matchDetailService:MatchDetailService ) { 
    this.matchService.findAll().subscribe(
      data=>{
      this.dataSource = data;
      }) ;
  }

  getRecord(element:any){
    //console.log("this is the selected _ID="+element._id);
    this.matchDetailService.emitValue(element._id);
  }

  ngOnInit() {
    
  }

}



