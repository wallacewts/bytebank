import { TransfersService } from './services/transfers.service';
import { ITransfer } from './interfaces/transfer.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private transfersService: TransfersService) {}

  transferListenner(transfer: ITransfer) {
    this.transfersService.add(transfer);
  }
}
