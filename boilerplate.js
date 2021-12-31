/*jslint unordered:true, long:true, getset:true, this:true, name:true, browser:true, devel:true */
/*jshint esversion: 6 */

(function () {
    function Model(data) {
        this._data = data;
    }

    // use prototype to define accessor methods
    Object.defineProperty(Model.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        }
    });

    /*
    Or, could use Object.assign instead of prototype
    Reference: https://stackoverflow.com/questions/44214980/define-get-set-in-constructor-function
    function Model(data) {
        this._data = data;
        Object.assign(this, {
            get data() {
                return this._data;
            },
            set data(value) {
                this._data = value;
            }
        });
    }
    */

    function View() {
        this.render = function (model) {
            console.log(model.data);
        };
    }

    function Controller(model, view) {
        window.addEventListener("click", function () {
            model.data = "Hello, world!";
            view.render(model);
        });
    }

    let model = new Model("Default data");
    let view = new View();
    let controller = new Controller(model, view);
}());

