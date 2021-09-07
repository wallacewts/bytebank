import { ITransfer } from './../interfaces/transfer.interface';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {
  @Output()  aoTransferir = new EventEmitter<ITransfer>();

  transfer: ITransfer = {
    destination: 0,
    value: 0
  };

  transferir() {
    this.aoTransferir.emit(this.transfer);
  }
}
