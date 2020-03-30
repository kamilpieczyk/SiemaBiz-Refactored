import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import MaterialIcon from '@material/react-material-icon'

import {
  Container,
  Topbar,
  ContentContainer,
  Header,
  NewSection,
  SectionButtonsContainer,
  InvisibleDiv,
  ActionButtonsContainer,
  EditInformation,
  CategoryBox
} from './article-editor__styles'
import { grey } from '../../../../../styles/colors'
import CloseButton from '../../../../UI/close-button'
import Separator from '../../../../UI/separator'
import FileUploader from '../../../../UI/file-uploader'
import Input from '../../../../UI/input'
import SectionButton from './components/section-button'
import Button from '../../../../UI/small-button'
import Loading from '../../../../UI/loading-circle'
import ErrorInfo from '../../../../UI/error-info'
import DeleteButton from '../../../../UI/delete-button'
import ChooseInput from '../../../../UI/choose-input'

import withClick from '../../../../HOC/withClick'

const Close = withClick( CloseButton );
const AcceptButton = withClick( Button );

const ArticleEditorPresentationLayer = ({ 
  closeFunction,
  state,
  editMode,
  handleDropFiles,
  handleInputs,
  sectionTypes,
  handleAddNewSection,
  handleAddArticleButton,
  handleSaveToLocalStorageButton,
  restoreSavedCopyFromLocalStorage,
  handdleUpdateArticleButton,
  handleDeleteSectionButton,
  handleSelectArticleCategory,
  categories
}) => {

  const language = useSelector( s => s.language.source );

  return(
    <Container>

      <Topbar>
        <Close onClickFunction = { closeFunction }/>
        <p>
          {
            state.articleTitle
              ? `${ language.articlesPanel.articleEditor.articleTitleTop } - ${ state.articleTitle }`
              : language.articlesPanel.articleEditor.newArticleTitle
          }
        </p>
      </Topbar>

      <ContentContainer>
        {/* ARTICLE PICTRUE */}
        <Header>{ language.articlesPanel.articleEditor.mainImageHeader }</Header>
        {
          state.pictrue
            ? (
              <FileUploader onDrop = { handleDropFiles } type = 'succes'>
                <MaterialIcon icon = 'check' />
                <p>{ language.articlesPanel.articleEditor.uploadForm.dropedOk }</p>
                <p>{ state.pictrue.name.slice( 0, 10 ) + '...' + state.pictrue.name.slice( state.pictrue.name.length - 3, state.pictrue.name.length ) }</p>
              </FileUploader>
            )
            : state.extErr || state.sizeErr
              ? (
                <FileUploader onDrop = { handleDropFiles } type = 'err'>
                  <MaterialIcon icon = 'cancel' />
                  <p>{ language.articlesPanel.articleEditor.uploadForm.warn }</p>
                </FileUploader>
              )
              : (
                  <FileUploader onDrop = { handleDropFiles } >
                    <p>{ language.articlesPanel.articleEditor.uploadForm.information }</p>
                  </FileUploader>
              )
        }
        <InvisibleDiv />

        {/* ARTICLE CATEGORY */}
        <CategoryBox>
          <label>{ language.articlesPanel.articleEditor.articleCategory }</label>
          <ChooseInput
            choosenFieldIndex = { state.articleCategory.index }
            fields = { categories }
            onChange = { handleSelectArticleCategory }
          />
        </CategoryBox>

        {/* ARTICLE TITLE */}
        <Input
          label = { language.articlesPanel.articleEditor.articleTitle }
          value = { state.articleTitle }
          onChange = { e => handleInputs( e.target.name, e.target.value ) }
          name = 'title'
        />
        <InvisibleDiv />

        {/* ARTICLE INTRODUCTION */}
        <Input
          label = { language.articlesPanel.articleEditor.articleIntroduction}
          value = { state.articleIntroduction }
          onChange = { e => handleInputs( e.target.name, e.target.value ) }
          type = 'textarea'
          name = 'introduction'
        />
        
        {/* ARTICLE SECTIONS */}
        {
          state.sections && state.sections.map( ( section, index ) => {
            if( section.type === "acapit" ){
              return(
                <NewSection key = { index }>
                  <ActionButtonsContainer>
                    <DeleteButton
                      color = { grey }
                      onClick = { () => handleDeleteSectionButton( index ) }
                    />
                  </ActionButtonsContainer>

                  <Input
                    label = { language.articlesPanel.articleEditor.sections.acapit.title }
                    value = { section.title }
                    onChange = { e => handleInputs( e.target.name, e.target.value, index ) }
                    name = 'section-title'
                  />
                  <InvisibleDiv />
                  <Input 
                    label = { language.articlesPanel.articleEditor.sections.acapit.content }
                    value = { section.value }
                    onChange = { e => handleInputs( e.target.name, e.target.value, index ) }
                    type = 'textarea'
                    name = 'section-content'
                  />
                </NewSection>
              )
            }

            else if( section.type === "image" ){
              return(
                <NewSection key = { index }>
                  <ActionButtonsContainer>
                    <DeleteButton
                      color = { grey }
                      onClick = { () => handleDeleteSectionButton( index ) }
                    />
                  </ActionButtonsContainer>
                  <Input
                    name = 'section-title'
                    label = { language.articlesPanel.articleEditor.sections.image.title }
                    value = { section.title }
                    onChange = { e => handleInputs( e.target.name, e.target.value, index )}
                  />
                  <InvisibleDiv />
                  <Input
                    name = 'section-content'
                    label = { language.articlesPanel.articleEditor.sections.image.content }
                    value = { section.value }
                    onChange = { e => handleInputs( e.target.name, e.target.value, index )}
                  />
                </NewSection>
              )
            }

            else if( section.type === "link"){
              return(
                <NewSection key = { index }>
                  <ActionButtonsContainer>
                    <DeleteButton
                      color = { grey }
                      onClick = { () => handleDeleteSectionButton( index ) }
                    />
                  </ActionButtonsContainer>
                  <Input
                    name = 'section-title'
                    label = { language.articlesPanel.articleEditor.sections.link.title }
                    value = { section.title }
                    onChange = { e => handleInputs( e.target.name, e.target.value, index )}
                  />
                  <InvisibleDiv />
                  <Input
                    name = 'section-content'
                    label = { language.articlesPanel.articleEditor.sections.link.content }
                    value = { section.value }
                    onChange = { e => handleInputs( e.target.name, e.target.value, index )}
                  />
                </NewSection>
              )
            }

            else if( section.type === "video"){
              return(
                <NewSection key = { index }>
                  <ActionButtonsContainer>
                    <DeleteButton
                      color = { grey }
                      onClick = { () => handleDeleteSectionButton( index ) }
                    />
                  </ActionButtonsContainer>
                  <Input
                    name = 'section-title'
                    label = { language.articlesPanel.articleEditor.sections.video.title }
                    value = { section.title }
                    onChange = { e => handleInputs( e.target.name, e.target.value, index )}
                  />
                  <InvisibleDiv />
                  <Input
                    name = 'section-content'
                    label = { language.articlesPanel.articleEditor.sections.video.content }
                    value = { section.value }
                    onChange = { e => handleInputs( e.target.name, e.target.value, index )}
                  />
                </NewSection>
              )
            }

            else if( section.type === "edit")return <EditInformation key = { index }>{ section.value }</EditInformation>
          })
        }

        {/* ACTION SECTIONS BUTTON */}
        <SectionButtonsContainer>
          {
            sectionTypes && sectionTypes.map(
              ( button, index ) => (
                <SectionButton
                  key = { index } 
                  icon = { button.icon }
                  onClick = { () => handleAddNewSection( button.type ) }
                >
                  { button.name }
                </SectionButton>
              )
            )
          }
        </SectionButtonsContainer>
        <InvisibleDiv />
        {/* ERROR INFORMATIONS */}
        {
          state.isPictrueErr && (
            <>
              <ErrorInfo>{ language.articlesPanel.articleEditor.imageError }</ErrorInfo>
              <InvisibleDiv />
            </>
          )
        }
        {
          state.isArticleTitleErr && (
            <>
              <ErrorInfo>{ language.articlesPanel.articleEditor.articleTitleError }</ErrorInfo>
              <InvisibleDiv />
            </>
          )
        }
        {
          state.isArticleIntroErr && (
            <>
              <ErrorInfo>{ language.articlesPanel.articleEditor.articleIntroError }</ErrorInfo>
              <InvisibleDiv />
            </>
          )
        }
        {/* ADD / PREVIEW ARTICLE / SAVE COPY BUTTONS */}
        <ActionButtonsContainer>
          {/* save button*/}
          <AcceptButton thin onClickFunction = { handleSaveToLocalStorageButton } >
            <MaterialIcon icon = 'save' />
            <Separator width = '5px' />
            { language.articlesPanel.articleEditor.saveButton }
          </AcceptButton>
          {/* load button*/}
          {
            state.isSavedCopyInLocalStorage && (
              <AcceptButton thin onClickFunction = { restoreSavedCopyFromLocalStorage } >
                <MaterialIcon icon = 'get_app' />
                <Separator width = '5px' />
                { language.articlesPanel.articleEditor.loadButton }
              </AcceptButton>
            )
          }
          {
            state.isLoading
              ? <Button><Loading text = { language.articlesPanel.articleEditor.loading } /></Button>
              : editMode
                ? (
                  <AcceptButton onClickFunction = { handdleUpdateArticleButton } > 
                    <MaterialIcon icon = 'update' />
                    <Separator width = '5px' />
                    { language.articlesPanel.articleEditor.updateButton }
                  </AcceptButton>
                )
                : (
                    <AcceptButton onClickFunction = { handleAddArticleButton }>
                      <MaterialIcon icon = 'playlist_add_check' />
                      <Separator width = '5px' />
                      { language.articlesPanel.articleEditor.acceptButton }
                    </AcceptButton>
                )
          }
        </ActionButtonsContainer>
      </ContentContainer>
      
    </Container>
  )
}

ArticleEditorPresentationLayer.propTypes = {
  closeFunction: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  editMode: PropTypes.bool,
  handleDropFiles: PropTypes.func.isRequired,
  handleInputs: PropTypes.func.isRequired,
  handleAddArticleButton: PropTypes.func.isRequired,
  handleSaveToLocalStorageButton: PropTypes.func.isRequired,
  restoreSavedCopyFromLocalStorage: PropTypes.func.isRequired,
  handdleUpdateArticleButton: PropTypes.func.isRequired,
  handleDeleteSectionButton: PropTypes.func.isRequired,
  handleSelectArticleCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
}

export default ArticleEditorPresentationLayer