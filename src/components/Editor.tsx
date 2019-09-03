import * as React from 'react';
import marked from 'marked';
import styled from "styled-components";

const Markdown = styled.textarea`
  box-sizing: border-box;
  width: 50%;
  height: 100vh;
  border-right: 1px solid black;
  outline: none;
  resize: none;
  padding: 10px 15px;
`;

const Rendered = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100vh;
  padding: 10px 15px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
`;

interface State {
  renderedText: string;
  markdownText: string;
};

export default class Editor extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    const DEFAULT_TEXT = '# Head';

    this.state = { 
      markdownText: DEFAULT_TEXT,
      renderedText: marked(DEFAULT_TEXT)
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
      <Wrapper>
        <Markdown value={this.state.markdownText} onChange={this.handleChange}></Markdown>
        <Rendered dangerouslySetInnerHTML={{__html: this.state.renderedText}}></Rendered>
      </Wrapper>
    )
  }
}
