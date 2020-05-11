import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import MaterialIcon from '@material/react-material-icon'

import {
  Container,
  DropZone,
  ChooseInputContainer
} from './add-company-window__styles'
import Window from '../../../../UI/window'
import Input from '../../../../UI/input'
import ChooseInput from '../../../../UI/choose-input'
import Separator from '../../../../UI/separator'
import { getIndustries } from '../../../../../data/industries'
import SmallButton from '../../../../UI/small-button'
import withClick from '../../../../HOC/withClick'
import Loading from '../../../../UI/loading-circle'

const Button = withClick( SmallButton );

const AddCompanyWindowPresentationLayer = ({ close, handlers, inputs, state, file, edit }) => {

  const {getRootProps, getInputProps, isDragActive} = useDropzone({ onDrop: handlers.handleOnDrop });
  const language = useSelector( s => s.language.source.companyPanel.addNewCompanyWindow );

  return(
    <Window width = '80vw' close = { close }>
      <Container>

        <DropZone { ...getRootProps() } isActive = { isDragActive } >
          <input { ...getInputProps() } />
          { file.isFile
            ?<><MaterialIcon icon = 'done' /><p>{ file.name }</p></>
            :isDragActive
              ? <><MaterialIcon icon = 'play_for_work' /><p>{ language.dropHere }</p></>
              : <><MaterialIcon icon = 'photo_size_select_large' /><p>{ language.drag }</p></>
          }
        </DropZone>

        <Separator height = '20px' />

        <ChooseInputContainer>
          <ChooseInput
            fields = { getIndustries() }
            onChange = { handlers.handleChooseField }
            choosenFieldIndex = { state.industry.index }
            />
        </ChooseInputContainer>

        <Separator height = '10px' />

        { inputs.map( ( input, index ) => (
          <>
            <Input
              key = { input.name+index }
              label = { input.label }
              value = { input.value }
              onChange = { input.onChange }
              name = { input.name }
              type = { input.type }
            />
            <Separator height = '10px' />
          </>
        ) ) }
      </Container>

      <Button onClickFunction = { () => {
        if( edit ) handlers.handleAddCompanyButton({ editMode: true });
        else handlers.handleAddCompanyButton({ editMode: false });
      } } maxWidth >
        { state.isLoading
            ? <Loading text = { language.loading }/>
            : edit ? language.updateButton : language.sendButton
        }
      </Button>
      
    </Window>
  )
}

AddCompanyWindowPresentationLayer.propTypes = {
  close: PropTypes.func.isRequired,
  handlers: PropTypes.shape({
    handleOnDrop: PropTypes.func.isRequired,
    handleInputs: PropTypes.func.isRequired,
    handleChooseField: PropTypes.func.isRequired,
    handleAddCompanyButton: PropTypes.func.isRequired,
  }),
  state: PropTypes.shape({
    inputs: PropTypes.shape({
      companyName: PropTypes.string,
      adress: PropTypes.string,
      city: PropTypes.string,
      industry: PropTypes.string,
      description: PropTypes.string
    }),
    industry: PropTypes.shape({
      index: PropTypes.number,
      name: PropTypes.string
    }),
    isLoading: PropTypes.bool
  }).isRequired,
  file: PropTypes.shape({
    isFile: PropTypes.bool,
    name: PropTypes.string,
    content: PropTypes.any
  }),
  inputs: PropTypes.object.isRequired,
  edit: PropTypes.string
}

export default AddCompanyWindowPresentationLayer;