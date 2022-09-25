import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const generateSize = async (
  width: number,
  height: number,
  file_name: string
) => {
  const root_path: string = path.join(__dirname, '../../', 'public');
  const images_path: string = path.join(root_path, 'images', file_name);
  if (!fs.existsSync(path.join(root_path, 'caching'))) {
    fs.mkdirSync(path.join(root_path, 'caching'));
  }
  const new_file_path: string = path.join(
    root_path,
    'caching',
    `${width}_${height}_${file_name}`
  );
  await sharp(images_path).resize(width, height).toFile(new_file_path);
  return new_file_path;
};

export default generateSize;
