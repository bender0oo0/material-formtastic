import {createFormControl} from "./helper";

describe('helper tests', () => {
  it('max length adds validator', () => {
    const control = createFormControl({  maxLength: 100 });
    expect(control).toBeDefined();
  })
})
