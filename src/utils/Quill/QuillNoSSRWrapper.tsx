import dynamic from 'next/dynamic';
import { ImageResize } from 'quill-image-resize-module-ts';
import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: QuillComponent } = await import('react-quill');

    interface ForwardedQuillComponent extends ReactQuillProps {
      forwardedRef: React.Ref<ReactQuill>;
    }

    QuillComponent.Quill.register('modules/imageResize', ImageResize);
    const Align = QuillComponent.Quill.import('formats/align');
    Align.whitelist = ['left', 'center', 'right', 'justify'];
    const Icons = QuillComponent.Quill.import('ui/icons');
    Icons.align.left = Icons.align[''];

    const Quill = ({ forwardedRef, ...props }: ForwardedQuillComponent) => (
      <QuillComponent ref={forwardedRef} {...props} />
    );
    return Quill;
  },
  { loading: () => <div>...loading</div>, ssr: false },
);

export default QuillNoSSRWrapper;
