import { IMessage } from 'types';
import moment from 'moment';
import { MessageContainer } from './style';

interface IProps {
  messages: IMessage[];
}

function HeartyTalkList({ messages }: IProps) {
  return (
    <div>
      {messages.map(message => (
        <MessageContainer>
          <div>{message.message}</div>
          <div className="date">
            {moment(message.sendTime).format('yyyy.mm.DD')}
          </div>
        </MessageContainer>
      ))}
    </div>
  );
}

export default HeartyTalkList;
