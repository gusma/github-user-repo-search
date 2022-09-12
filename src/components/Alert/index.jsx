import React, { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';

import alertContext from '../../context/alert/alertContext';

const AlertComponent = () => {
  const context = useContext(alertContext);

  return (
    context.alert !== '' && (
      <>
        <Alert
          key={context.alert.type}
          variant={context.alert.msg !== '' ? context.alert.type : 'light'}
          className={context.alert.msg !== '' ? 'mx-2 my-4' : ''}
        >
          {context.alert.msg !== '' && context.alert.msg}
        </Alert>
      </>
    )
  );
};

export default AlertComponent;
