"use strict";
const assert = require('assert');
const querablep = require('../index');

describe('A successful promise', () => {

  let resolve, reject;
  const p = querablep(new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  }))

  it('which is not done yet should not be rejected',  () => assert.equal(p.isRejected(), false));
  it('which is not done yet should not be resolved',  () => assert.equal(p.isResolved(), false));
  it('which is not done yet should not be fulfilled', () => assert.equal(p.isFulfilled(), false));

  it('which is done should be fulfilled', () => {
    resolve();
    return p.then(() => {
      assert.equal(p.isFulfilled(), true);
    });
  });

  it('which is done should be resolved',     () => assert.equal(p.isResolved(), true));
  it('which is done should not be rejected', () => assert.equal(p.isRejected(), false));
});
