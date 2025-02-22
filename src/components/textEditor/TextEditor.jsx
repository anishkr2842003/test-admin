import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor() {

    const [value, setValue] = useState('');
    console.log(value)

  return (
    <>
      Text Editor
      <ReactQuill theme="snow" value={value} onChange={setValue} />;
    </>
  )
}

export default TextEditor
