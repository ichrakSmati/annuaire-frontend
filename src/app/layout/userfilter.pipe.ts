import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {
    transform(items: Array<any>, nom: string, date: string, term: string, mail:string, num:string ){

        if (items && items.length){
            return items.filter(item =>{
                if (nom && item.nomPrenom.toLowerCase().indexOf(nom.toLowerCase()) === -1){
                    return false;
               }
                else if (date && item.dateRecurtement.indexOf(date) === -1) {
                    return false;
                }
                else if (term && item.pole.nomService.indexOf(term) === -1){
                    return false;
                }
                else if (mail && item.email.indexOf(mail) === -1){
                    return false;
                }
                else if (num && item.numtel.toString().indexOf(num) === -1){
                    console.log(num);
                    console.log(item.numtel);
                    return false;
                }
                return true;
            })
        }

        else{
            return items;
        }
    }
}


@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
    transform(items: any[], sortedBy: string): any {
        console.log('sortedBy', sortedBy);
        return items.sort((a:any, b:any) => { return b[sortedBy] - a[sortedBy] } );
    }
}
