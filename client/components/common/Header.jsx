import React from 'react';
import { PageHeader} from 'react-bootstrap';

class Header extends React.Component {

  render() {
    return (
      <PageHeader bsStyle="primary">Example page header <small>Subtext for header</small></PageHeader>
    )
  }
};

export default Header;
