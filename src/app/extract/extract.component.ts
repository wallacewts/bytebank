import { TransfersService } from './../services/transfers.service';
import { ITransfer } from './../interfaces/transfer.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
 transfers: ITransfer[];

  constructor(private transfersService: TransfersService) {}

  ngOnInit(): void {
    this.transfers = this.transfersService.transfers;
  }
}
