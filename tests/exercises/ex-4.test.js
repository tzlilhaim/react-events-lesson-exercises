import React from 'react';
import ReactDOM from 'react-dom';
import Exercise2 from '../../src/components/Exercise2/Exercise2';
import List from '../../src/components/Exercise2/List'
import Contact from '../../src/components/Exercise2/Contact'
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure} from 'enzyme';

configure({ adapter: new Adapter() });

describe("exercise4", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Exercise2 />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('You should map each contact into a Contact component that displays the name of the contact', () => {
        const wrapper = mount(<Exercise2/>)
        wrapper.setState({displayConversation: null}, () => {
            expect(wrapper.find(Contact), 'you should have three contact components, mapped out from your contacts props')
                .toHaveLength(3)
            expect(wrapper.find(List).props(), 'you should be passing props to your List components')
                .toBeDefined()
            let contact1 = wrapper.find(List).props().contacts[0]
            let contactText1 = wrapper.find(Contact).first().text()
            expect(contact1, `expected ${contact1} to be displayed in your first Contact component, instead you displayed ${contactText1}`)
                .toBe(contactText1)
        })
    });
})