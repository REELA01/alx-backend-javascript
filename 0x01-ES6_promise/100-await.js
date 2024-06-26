import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const pro1 = await uploadPhoto();
    const pro2 = await createUser();

    return ({ photo: pro1, user: pro2 });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
