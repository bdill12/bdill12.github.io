var assert = require("assert");
var tubulargen = require("../dist/node-module.js");
var genFields = '\r\n\t<tb-numeric-editor name=\"Id\"\r\n\t\tlabel=\"Id\" show-label=\"true\"\r\n\t\tplaceholder=\"\"\r\n\t\trequired=\"true\"\r\n\t\tread-only=\"false\"\r\n\t\tformat=\"\"\r\n\t\thelp=\"\"\u003e\r\n\t\u003c/tb-numeric-editor\u003e\r\n\t\u003ctb-simple-editor name=\"Name\"\r\n\t\teditor-type=\"string\" \r\n\t\tlabel=\"Name\" show-label=\"true\"\r\n\t\tplaceholder=\"\"\r\n\t\trequired=\"true\"\r\n\t\tread-only=\"false\"\r\n\t\thelp=\"\"\u003e\r\n\t\u003c/tb-simple-editor\u003e\r\n\t\u003ctb-simple-editor name=\"Company\"\r\n\t\teditor-type=\"string\" \r\n\t\tlabel=\"Company\" show-label=\"true\"\r\n\t\tplaceholder=\"\"\r\n\t\trequired=\"true\"\r\n\t\tread-only=\"false\"\r\n\t\thelp=\"\"\u003e\r\n\t\u003c/tb-simple-editor\u003e\r\n\t\u003ctb-simple-editor name=\"Email\"\r\n\t\teditor-type=\"string\" \r\n\t\tlabel=\"Email\" show-label=\"true\"\r\n\t\tplaceholder=\"\"\r\n\t\trequired=\"true\"\r\n\t\tread-only=\"false\"\r\n\t\thelp=\"\"\u003e\r\n\t\u003c/tb-simple-editor\u003e\r\n\t\u003ctb-simple-editor name=\"Phone\"\r\n\t\teditor-type=\"string\" \r\n\t\tlabel=\"Phone\" show-label=\"true\"\r\n\t\tplaceholder=\"\"\r\n\t\trequired=\"true\"\r\n\t\tread-only=\"false\"\r\n\t\thelp=\"\"\u003e\r\n\t\u003c/tb-simple-editor\u003e\r\n\t\u003ctb-date-time-editor name=\"Birthday\"\r\n\t\tlabel=\"Birthday\" show-label=\"true\"\r\n\t\trequired=\"true\"\r\n\t\tread-only=\"false\"\r\n\t\tformat=\"\"\r\n\t\thelp=\"\"\u003e\r\n\t\u003c/tb-date-time-editor\u003e\r\n\t\u003ctb-checkbox-field name=\"IsOwner\"\r\n\t\tread-only=\"false\"\r\n\t\thelp=\"\"\u003e\r\n\t\u003c/tb-checkbox-field\u003e';

describe('tubularTemplateServiceModule', function () {
    var models = require("./models");
    var columns = tubulargen.createColumns(models);

    describe('#createColumns()', function () {
        it('should return an array with 7 elements', function () {
            assert.notEqual(columns, []);
            assert.equal(columns.length, 7);
        });

        it('first element should match', function() {
            var first = require('./firstcolumn');
            assert.deepEqual(columns[0], first);
        });
    });

    describe('#generateFieldsArray()', function () {
        var fields = tubulargen.generateFieldsArray(columns);

        it('should return an array with 7 elements', function () {
            assert.notEqual(fields, []);
            assert.equal(fields.length, 7);
        });

        it('first element should match', function() {
            var expectedString = '\r\n\t<tb-numeric-editor name="Id"\r\n\t\tlabel="Id" show-label="true"\r\n\t\tplaceholder=""\r\n\t\trequired="true"\r\n\t\tread-only="false"\r\n\t\tformat=""\r\n\t\thelp="">\r\n\t</tb-numeric-editor>';
            assert.equal(fields[0], expectedString);
        });
    });

    describe('#generateFields()', function () {
        var htmlOutput = tubulargen.generateFields(columns);
        
        it('should html match', function () {
            assert.equal(htmlOutput, genFields);
        });
    });

    describe('#generatePopup()', function () {
        var htmlOutput = tubulargen.generatePopup(models, "TEST");

        it('should html match', function () {
            var expectedString = '<tb-form model="Model">' +
            '<div class="modal-header"><h3 class="modal-title">TEST</h3></div>' +
            '<div class="modal-body">' + genFields + '</div>' +
            '<div class="modal-footer">' +
            '<button class="btn btn-primary" ng-click="savePopup()" ng-disabled="!Model.$valid()">Save</button>' +
            '<button class="btn btn-danger" ng-click="closePopup()" formnovalidate>Cancel</button>' +
            '</div>' +
            '</tb-form>';

            assert.equal(htmlOutput, expectedString);
        });
    });

    describe('#getEditorTypeByDateType()', function() {
        it('should be tbDateTimeEditor', function () {
            assert.equal('tbDateTimeEditor', tubulargen.getEditorTypeByDateType('date'));
        });

        it('should be tbNumericEditor', function () {
            assert.equal('tbNumericEditor', tubulargen.getEditorTypeByDateType('numeric'));
        });

        it('should be tbCheckboxField', function () {
            assert.equal('tbCheckboxField', tubulargen.getEditorTypeByDateType('boolean'));
        });

        it('should be tbSimpleEditor', function () {
            assert.equal('tbSimpleEditor', tubulargen.getEditorTypeByDateType(''));
        });
    });

    describe('#generateForm()', function() {
        var htmlOutput = tubulargen.generateForm(columns, tubulargen.defaults.formOptions);

        it('should html match', function() {
            var expectedString = '<tb-form server-save-method=\"POST\" model-key=\"\" require-authentication=\"false\" server-url=\"undefined\" server-save-url=\"\" >\r\n\t<h1>Autogenerated Form</h1>' + genFields + '\r\n\t<div>\r\n\t\t<button class=\"btn btn-primary\" ng-click=\"$parent.save()\" ng-disabled=\"!$parent.model.$valid()\">Save</button>\r\n\t\t<button class=\"btn btn-danger\" ng-click=\"$parent.cancel()\" formnovalidate>Cancel</button>\r\n\t</div>\r\n</tb-form>';
            assert.equal(htmlOutput, expectedString);
        });
    });

    // TODO: generateCells

    // TODO: generateGrid
});