/**
 * Created by kalle on 27.1.2014.
 */

/// <reference path="dustjs-linkedin.d.ts" />

import htmlRenderer = require("HTMLRenderer");
import dust = require("dustjs-linkedin");


module TheBall.Interface.UI {
    class DustLIRenderer implements htmlRenderer.TheBall.Interface.UI.HTMLRenderer {
        RenderToHtml(templateName: string, rootObject: any, callback:(error:any, output:string) => any) {
            dust.render(templateName, rootObject, callback);
        }
    }
}