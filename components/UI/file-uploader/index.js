import React from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import { useSelector } from 'react-redux'

import { FileUploader } from './file-uploader__styles'

const FileUploaderComponent = ({ onDrop, type, children }) => {
  const language = useSelector( s => s.language.source );
  
  return(
    <Dropzone onDrop = { onDrop }>
      {
        ({ getRootProps, getInputProps, isDragActive }) => (
          <FileUploader 
            { ...getRootProps() }
            active = { isDragActive }
            succes = { type === 'succes' }
            err = { type === 'err' }
          >
            <input { ...getInputProps() } />
            { 
              isDragActive
                ? language.general.uploadForm.dropInformation
                : children
            }
          </FileUploader>
        )
      }
    </Dropzone>
  )
}

FileUploader.propTypes = {
  onDrop: PropTypes.func.isRequired,
  type: PropTypes.string,
  children: PropTypes.node
}

export default FileUploaderComponent