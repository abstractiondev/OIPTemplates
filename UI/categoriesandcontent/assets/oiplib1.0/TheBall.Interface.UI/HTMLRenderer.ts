/**
 * Created by kalle on 27.1.2014.
 */


export module TheBall.Interface.UI {
    export interface HTMLRenderer {
        RenderToHtml(templateName: string, dataObject: any, callback:(error:any, output:string) => any);
    }
}
