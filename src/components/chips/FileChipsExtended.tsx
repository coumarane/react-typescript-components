import * as React from 'react';
import './Chips.css';
import { IDocument } from './ChipsModels';

export interface IOwnProps {
  items?: IDocument[];
  handleChipsDelete: (doc: IDocument) => (e: React.MouseEvent)  => void;
  handleSelectDocument: (doc: IDocument) => (e: React.MouseEvent)  => void;
}

class FileChipsExtended extends React.Component<IOwnProps> {
  constructor(props: IOwnProps) {
    super(props);
  }

  render() {
    const { items: chipsItems } = this.props;

    return (
      <>
        <div className="chips-extended">
          {chipsItems &&
            chipsItems.map((item, index) => (

              <div className="chips-extended-items" key={index}>
                File {index + 1}
                <div className="chips-extended-items-actions">
                  <button
                    className="button"
                    onClick={this.props.handleSelectDocument(item)}
                    id={`file-link-${index}`}
                  >
                     <i className="material-icons">link</i>
                  </button>

                  <button
                    className="button"
                    onClick={this.props.handleChipsDelete(item)}
                    id={`file-delete-${index}`}
                  >
                    &times;
                  </button>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default FileChipsExtended;
