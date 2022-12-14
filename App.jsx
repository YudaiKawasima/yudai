
import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList } from './conponents/index';

export default class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: [],
      dataset: defaultDataset,
      open: false,
    }
  }

  render() {

    return (
      <section className='c-section'>

        <div className='c-box'>
          <AnswersList answers={this.state.answers} />

        </div>
      </section>
    );
  }

}

export default App;
