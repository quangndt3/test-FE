
import instance from '.';

export const uploadImages = (files ) => {
   const formData = new FormData();
   for (const file of files) {
      formData.append('images', file);
   }
   return instance.post('/api/images', formData, { headers: { 'Content-Type': ' multipart/form-data' } });
};