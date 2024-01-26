import { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const formats = [
   'header',
   'bold',
   'italic',
   'underline',
   'strike',
   'blockquote',
   'list',
   'bullet',
   'indent',
   'link',
   'image'
];

const TextQuill = ({ getValue, defaultValue } ) => {
   const [value, setValue] = useState('');
   const handleGetValue = (value) => {
      getValue(value);
      setValue(value);
   };
   useEffect(() => {
      if (defaultValue !== undefined) {
         setValue(defaultValue);
      }
   }, [defaultValue]);
   const quillRef = useRef() ;
   const modules = useMemo(
      () => ({
         toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link'],
            ['clean']
         ]
      }),
      []
   );
   return (
      <ReactQuill
         theme='snow'
         formats={formats}
         modules={modules}
         value={value}
         onChange={(value) => handleGetValue(value)}
         ref={quillRef}
      />
   );
};

export default TextQuill;
