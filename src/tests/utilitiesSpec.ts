import generateSize from '../utilities/generateSize';
import path from 'path';

describe('Test utilities functions', () => {
  it('Test generateSize function', async () => {
    const root_path: string = path.join(__dirname, '../../', 'public');
    const new_image_path = await generateSize(500, 500, 'dogs.jpeg');
    expect(new_image_path).toEqual(
      path.join(root_path, 'caching', '500_500_dogs.jpeg')
    );
  });
});
