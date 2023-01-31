import { EAppActions } from "src/app/service/loading.service";

export interface IGrid {
    updatedObj(data: any);
    openRecordDetailPage(data: any);
    updateStatus(payload: any);
    popupClickHandler(data: any);
}

export interface IGridAction {
    data?: any,
    action: EAppActions
}

export interface IGridConfig {
    pageTitle: string,
    addbuttonTitle?: string,
    editButton?: string,
    id: string,
    searchTitle: string,
    searchId: string,
    tableWidth: any;
    tableHeight: any;
}

export class IFromioGrid {
    public static readonly configurations: IGridConfig = {
        pageTitle: 'Form Io List',
        addbuttonTitle: '',
        id: 'formioListGrid',
        searchTitle: 'Search id, Name Etc',
        searchId: 'id',
        tableHeight: "100%",
        tableWidth: 'max-content'
    }
}