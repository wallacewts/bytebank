import { ITransfer } from './../interfaces/transfer.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {
  private transfersList: ITransfer[];

  constructor() {
    this.transfersList = [];
  }

  get transfers() {
    return this.transfersList;
  }

  add(transfer: ITransfer): void {
    this.hydrate(transfer);
    this.transfers.push(transfer);
  }

  private hydrate(transfer: ITransfer): void {
    transfer.date = new Date();
  }
}
