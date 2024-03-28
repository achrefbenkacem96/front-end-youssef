// CollocationBooking.ts


import { AnnouncementCollocation } from "./AnnouncementCollocation";
import {StatusType} from "./StatusType";

export class CollocationBooking {
  idCollocationBooking!: number;
  annoncementCollocationId!: any;
  annoncementCollocation!: AnnouncementCollocation;
  startDate!: Date;
  endDate!: Date;
  statusType!:StatusType;
  telephone!:string;
}
