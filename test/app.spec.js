'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverse number', function ()
{
    it('reverse number', function () {
        expect(app.reverseNumber(33334)).to.eql(43333);
    });
});

describe('returnOnlyLetter', function ()
{
    it('return only  letters', function()
          {
              expect(app.returnOnlyLetter('dfg2')).to.eql('dfg');
        });
});

describe('isEmail', function ()
{
    it('return true', function () {
        expect(app.isEmail('matthew1212@o2.pl')).to.eql(true);
    });
});
