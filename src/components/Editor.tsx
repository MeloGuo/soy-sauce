import * as React from 'react';
import marked from 'marked';
import './editor.css';

interface State {
  renderedText: string;
  markdownText: string;
};

export default class Editor extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    const initText = '# Head';
    this.state = { 
      markdownText: initText,
      renderedText: marked(initText)
    };
  }

  handleChange = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    this.setState({
      markdownText: event.currentTarget.value,
      renderedText: marked(event.currentTarget.value)
    });
  }

  render() {
    return (
      <div className="editor">
        <div className="markdown">
          <textarea name="markdown" value={this.state.markdownText} onChange={this.handleChange}></textarea>
        </div>
        <div className="rendered" dangerouslySetInnerHTML={{__html: this.state.renderedText}}></div>
      </div>
    )
  }
}