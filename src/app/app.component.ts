import { ITransfer } from './interfaces/transfer.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  transfer: ITransfer;

  transferListenner(transfer: ITransfer) {
    this.transfer = transfer;
  }
}
