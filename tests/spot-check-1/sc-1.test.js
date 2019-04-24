import React from 'react';
import ReactDOM from 'react-dom';
import SpotCheck1 from '../../src/components/SpotCheck1';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure} from 'enzyme';

configure({ adapter: new Adapter() });

let outputData = ""
const storeLog = inputs => (outputData += inputs)
console["log"] = jest.fn(storeLog)

describe("spotcheck1", () => {
    it('Application should render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<SpotCheck1 />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('You should define a logHover method on your component', () => {
        expect(SpotCheck1.prototype.logHover, 'You should define a logHover method on your component')
          .toBeDefined()
    });
    it('your logHover method should console.log "I was hovered!" when the mouse enters the button', () => {
      const wrapper = mount(<SpotCheck1/>)
      wrapper.find('button').first().simulate("mouseenter")
      const expectedResult = "I was hovered!"
      expect(outputData === expectedResult, `your logHover method should console.log ${expectedResult} when the mouse enters the button. You logged ${outputData}`)
        .toBe(true)
    })
})






