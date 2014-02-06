/**
* Created by kalle on 27.1.2014.
*/
var TheBall;
(function (TheBall) {
    (function (Interface) {
        /// <reference path="dustjs-linkedin.d.ts" />
        /// <reference path="HTMLRenderer.ts" />
        (function (UI) {
            function RenderDustToHtml(templateName, rootObject, callback) {
                dust.render(templateName, rootObject, callback);
            }
            UI.RenderDustToHtml = RenderDustToHtml;

            var DustLIRenderer = (function () {
                function DustLIRenderer() {
                }
                DustLIRenderer.prototype.RenderToHtml = function (templateName, rootObject, callback) {
                    RenderDustToHtml(templateName, rootObject, callback);
                };
                return DustLIRenderer;
            })();
            UI.DustLIRenderer = DustLIRenderer;
        })(Interface.UI || (Interface.UI = {}));
        var UI = Interface.UI;
    })(TheBall.Interface || (TheBall.Interface = {}));
    var Interface = TheBall.Interface;
})(TheBall || (TheBall = {}));
//# sourceMappingURL=DustLIRenderer.js.map
