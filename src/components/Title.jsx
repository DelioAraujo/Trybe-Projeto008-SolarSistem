import React from 'react';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div>
        <h2>{headline}</h2>
      </div>
    );
  }
}

Title.propTypes = {
  name: headline.string,
}.isRequired;

export default Title;
