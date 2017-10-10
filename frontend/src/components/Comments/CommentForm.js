import React, { Component } from 'react'
import { withRouter } from 'react-router'
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

class CommentForm extends Component {

  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  getValidationState = () => {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  buildInputField = field => {
    return(
      <FormGroup validationState={this.getValidationState()}>
        <ControlLabel>{field.label}</ControlLabel>
        <FormControl type="text" placeholder={field.label} {...field.input} />
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
      </FormGroup>
    )
  }

  onSubmit = values => {
    values = {...values, parentId: this.props.postId}
    if (!this.props.edit) {
      this.props.action(values)
    }
    else {
      this.props.action(this.props.initialValues.id, values)
    }
    this.props.reset()
  }

  render() {
    let author = ''
    if(!this.props.edit) {
      author = <Field label="Author" name="author" component={this.buildInputField} onChange={this.handleChange} />
    }

    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        {author}
        <Field label="Comment" name="body" component={this.buildInputField} onChange={this.handleChange} />
        <Button bsStyle="primary" type="submit" active>{(this.props.edit) ? `Edit Comment` : `Add Comment` }</Button>
      </form>
    )
  }
}

export default withRouter(reduxForm({
    form: 'CommentForm',
    enableReinitialize: true,
})(CommentForm))
