import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {

    transform(array: any[], query: string): any {
        if (query) {
            return _.filter(array, row=>row.name.indexOf(query) > -1);
        }
        return array;
    }
}


/* @Pipe({
    name: 'dataFilter',
    pure: false
})
export class DataFilterPipe implements PipeTransform {
  /*  transform(list: Array<any>, searchTerm: any): Array<any> {
      if(!list)
        return [];
      if(!searchTerm) return list;
      else {
         return list.filter(item => item.cuisine_type[0] == searchTerm);
      } 
   } 

   transform(array: any[], query: string): any {
    if (query) {
        return _.filter(array, row=>row.name.indexOf(query) > -1);
    }
    return array;
} 
}*/
