import { ITransfer } from './../interfaces/transfer.interface';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {
  @Output()  transferEvent = new EventEmitter<ITransfer>();

  transfer: ITransfer = {
    destination: 0,
    value: 0
  };

  emiTransfer(): void {
    const newTrasnfer: ITransfer = {...this.transfer};

    this.transferEvent.emit(newTrasnfer);
    this.clearFields();
  }

  clearFields(): void {
    this.transfer = {destination: 0, value: 0};
  }
}
