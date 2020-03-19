import React from "react"
import LogicLayer from "./article-editor__logic"
import PresentationLayer from "./article-editor__presentation"

 const ArticleEditor = oldProps => (
  <LogicLayer
    { ...oldProps }
    render = { props => <PresentationLayer { ...props } closeFunction = { oldProps.closeFunction } /> }
  />
)

export default ArticleEditor
