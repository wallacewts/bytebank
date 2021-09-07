import { ITransfer } from './interfaces/transfer.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  transfers: ITransfer[] = [];

  transferListenner(transfer: ITransfer) {
    this.transfers.push(transfer);
  }
}
