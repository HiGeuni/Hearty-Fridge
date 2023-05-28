export interface IFridgeInfo {
  fridgeId: number;
  fridgeName: string;
  fridgeAddress: string;
  fridgeImage: string;
  lat: number;
  lng: number;
}

export interface IFridgeDetail {
  fridgeInfo: IFridgeInfo;
  isBookmark: boolean;
  foodList: IFoodList[];
  messageList: IMessage[];
}

export interface IFridgeItem {
  fridgeInfo: IFridgeInfo;
  numFoods: number;
  numMessages: number;
  isBookmark: boolean;
}

export interface IFridgeAll {
  data: {
    fridgeList: IFridgeItem[];
  };
}

export interface IFood {
  id: number;
  message: string;
  expiration: string;
  amount: string;
  category: string;
  name: string;
}
export interface IFoodList {
  food: IFood;
  fridgeName: string;
  giveId: number;
  giveTime: string;
  isReserved: boolean;
}

export interface IMessage {
  giveId: number;
  message: string;
  messageId: number;
  sendTime: string;
}
export interface IUser {
  memberId: number;
  email: string;
  name: string;
  profileImage: string;
}

// profileImage가 img라면 HTMLImageElement
// input이라면 File
// URL이라면 string
