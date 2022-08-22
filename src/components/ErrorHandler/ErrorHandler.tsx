import React from "react";

import ErrorMessage from "./ErrorMessage";

interface Props{
  children:React.ReactNode
}

interface State{
  error:Error|null
}

export default class ErrorHandler extends React.Component<Props, State>{
  state={error:null};
  static getDerivedStateFromError(error:Error){
    return {error}
  }
  render(): React.ReactNode {
    if(this.state.error) return <ErrorMessage />
    return this.props.children
  }
}