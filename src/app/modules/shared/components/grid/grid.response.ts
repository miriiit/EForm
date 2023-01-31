import { SharedService } from "../../service/shared.service";

export class GridResponse {
    public static getGridResponse(list,key){
        switch(key){
            case 'formioListGrid':
                list.forEach(obj=>{
                    obj['edit'] = false;
                })
            break;
        }
        return list;
    }

}