import React, { useEffect, useState } from 'react';
export default function usePreView(): any {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  console.log(previewImage);
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
    }
  };
  return [previewImage, handleFileInputChange];
}
