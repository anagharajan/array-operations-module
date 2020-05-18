var expect = require('expect');
var server = require('../server');

describe('Array Sum', () => {
    it('should exist', () => {
        var arr = [1];
        var arraySum = server.SumArray(arr);

        expect(arraySum).toBeTruthy();
    });

    it('should return a number', () => {
        var arr = [2,3]
        var arraySum = server.SumArray(arr)

        expect(typeof arraySum).toBe('number');
    });

    it('should return the value', () => {
        var arr = [2,3]
        var arraySum = server.SumArray(arr)

        expect(arraySum).toBe(5);
    });
});

describe('Array Average', () => {
    it('should return the value', () => {
        var arr = [1,2,3,4]
        var arraySum = server.AverageArray(arr)

        expect(arraySum).toBe(2.5);
    });
});

describe('Unique Array', () => {
    it('should return a unique array', () => {
        var arr = [2,2,7,5,3,6,4,7,9,8,1,0,0];
        var arrayuniq = server.UniqArray(arr);
        var result = [2,7,5,3,6,4,9,8,1,0];

        expect(arrayuniq).toEqual(result);
    });
});

describe('Unique Array Sort', () => {
    it('should return a sorted unique array', () => {
        var arr = [2,2,7,5,3,6,4,7,9,8,1,0,0];
        var arrayuniqsort = server.UniqArraySort(arr);
        var result = [0,1,2,3,4,5,6,7,8,9];

        expect(arrayuniqsort).toEqual(result);
    });
});