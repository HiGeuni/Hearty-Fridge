import { IMessage } from "types";
import { MessageContainer } from "./style";
import moment from "moment";

interface IProps {
  messages: IMessage[];
}

const HeartyTalkList = ({ messages }: IProps) => {
  return (
    <div>
      {messages.map((message) => (
        <MessageContainer>
          <div>{message.message}</div>
          <div className="date">
            {moment(message.sendTime).format("yyyy.mm.DD")}
          </div>
        </MessageContainer>
      ))}
    </div>
  );
};

export default HeartyTalkList;
