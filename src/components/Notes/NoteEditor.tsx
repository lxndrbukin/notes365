import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function NoteEditor(): JSX.Element {
  return (
    <CKEditor
      onChange={(e, editor) => console.log(editor.getData())}
      editor={ClassicEditor}
    />
  );
}
