import React, { Component } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl
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
    if (length > 4) return 'success';
    else if (length > 0) return 'error';
  }

  buildInputField = field => {
    return(
      <FormGroup validationState={this.getValidationState()}>
        <ControlLabel>{field.label}</ControlLabel>
        <FormControl type="text" placeholder={field.label} {...field.input} />
        <FormControl.Feedback />
        <div className="error danger">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </FormGroup>
    )
  }

  onSubmit = values => {
    values = {...values, parentId: this.props.postId}
    !this.props.edit ?
      this.props.action(values) :
      this.props.action(this.props.initialValues.id, values)

    this.props.reset()
  }

  render() {
    const author = !this.props.edit ?
        <Field label="Author" name="author" component={this.buildInputField} onChange={this.handleChange} /> :
        ''

    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        {author}
        <Field label="Comment" name="body" component={this.buildInputField} onChange={this.handleChange} />
        <Button bsStyle="primary" type="submit" active>{(this.props.edit) ? `Edit Comment` : `Add Comment` }</Button>
      </form>
    )
  }
}

CommentForm.propTypes = {
  action: PropTypes.func,
  postId: PropTypes.string,
  edit: PropTypes.bool
}

function validate(values) {
  const errors = {}

  if (!values.author) {
    errors.author = 'It is required'
  } else if (values.author.length < 5) {
    errors.author = 'Min. 4 characters'
  }

  if (!values.body) {
    errors.body = 'It is required'
  } else if (values.body.length < 5) {
    errors.body = 'Min. 4 characters'
  }

  return errors
}

export default withRouter(reduxForm({
    form: 'CommentForm',
    validate,
    enableReinitialize: true
})(CommentForm))
