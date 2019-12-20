import * as React from 'react';
import { IIdValue } from './ChipsModels';

import './Chips.css';

export interface IOwnProps {
  name: string;
  value?: string;
  cboxItems?: IIdValue[];
  chipsItems?: IIdValue[];
  classCss?: any;
  handleChipsAdd: (
    e: React.ChangeEvent
  ) => void;
  handleChipsDelete: (index: number) => (e: React.MouseEvent) => void;
}

class InputChips extends React.Component<IOwnProps> {
  constructor(props: IOwnProps) {
    super(props);
  }

  render() {
    const { name, value, cboxItems, chipsItems, handleChipsAdd, classCss } = this.props;

    return (
      <>
        <select
          name={name}
          id={name}
          value={value}
          onChange={handleChipsAdd}
          className={classCss}
        >
          <option value="0" disabled>
            Choose...
          </option>

          {cboxItems &&
            cboxItems.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <option value={item.Id}>{item.Value}</option>
                </React.Fragment>
              );
            })}
        </select>

        <div className="chips">
          {chipsItems &&
            chipsItems.map((item, index) => {
              return (
                <div className="chips-items" key={index}>
                  {item.Value}
                  <button
                    className="button"
                    onClick={this.props.handleChipsDelete(index)}
                  >
                    &times;
                  </button>
                </div>
              )
            })}
        </div>
      </>
    );
  }
}

export default InputChips;
