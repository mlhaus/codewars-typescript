import {summation} from "./solution";
import {assert} from "chai";

describe('summation', () => {
  it('basic tests', () => {
    assert.equal(summation(1), 1)
    assert.equal(summation(8), 36)
  })
})