import { Component, OnInit,ViewChild } from '@angular/core';
import { MatchDetailService } from 'src/app/service/match-detail.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})

export class MatchDetailsComponent implements OnInit {
    constructor(private matchDetailService:MatchDetailService) { }
    displayedColumns: string[] = ['minute', 'player', 'event', 'score'];
    dataSourceEvents = new MatTableDataSource<eventSTR>([]);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    matchId:String;
    match:{
    leagueName: String,
    startDateTime: Date,
    homeTeam: {
        name: String,
        coach: String,
        players: [
            {
                name: String,
                position: String,
                number: Number
            }
        ],
        substitutes: [
            {
                minute: Number,
                playerIn: String,
                playerOut: String
            }
        ]
    },
    awayTeam: {
        name: String,
        coach: String,
        players: [
            {
                name: String,
                position: String,
                number: Number
            }
        ],
        substitutes: [
            {
                minute: Number,
                playerIn: String,
                playerOut: String
            }
        ]
    },
    status: String, // "", FT, HT
    events: [
        {
            minute: Number,
            player: String,
            event: String,  // Red, Yellow, Goal
            homeScore: Number,
            awayScore: Number
        }
    ],
    commentaries: [
        {
            minute: Number,
            message: String
        }
    ],
    statistic: {
        shotsOnTarget: {
            homeTeam: Number,
            awayTeam: Number
        },
        shotsOffTarget: {
            homeTeam: Number,
            awayTeam: Number
        },
        possession: {
            homeTeam: Number,
            awayTeam: Number
        },
        corners: {
            homeTeam: Number,
            awayTeam: Number
        },
        offsides: {
            homeTeam: Number,
            awayTeam: Number
        },
        fouls: {
            homeTeam: Number,
            awayTeam: Number
        },
        goalKicks: {
            homeTeam: Number,
            awayTeam: Number
        }
    }
};
  ngOnInit() {
    //this.dataSourceEvents.paginator = this.paginator;

    this.matchDetailService.emitter.subscribe(
      data => {
          this.matchId = data._id;
          this.match=data;
        //   console.log(data);
          //   this.dataSourceEvents=data.events;
          this.dataSourceEvents=new MatTableDataSource<eventSTR>(data.events);
          this.dataSourceEvents.paginator = this.paginator;
        //   this.message2=new MatTableDataSource<[{minute: Number,message: String}]>(data.commentaries);
         // this.message2=data.commentaries;
         // console.log(this.message2);
      }
  );
  //this.dataSourceEvents.paginator = this.paginator;
  }
}

export interface eventSTR {
    minute: Number,
        player: String,
        event: String,  // Red, Yellow, Goal
        homeScore: Number,
        awayScore: Number
  }
