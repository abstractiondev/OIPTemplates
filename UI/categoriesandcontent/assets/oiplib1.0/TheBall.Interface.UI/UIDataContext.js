/**
* Created by kalle on 27.1.2014.
*/
var TheBall;
(function (TheBall) {
    (function (Interface) {
        /// <reference path="jquery.d.ts" />
        /// <reference path="dustjs-linkedin.d.ts" />
        (function (UI) {
            var UIDataContext = (function () {
                function UIDataContext() {
                }
                UIDataContext.prototype.myTest = function () {
                };
                return UIDataContext;
            })();
        })(Interface.UI || (Interface.UI = {}));
        var UI = Interface.UI;
    })(TheBall.Interface || (TheBall.Interface = {}));
    var Interface = TheBall.Interface;
})(TheBall || (TheBall = {}));
//# sourceMappingURL=UIDataContext.js.map
