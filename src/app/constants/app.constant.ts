import { HttpHeaders } from "@angular/common/http";
export class AppConstants {

    public static ApiRequestTypes = {
        GET: 'get',
        POST: 'post'
    }

    public static readonly ROUTES = {
        FormIo: {
            default: { path: 'formio', relativePath: 'formio' },
            builder: { path: 'builder', relativePath: 'formio/builder' },
            view: { path: 'view', relativePath: 'formio/view' },
            list: { path: 'list', relativePath: 'formio/list' },
        },
        Requests: {
            default: { path: 'request', relativePath: 'request' },
            avaialable: { path: 'available', relativePath: 'request/available' },
        }
    }

    public static readonly Text = {
        apiWSuccess: 'Successfully Saved Record!',
        apiUpdateSuccess: 'Successfully Updated Record!',
        apiDeleteSuccess: 'Successfully Deleted Record!',
        apiFail: 'Something went wrong!',
    }

    // Form 
    public static readonly Form_Get_Listing = 'Forms';
    public static readonly Form_Get_Item = 'Forms';
    public static readonly Form_Add_Item = 'Forms';
    public static readonly Form_Update_Item = 'Forms/PutForm';
    public static readonly Form_Delete_Item = 'Forms/DeleteForm?id=';
    public static readonly Formio_Header_Item = 'WeatherForecast/GetHeaderInfo';

    // Form Submission
    public static readonly FSBase = 'FormSubmissions';
    public static readonly FormSubmission_Get_By_Form_Id = this.FSBase + '/GetFormSubmissionByFormId/formId?formId=';
    public static readonly FormSubmission_Get_Item = this.FSBase;
    public static readonly FormSubmission_Add_Item = this.FSBase;
    public static readonly FormSubmission_Update_Item = this.FSBase + '/PutForm';
    public static readonly FormSubmission_Delete_Item = this.FSBase + '/DeleteForm?id=';

    public static readonly httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*',
            })
    };

}