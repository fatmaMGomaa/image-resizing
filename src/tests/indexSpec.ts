import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test images resizing endpoints responses', () => {
  it('resizing an image response test', async () => {
    const response = await request.get(
      '/images/api/resizing?width=300&height=300&file_name=dogs.jpeg'
    );
    expect(response.statusType).toBe(2);
  });

  it('uncorrect width or height params-resizing endpoint server error', async () => {
    const response = await request.get(
      '/images/api/resizing?file_name=dogs.jpeg'
    );
    expect(response.status).toBe(500);
    expect(response.body.message).toEqual('Invalid width or height Params');
  });

  it('uncorrect filename params-resizing endpoint server error', async () => {
    const response = await request.get(
      '/images/api/resizing?width=200&height=200'
    );
    expect(response.status).toBe(400);
    expect(response.body.message).toEqual('Invaild file_name param');
  });
});

describe('Test images resizing middlewares', () => {
  it('test existing middleware - not existing image ', async () => {
    const response = await request.get(
      '/images/api/resizing?width=300&height=300&file_name=cows.jpeg'
    );
    expect(response.body.message).toEqual('Image is not existing');
    expect(response.status).toBe(404);
  });

  it('test caching middleware - cached image ', async () => {
    const response = await request.get(
      '/images/api/resizing?width=300&height=300&file_name=dogs.jpeg'
    );
    expect(response.statusCode).toBe(200);
  });
});
