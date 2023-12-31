import { DemoItemLoader } from './demo-item-loader.service';
import { PrimaryKey } from 'material-formtastic';

describe('DemoItemLoader', () => {
  let loader: DemoItemLoader;

  beforeEach(() => {
    loader = new DemoItemLoader();
  });

  it('loadValue should return an Observable of item', done => {
    const primaryKey: PrimaryKey = 'test';
    loader.loadValue(primaryKey).subscribe(item => {
      expect(item).toEqual({});
      done();
    });
  });
});
