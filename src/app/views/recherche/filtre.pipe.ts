import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Array<any>, terme: string, date: string, term: string, mail:string ){

        if (items && items.length){
            return items.filter(item =>{
                if (date && item.dateRecurtement.indexOf(date) === -1) {
                    return false;
                }
                else if (terme && item.nomPrenom.toLowerCase().indexOf(terme.toLowerCase()) === -1) {
                    return false;
                }

                else if (term && item.pole.nomService.indexOf(term) === -1){
                    return false;
                }
                else if (mail && item.email.indexOf(mail) === -1){
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
