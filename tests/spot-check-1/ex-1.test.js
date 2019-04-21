import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Adapter from 'enzyme-adapter-react-16';
import { mount, render, shallow, configure} from 'enzyme';

configure({ adapter: new Adapter() });

describe("exercise1", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      });
})






