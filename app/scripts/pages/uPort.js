import React, { Component } from 'react'
import i18n from '../utils/i18n.js'
import { Row, Col } from 'react-bootstrap'

import { Uport } from 'uport-lib'
import Web3 from 'web3';

export default class UPort extends Component {
  state = {
  };

  static displayName = 'UPort Demo';

  componentDidMount() {
    this.mounted = true

    console.log('Uport Login Container: ', this.props);

  let web3 = new Web3()
  let options = {
    ipfsProvider: {
      host: 'localhost',
      port: '5001',
      protocol: 'https',
      root: ''
    }
  }

  let uport = new Uport('TEST92184091284091284', options)
  let uportProvider = uport.getUportProvider('https://consensysnet.infura.io:8545')

  web3.setProvider(uportProvider)

  this.getCoinbase = function() {

    web3.eth.getCoinbase(function(err, address) {
      if (err) {
        throw err
      }

      console.log('address: ' + address)
      web3.eth.defaultAccount = address

      uport.getUserPersona().then((userPersona) => {
        let profile = userPersona.getProfile()
        console.log(profile)
      })
    })
  }

  this.getCoinbase()

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
