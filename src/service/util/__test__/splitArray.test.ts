import { splitArray } from 'service/util/splitArray';
import { orderModelMockData } from 'service/mock/data/orderModelMockData';

describe('src/service/util/splitArray', () => {
  it('test splitArray working correctly', () => {
    const result = splitArray(
      [orderModelMockData, orderModelMockData, orderModelMockData, orderModelMockData, orderModelMockData],
      2,
    );
    expect(result).toStrictEqual([
      [orderModelMockData, orderModelMockData],
      [orderModelMockData, orderModelMockData],
      [orderModelMockData],
    ]);
    expect(result).toHaveLength(3);
  });
});
