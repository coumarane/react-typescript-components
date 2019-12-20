import * as React from 'react';

import './Chips.css';

export interface IOwnProps {
  items?: File[];
  handleChipsDelete: (index: any) => (e: React.MouseEvent)  => void;
}

class FileChips extends React.Component<IOwnProps> {
  constructor(props: IOwnProps) {
    super(props);
  }

  render() {
    const { items } = this.props;

    return (
      <>
        <div className="chips">
          {items &&
            items.map((file, index) => (
              <div className="chips-items" key={index}>
                {file.name}
                <button
                  className="button"
                  onClick={this.props.handleChipsDelete(index)}
                >
                  &times;
                </button>
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default FileChips;
