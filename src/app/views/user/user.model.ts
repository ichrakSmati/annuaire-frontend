import {Pole} from "../pole/pole.model";
import {Role} from '../../models/role.model';

export class User {
    id: string;
    nomPrenom: string;
    pass: string;
    role: Role;
    dateRecurtement:string;
    photo: string;
    cv: string;
    numTel: string;
    pole: Pole;
    email: string;
}