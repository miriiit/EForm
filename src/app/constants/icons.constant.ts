import { EAppActions } from "../service/loading.service";

export class IconsConstant {
    public static getIcon(key) {
        let icon;
        switch (key) {
            case 'viewFormio':
                icon = 'trending_up';
                break;
            case 'deleteFormio':
                icon = 'add';
                break;
            case 'edit':
                icon = 'edit';
                break;
            case EAppActions.GridActionEnableEditBuilder:
                icon = 'edit';
                break;
            case EAppActions.GridActionEnableViewRow:
                icon = 'preview';
                break;
            case EAppActions.GridActionMenuArchive:
                icon = 'archive';
                break;
            case EAppActions.GridActionMenuActive:
                icon = 'add';
                break;
            case EAppActions.GridActionMenuCopy:
                icon = 'file_copy';
                break;
            case EAppActions.GridActionMenuDelete:
                icon = 'delete_forever';
                break;
            case EAppActions.GridActionEnableDeleteRow:
                icon = 'delete_forever';
                break;
            case 'cancel':
                icon = 'cancel';
                break;
            case 'save':
                icon = 'save';
                break;
        }
        return icon;
    }
}