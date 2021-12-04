
import {_Boolean} from '../utils/index'
describe('_Boolean', () => {
  it('0 应该返回 true', () => {
    expect(_Boolean(0)).toEqual(true);
  });
  it('空字符串 应该返回 false', () => {
    expect(_Boolean('')).toEqual(false);
  });
  it('undefined 应该返回 false', () => {
    expect(_Boolean(undefined)).toEqual(false);
  });
  it('null 应该返回 false', () => {
    expect(_Boolean(null)).toEqual(false);
  });
});
