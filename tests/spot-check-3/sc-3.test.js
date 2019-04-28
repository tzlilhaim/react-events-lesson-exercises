import React from 'react';
import ReactDOM from 'react-dom';
import SpotCheck3 from '../../src/components/SpotCheck3/Spotcheck3';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure} from 'enzyme';

configure({ adapter: new Adapter() });

describe("spotcheck3", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SpotCheck3 />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('You should write a likeQuote function which increases the likes of the first quote', () => {
      const wrapper = mount(<SpotCheck3/>)
        expect(typeof wrapper.instance().likeQuote, 'You should define a likeQuote method on your component')
          .toBe("function")
        let initialState = wrapper.state().quotes[0].likes
        wrapper.instance().likeQuote()
        let updatedState = wrapper.state().quotes[0].likes
        expect(updatedState, `The likeQuote method should add 1 tp the likes of the first quote in your state's quotes property. 
                            After clicking once, the likes should be ${initialState+1} likes, you had ${updatedState} likes`)
            .toBe(initialState+1)
        let renderedState = parseInt(wrapper.find('sup').first().text())
        expect(renderedState, 
          `You should change the state with the setState function so the app automatically renders when changes are made.
            Expected the first quote to render ${updatedState} likes, instead rendered ${renderedState} likes`)
          .toBe(updatedState)
      });
    it('Your likeQuote method should not affect anything other than the likes of the first quote', () => {
        const wrapper = mount(<SpotCheck3/>)
        let initialState = wrapper.state().quotes
        wrapper.instance().likeQuote()
        let updatedState = wrapper.state().quotes
        updatedState.forEach((p,i) => {
            expect(updatedState[i].text, 'All quote text should be unchanged')
                .toBe(initialState[i].text)
        })
        for(let i=1; i<=2; i++) {
            expect(updatedState[i].likes, 'the number of likes of the other two quotes should be unchanged')
                .toBe(initialState[i].likes)
        }       
    })
})






