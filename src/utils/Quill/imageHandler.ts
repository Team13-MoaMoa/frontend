import ReactQuill from 'react-quill';
import { AxiosError } from 'axios';
import { uploadFile } from '@/api/uploadS3';
import { ApiResponseType } from '@/types/apiResponseType';

const imageHandler = (QuillRef: React.MutableRefObject<ReactQuill | null>) => {
  const input = document.createElement('input');

  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.onchange = async () => {
    if (input.files !== null) {
      const file = input.files[0];
      try {
        const res = await uploadFile(file);
        const imageUrl = res || '';

        const range = QuillRef.current?.getEditor().getSelection()?.index;
        if (range !== null && range !== undefined) {
          const quill = QuillRef.current?.getEditor();
          quill?.insertEmbed(range, 'image', imageUrl);
          quill?.insertText(range + 1, '\n');
          quill?.setSelection({ index: range + 2, length: 0 });
        }
      } catch (error) {
        alert((error as AxiosError<ApiResponseType>).response?.data.message);
      }
    }
  };
};

export default imageHandler;
