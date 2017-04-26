'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverse number', function ()
{
    it('reverse number', function () {
        expect(app.reverseNumber(33334)).to.eql(43333);
    });
    it('not  number', function () {
        expect(app.reverseNumber('ddd3')).to.eql(false);
    });
});

describe('returnOnlyLetter', function ()
{
    it('return only  letters', function()
          {
              expect(app.returnOnlyLetter('dfg2')).to.eql('dfg');
        });
    it('return only  letters', function()
    {
        expect(app.returnOnlyLetter('22222')).to.eql('');
    });
    it('should return false ', function(){
        expect(app.returnOnlyLetter(2222)).to.eql(false);
    })
});

describe('isEmail', function ()
{
    it('return true', function () {
        expect(app.isEmail('matthew1212@o2.pl')).to.eql(true);
    });

    it('return false', function () {
        expect(app.isEmail('matthew1212@')).to.eql(false);
    });
});
