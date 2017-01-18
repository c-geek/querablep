"use strict";
const assert = require('assert');
const querablep = require('../index');

describe('A failing promise', () => {

  let resolve, reject;
  const p = querablep(new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  }))

  it('which is not done yet should not be rejected',  () => assert.equal(p.isRejected(), false));
  it('which is not done yet should not be resolved',  () => assert.equal(p.isResolved(), false));
  it('which is not done yet should not be fulfilled', () => assert.equal(p.isFulfilled(), false));

  it('which has failed should be fulfilled', () => {
    reject();
    return p.catch(() => {
      assert.equal(p.isFulfilled(), true);
    });
  });

  it('which is done should be resolved',     () => assert.equal(p.isResolved(), false));
  it('which is done should not be rejected', () => assert.equal(p.isRejected(), true));
});
