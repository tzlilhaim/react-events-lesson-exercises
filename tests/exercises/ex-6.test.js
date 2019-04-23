import React from 'react';
import ReactDOM from 'react-dom';
import Exercise2 from '../../src/components/Exercise2/Exercise2';
import Conversation from '../../src/components/Exercise2/Conversation'
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure} from 'enzyme';

configure({ adapter: new Adapter() });

describe("Exercise 6", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Exercise2 />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Your Conversation component should recieve a "convo" array from props', () => {
        const wrapper = mount(<Exercise2/>)
        wrapper.setState({displayConversation: "Dad"}, () => {
            let convoProps = wrapper.find(Conversation).props()
            expect(wrapper.find(Conversation), "You should render a Conversation component when displayConversation is not null")
                .toHaveLength(1)
            expect(typeof convoProps.convo, "You should send an array 'convo' prop to your Conversation component")
                .toBe('object')
            expect(convoProps.convo, `The conversation rendered should be the one of the person clicked on. When clicking on 'Dad' we expected a 4 line conversation, you gave a ${convoProps.convo.length} line conversation.`)
                .toHaveLength(4)
        })
    });
    it('Your Conversation component should recieve a "sender" string from props', () => {
        const wrapper = mount(<Exercise2/>)
        wrapper.setState({displayConversation: "Dad"}, () => {
            let convoProps = wrapper.find(Conversation).props()
            expect(convoProps.sender, "You should send a string 'sender' prop to your Conversation component")
                .toBe('Dad')
        })
    })
    it('Your Conversation component should render a div for each message', () => {
        const wrapper = mount(<Exercise2/>)
        wrapper.setState({displayConversation: "Dad"}, () => {
            let convoDivs = wrapper.find(Conversation).children()
            expect(convoDivs.children().find("div"), 'you should print each message in a separate div in your conversation Component. There should only be as many divs as there are messages')
                .toHaveLength(4)
        })
    })
    it('You should print Me when the sender is "self" and the persons name when the sender is "other"', () => {
        const wrapper = mount(<Exercise2/>)
        wrapper.setState({displayConversation: "Dad"}, () => {
            let dadConvo = wrapper.state().conversations.find(c => c.with==="Dad").convo
            let convoDivs = wrapper.find(Conversation).children().find('.sender')
            dadConvo.forEach((c, i) => {
                let convoSender = convoDivs.at(i).text()
                if (c.sender === "other") {
                    expect(convoSender, `When the message sender is 'other', you should display the name of the person the conversation is with. For the Dad's conversation, you prinited ${convoSender}, we expected "Dad"`)
                        .toBe("Dad")
                } else {
                    expect(convoSender, `When the message sender is 'self', you should display 'Me'. For the Dad's conversation, you prinited ${convoSender}, we expected "Me"`)
                        .toBe("Me")
                }
            })
        })
    })
})

