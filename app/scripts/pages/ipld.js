import React, { Component } from 'react'
import i18n from '../utils/i18n.js'
import { Row, Col } from 'react-bootstrap'

export default class IPLD extends Component {
  state = {
  };

  static displayName = 'IPLD Demo';

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
          <h3>{i18n.t('IPLD Demo')}</h3>
        </Col>
      </Row>
    )
  }
}
