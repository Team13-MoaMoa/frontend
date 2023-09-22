import AWS from 'aws-sdk';
import { AxiosError } from 'axios';
import { v4 } from 'uuid';
import { ApiResponseType } from '@/types/apiResponseType';

const {
  NEXT_PUBLIC_ACCESS_KEY,
  NEXT_PUBLIC_SECRET_ACCESS_KEY,
  NEXT_PUBLIC_BUCKET_NAME,
  NEXT_PUBLIC_S3_REGION,
} = process.env;

AWS.config.update({
  region: NEXT_PUBLIC_S3_REGION,
  accessKeyId: NEXT_PUBLIC_ACCESS_KEY,
  secretAccessKey: NEXT_PUBLIC_SECRET_ACCESS_KEY,
});
const s3 = new AWS.S3();
const bucketName = NEXT_PUBLIC_BUCKET_NAME;

export const uploadFile = async (file: File) => {
  const { type, name } = file;
  const params: AWS.S3.Types.PutObjectRequest = {
    Bucket: bucketName || '',
    Key: `${name}/${v4().toString().replace('-', '')}.${
      file.type.split('/')[1]
    }`,
    Body: file,
    ContentType: type,
    ACL: 'public-read',
  };
  try {
    const { Location } = await s3.upload(params).promise();
    return Location;
  } catch (err) {
    alert((err as AxiosError<ApiResponseType>).response?.data.message);
  }
};
