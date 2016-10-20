import React, {Component} from 'react'
import i18n from '../utils/i18n.js'
import {Table, Tooltip, OverlayTrigger} from 'react-bootstrap'

export
default class FileList extends Component {
  static displayName = 'FileList';
  static propTypes = {
    ipfs: React.PropTypes.object,
    files: React.PropTypes.array,
    namesHidden: React.PropTypes.bool,
    gateway: React.PropTypes.string
  };

  _unpin (event, hash) {
    event.preventDefault()
    event.stopPropagation()
    this.props.ipfs.pin.remove(hash, {
      r: true
    }, (err, res) => {
      if (err) return console.error(err)
    })
  }

  render () {
    const files = this.props.files
    return (
      <Table responsive className={'table-hover filelist ' + (this.props.namesHidden ? 'filelist-names-hidden' : null)} >
        <thead>
          <tr>
            <th className='id-cell'>{i18n.t('ID')}</th>
            <th className='action-cell'>{i18n.t('Actions')}</th>
          </tr>
        </thead>
        <tbody>
          {
            files ? files.map((file) => {
              if (typeof file === 'string') {
                file = {id: file}
              }
              let gatewayPath = this.props.gateway + '/ipfs/' + file.id
              let dagPath = '#/objects/' + file.id

              return (
                <tr className='webui-file' data-type={file.type} key={file.id}>
                  <td className='id-cell'><code>{file.id}</code></td>
                  <td className='action-cell'>
                    <a target='_blank' href={gatewayPath}>{i18n.t('RAW')}</a>
                    <span className='separator'>|</span>
                    <a href={dagPath}>{i18n.t('DAG')}</a>
                    <span className='separator'>|</span>
                    <a href='#' onClick={this._unpin.bind(this, file.id)}>
                      <OverlayTrigger placement='right' overlay={<Tooltip id={file.id}>{i18n.t('Remove')}</Tooltip>}>
                        <i className='fa fa-remove'></i>
                      </OverlayTrigger>
                    </a>
                  </td>
                </tr>
              )
            }) : void 0
          }
        </tbody>
      </Table>
    )
  }
}
