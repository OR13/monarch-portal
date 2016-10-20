import React, { Component } from 'react'
import i18n from '../utils/i18n.js'
import { Row, Col } from 'react-bootstrap'

export default class UPort extends Component {
  state = {
  };

  static displayName = 'UPort Demo';

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    return (
      <Row>
        <Col sm={10} smOffset={1}>
          <h3>{i18n.t('UPort Demo')}</h3>
        </Col>
      </Row>
    )
  }
}
