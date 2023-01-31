import { EAppActions } from "../service/loading.service";

export class FormioConstant {

    public static GridObj = {
            columns: [
              {
                name: "ID",
                key: "id",
                cssStyle: {'min-width': '5em', 'text-align': 'center'},
                inputType: "plain",
                isShow: true,
                columnString: "ID",
              },
              {
                name: "Json",
                key: "formJson",
                cssStyle: {'min-width': '90em', 'text-align': 'left'},
                inputType: "plain",
                isShow: true,
                class:"css"
              },
              {
                name: "Status",
                key: "formioStatus",
                cssStyle: {'min-width': '5em', 'text-align': 'center'},
                inputType: "menu",
                isShow: true,
                options: [{key: EAppActions.GridActionMenuActive, value: 'Active'},
                {key: EAppActions.GridActionMenuArchive, value: 'Archive'},
                {key: EAppActions.GridActionMenuCopy, value: 'Copy'},
                {key: EAppActions.GridActionMenuDelete, value: 'Delete'}]
              },
              {
                name: "View",
                key: EAppActions.GridActionEnableViewRow,
                cssStyle: {'min-width': '3em', 'text-align': 'center'},
                inputType: "icon",
                isShow: true,
                color:'default'
              },
              {
                name: "Edit",
                key: EAppActions.GridActionEnableEditBuilder,
                cssStyle: {'min-width': '3em', 'text-align': 'center'},
                inputType: "icon",
                isShow: true,
                color:'primary'
              },
              {
                name: "Delete",
                key:  EAppActions.GridActionEnableDeleteRow,
                cssStyle: {'min-width': '4em', 'text-align': 'center'},
                inputType: "icon",
                isShow: true,
                color:'warn'
              },
            ],
            "grid-settings": {
              inlineEditting: true,
            },
          };
}