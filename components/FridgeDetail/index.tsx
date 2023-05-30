import { useState } from 'react';
import { useGetFridgeById } from '@api/hooks/fridge';
import Loading from '@components/Loading';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import DetailMenu from './DetailMenu';
import FridgeInfo from './FridgeInfo';
import FoodList from './FoodList';
import {
  DetailContainer,
  FoodMessageContainer,
  Like,
  ListContainer,
} from './style';
import HeartyTalkList from './HeartyMessage';

interface FridgeDetailProps {
  id: string;
}

function FridgeDetail({ id }: FridgeDetailProps) {
  const [isFood, setIsFood] = useState(true);
  const { data } = useGetFridgeById({ id: parseInt(id) });
  if (!data) return <Loading />;

  return (
    <DetailContainer>
      <Like>
        {data.isBookmark ? (
          <StarRoundedIcon style={{ color: '#F2916E' }} />
        ) : (
          <StarOutlineRoundedIcon style={{ color: '#F2916E' }} />
        )}
      </Like>
      <FridgeInfo data={data} />
      <ListContainer>
        <DetailMenu isFood={isFood} setIsFood={setIsFood} />
        <FoodMessageContainer>
          {isFood ? (
            <FoodList foods={data.foodList} />
          ) : (
            <HeartyTalkList messages={data.messageList} />
          )}
        </FoodMessageContainer>
      </ListContainer>
    </DetailContainer>
  );
}

export default FridgeDetail;
