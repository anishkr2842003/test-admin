import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Dropzone.css'; // Import the CSS file for styling

function Dropzone() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Update the state with the new files
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const removeFile = (event, index) => {
    event.stopPropagation(); // Prevent the click event from propagating to the input element
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop the files here</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
      <div className="file-list">
        {files.map((file, index) => (
          <div key={index} className="file-box">
            <img src={URL.createObjectURL(file)} alt={file.name} className="file-image" />
            <span className="file-name">{file.name}</span>
            <button onClick={(event) => removeFile(event, index)} className=" badge bg-danger delete-button">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropzone;
