export interface ISorting {
    sortOrder: string;
    sortBy:string;
}

export class FormioGridISort {
    public static readonly SORT : ISorting = {
        sortBy: 'id',
        sortOrder: 'asc'
    } 
}