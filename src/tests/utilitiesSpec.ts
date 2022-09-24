import generateSize from '../utilities/generateSize';

describe('Test utilities functions', () => {
  it('Test generateSize function', async () => {
    const new_image_path = await generateSize(500, 500, 'dogs.jpeg');
    expect(new_image_path).toEqual('500_500_dogs.jpeg');
  });
});
