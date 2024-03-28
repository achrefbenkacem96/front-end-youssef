// AnnouncementCollocation.ts
import {HouseType} from "./HouseType";
import {EquipmentType} from "./EquipementType";
import { FileDB } from "./FileDB";
import { FeedBack } from "./FeedBack";
import { StatusType } from "./StatusType";
import { Etat } from "./Etat";


export class AnnouncementCollocation {

  
    id!: any;
    annoncementCollocationId!: number;
    homeSize!: number;
    numPerso!: number;
    address!: string;
    pricePerPerson!: number;
    houseType!: HouseType;
    equipmentType!: EquipmentType;
    images!:FileDB[];
    favori!:Boolean;
    archive!:Boolean;
    userId!:number;
    feedbackMap!:FeedBack[];
    averageRating!:number;
    status!:StatusType;
    etat!:Etat;

}
