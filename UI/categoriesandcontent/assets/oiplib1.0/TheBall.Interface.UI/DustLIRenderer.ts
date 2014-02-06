/**
 * Created by kalle on 27.1.2014.
 */

/// <reference path="dustjs-linkedin.d.ts" />
/// <reference path="HTMLRenderer.ts" />

module TheBall.Interface.UI {

    export function RenderDustToHtml(templateName: string, rootObject: any, callback:(error: any, output: string) => any) {
        dust.render(templateName, rootObject, callback);
    }

    export class DustLIRenderer /*implements TheBall.Interface.UI.HTMLRenderer */ {
        RenderToHtml(templateName: string, rootObject: any, callback: (error: any, output: string) => any) {
            RenderDustToHtml(templateName, rootObject, callback);
        }
    }


}