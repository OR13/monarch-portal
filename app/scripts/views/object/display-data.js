import React, {PropTypes} from 'react'

import i18n from '../../utils/i18n'
import RawData from './raw-data'

const DisplayData = ({data}) => {
  if (!data || data.length < 3) {
    return (
      <li className='list-group-item'>
        <strong>{i18n.t('This object has no data')}</strong>
      </li>
    )
  }

  return (
    <div>
      <li key='data-0' className='list-group-item'>
        <p>
          <strong>
            {i18n.t('Object data (%s bytes)', {
              postProcess: 'sprintf',
              sprintf: [data.length - 2] })
            }
          </strong>
        </p>
      </li>
      <li key='data-1' className='list-group-item data'>
        <RawData data={data} />
      </li>
    </div>
  )
}

DisplayData.propTypes = {
  data: PropTypes.string
}

export default DisplayData
