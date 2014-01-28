/**
* Created by kalle on 27.1.2014.
*/
var dust = require("dustjs-linkedin");

var TheBall;
(function (TheBall) {
    (function (Interface) {
        (function (UI) {
            var DustLIRenderer = (function () {
                function DustLIRenderer() {
                }
                DustLIRenderer.prototype.RenderToHtml = function (templateName, rootObject, callback) {
                    dust.render(templateName, rootObject, callback);
                };
                return DustLIRenderer;
            })();
        })(Interface.UI || (Interface.UI = {}));
        var UI = Interface.UI;
    })(TheBall.Interface || (TheBall.Interface = {}));
    var Interface = TheBall.Interface;
})(TheBall || (TheBall = {}));
//# sourceMappingURL=DustLIRenderer.js.map
