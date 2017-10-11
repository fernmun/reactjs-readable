import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

class PostForm extends Component {

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

  buildTextareaField = field => {
    return(
      <FormGroup validationState={this.getValidationState()}>
        <ControlLabel>{field.label}</ControlLabel>
        <FormControl componentClass="textarea" placeholder={field.label} {...field.input} />
        <FormControl.Feedback />
        <div className="error danger">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </FormGroup>
    )
  }

  buildDropdownField = field => {
    const renderOptionList = field.options.map(option => {
      return (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      )
    })

    return (
      <FormGroup>
        <ControlLabel>{field.label}</ControlLabel>
        <FormControl componentClass="select" {...field.input}>
          {renderOptionList}
        </FormControl>
        <div className="error danger">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </FormGroup>
    )
  }

  onSubmit = values => {
    if (!this.props.edit) {
      this.props.action(values)
    }
    else {
      this.props.action(this.props.initialValues.id, values)
    }
    this.props.history.push('/')
  }

  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field label="Title" name="title" component={this.buildInputField} onChange={this.handleChange} />
        <Field label="Author" name="author" component={this.buildInputField} onChange={this.handleChange} />
        <Field label="Category" name="category" component={this.buildDropdownField} options={this.props.categories} />
        <Field label="Body" name="body" component={this.buildTextareaField} onChange={this.handleChange} />
        <Button bsStyle="primary" type="submit" active>Submit</Button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.title) {
    errors.title = 'It is required'
  } else if (values.title.length < 5) {
    errors.title = 'Min. 4 characters'
  }

  if (!values.author) {
    errors.author = 'It is required'
  } else if (values.author.length < 5) {
    errors.author = 'Min. 4 characters'
  }

  if (!values.author) {
    errors.author = 'It is required'
  } else if (values.author.length < 2) {
    errors.author = 'Min. 4 characters'
  }

  if (!values.body) {
    errors.body = 'It is required'
  } else if (values.body.length < 5) {
    errors.body = 'Min. 4 characters'
  }

  return errors
}

PostForm.propTypes = {
  action: PropTypes.func,
  categories: PropTypes.array,
  edit: PropTypes.bool
}

export default withRouter(reduxForm({
    form: 'PostForm',
    validate,
    enableReinitialize: true,
})(PostForm))
