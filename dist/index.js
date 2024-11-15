var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SublistField = exports.SublistLine = exports.Sublist = exports.getSublist = void 0;
    function getSublist(rec, sublistId, isDynamic) {
        if (isDynamic === void 0) { isDynamic = null; }
        return new Sublist(rec, sublistId, isDynamic);
    }
    exports.getSublist = getSublist;
    var Sublist = /** @class */ (function () {
        function Sublist(rec, sublistId, isDynamic) {
            if (isDynamic === void 0) { isDynamic = null; }
            var _this = this;
            this.lineCount = function () {
                return _this.rec.getLineCount({ sublistId: _this.sublistId });
            };
            this.getLine = function (lineNumber) {
                return new SublistLine(_this, lineNumber);
            };
            this.getCurrentLine = function () {
                return new SublistLine(_this, _this.rec.getCurrentSublistIndex({
                    sublistId: _this.sublistId
                }));
            };
            this.getNSSublist = function () {
                return _this.rec.getSublist({ sublistId: _this.sublistId });
            };
            this.addLine = function (index) {
                _this.rec.insertLine({ line: index, sublistId: _this.sublistId });
                return _this.getLine(index);
            };
            this.addNewLine = function () {
                return _this.addLine(_this.lineCount());
            };
            this.removeLine = function (index) {
                _this.rec.removeLine({ line: index, sublistId: _this.sublistId });
            };
            this.collect = function () {
                var e_1, _a;
                var arr = [];
                try {
                    for (var _b = __values(_this), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var line = _c.value;
                        arr.push(line);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return arr;
            };
            this.forEach = function (callbackFn) {
                _this.collect().forEach(callbackFn);
            };
            this.reduce = function (callbackfn, initialValue) {
                return _this.collect().reduce(callbackfn, initialValue);
            };
            this.map = function (callbackfn) {
                return _this.collect().map(callbackfn);
            };
            this.filter = function (predicate) {
                return _this.collect().filter(predicate);
            };
            this.findIndex = function (predicate) {
                return _this.collect().findIndex(predicate);
            };
            this.find = function (predicate) {
                return _this.collect().find(predicate);
            };
            this.reverse = function () {
                return _this.collect().reverse();
            };
            this.slice = function (start, end) {
                return _this.collect().slice(start, end);
            };
            this.rec = rec;
            this._sublistId = sublistId;
            if (isDynamic === null)
                this._isDynamic = rec.isDynamic;
            else
                this._isDynamic = isDynamic;
        }
        Object.defineProperty(Sublist.prototype, "sublistId", {
            get: function () {
                return this._sublistId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Sublist.prototype, "record", {
            get: function () {
                return this.rec;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Sublist.prototype, "isDynamic", {
            get: function () {
                return this._isDynamic;
            },
            enumerable: false,
            configurable: true
        });
        Sublist.prototype[Symbol.iterator] = function () {
            var line, lineCount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        line = 0;
                        lineCount = this.rec.getLineCount({ sublistId: this.sublistId });
                        _a.label = 1;
                    case 1:
                        if (!(line < lineCount)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new SublistLine(this, line++)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return Sublist;
    }());
    exports.Sublist = Sublist;
    var SublistLine = /** @class */ (function () {
        function SublistLine(sublist, lineNumber) {
            var _this = this;
            this.getField = function (fieldId) {
                return new SublistField(_this, fieldId);
            };
            this.commit = function () {
                if (_this.sublist.isDynamic) {
                    _this.sublist.record.commitLine({ sublistId: _this.sublist.sublistId });
                }
                return _this;
            };
            this.cancel = function () {
                _this.sublist.record.cancelLine({ sublistId: _this.sublist.sublistId });
                return _this.sublist;
            };
            this._sublist = sublist;
            this._lineNumber = lineNumber;
        }
        Object.defineProperty(SublistLine.prototype, "lineNumber", {
            get: function () {
                return this._lineNumber;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SublistLine.prototype, "sublist", {
            get: function () {
                return this._sublist;
            },
            enumerable: false,
            configurable: true
        });
        return SublistLine;
    }());
    exports.SublistLine = SublistLine;
    var SublistField = /** @class */ (function () {
        function SublistField(line, fieldId) {
            var _this = this;
            this.getValue = function () {
                var rec = _this.record;
                var fieldId = _this.fieldId;
                var line = _this.line.lineNumber;
                var sublistId = _this.line.sublist.sublistId;
                if (_this.isDynamic) {
                    rec.selectLine({ sublistId: sublistId, line: line });
                    return rec.getCurrentSublistValue({
                        fieldId: fieldId,
                        sublistId: sublistId,
                    });
                }
                else {
                    return _this.record.getSublistValue({
                        fieldId: fieldId,
                        line: line,
                        sublistId: sublistId,
                    });
                }
            };
            this.getText = function () {
                var rec = _this.record;
                var fieldId = _this.fieldId;
                var line = _this.line.lineNumber;
                var sublistId = _this.line.sublist.sublistId;
                if (_this.isDynamic) {
                    rec.selectLine({ sublistId: sublistId, line: line });
                    return rec.getCurrentSublistText({
                        fieldId: fieldId,
                        sublistId: sublistId,
                    });
                }
                else {
                    return _this.record.getSublistText({
                        fieldId: fieldId,
                        line: line,
                        sublistId: sublistId,
                    });
                }
            };
            this.getSubrecord = function () {
                var rec = _this.record;
                var fieldId = _this.fieldId;
                var line = _this.line.lineNumber;
                var sublistId = _this.line.sublist.sublistId;
                if (_this.isDynamic || !("getSublistSubrecord" in rec)) {
                    rec.selectLine({ sublistId: sublistId, line: line });
                    return rec.getCurrentSublistSubrecord({ sublistId: sublistId, fieldId: fieldId });
                }
                else {
                    return rec.getSublistSubrecord({ sublistId: sublistId, fieldId: fieldId, line: line });
                }
            };
            this.setValue = function (value, ignoreFieldChange) {
                if (ignoreFieldChange === void 0) { ignoreFieldChange = false; }
                var rec = _this.record;
                var sublistId = _this.line.sublist.sublistId;
                var line = _this.line.lineNumber;
                var fieldId = _this.fieldId;
                if (_this.isDynamic || !("setSublistValue" in rec)) {
                    rec.selectLine({ sublistId: sublistId, line: line });
                    rec.setCurrentSublistValue({ sublistId: sublistId, fieldId: fieldId, value: value, ignoreFieldChange: ignoreFieldChange });
                }
                else {
                    rec.setSublistValue({ sublistId: sublistId, fieldId: fieldId, line: line, value: value });
                }
                return _this.line;
            };
            this.setText = function (text) {
                var rec = _this.record;
                var sublistId = _this.line.sublist.sublistId;
                var line = _this.line.lineNumber;
                var fieldId = _this.fieldId;
                if (_this.isDynamic || !("setSublistText" in rec)) {
                    rec.selectLine({ sublistId: sublistId, line: line });
                    rec.setCurrentSublistText({ sublistId: sublistId, fieldId: fieldId, text: text });
                }
                else {
                    rec.setSublistText({ sublistId: sublistId, fieldId: fieldId, line: line, text: text });
                }
                return _this.line;
            };
            this.modifyValue = function (closure) {
                var oldValue = _this.getValue();
                var newValue = closure(oldValue);
                return _this.setValue(newValue);
            };
            this.modifyText = function (closure) {
                var oldValue = _this.getText();
                var newValue = closure(oldValue);
                return _this.setText(newValue);
            };
            this.hasSubrecord = function () {
                return _this.record.hasSublistSubrecord({
                    fieldId: _this.fieldId,
                    line: _this.line.lineNumber,
                    sublistId: _this.line.sublist.sublistId,
                });
            };
            this.removeSubrecord = function () {
                if ('removeSublistSubrecord' in _this.record) {
                    _this.record.removeSublistSubrecord({
                        fieldId: _this.fieldId,
                        line: _this.line.lineNumber,
                        sublistId: _this.line.sublist.sublistId,
                    });
                }
                else {
                    _this.record.removeCurrentSublistSubrecord({
                        fieldId: _this.fieldId,
                        sublistId: _this.line.sublist.sublistId,
                    });
                }
                return _this.line;
            };
            this.getNSField = function () {
                return _this.line.sublist.record.getSublistField({
                    sublistId: _this.line.sublist.sublistId,
                    fieldId: _this.fieldId,
                    line: _this.line.lineNumber,
                });
            };
            this.getNSColumn = function () {
                return _this.line.sublist.getNSSublist().getColumn({ fieldId: _this.fieldId });
            };
            this.line = line;
            this.fieldId = fieldId;
        }
        Object.defineProperty(SublistField.prototype, "record", {
            get: function () {
                return this.line.sublist.record;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SublistField.prototype, "isDynamic", {
            get: function () {
                return this.line.sublist.isDynamic;
            },
            enumerable: false,
            configurable: true
        });
        return SublistField;
    }());
    exports.SublistField = SublistField;
});
