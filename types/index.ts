export interface IFridgeInfo {
  fridgeId: number;
  fridgeName: string;
  fridgeAddress: string;
  fridgeImage: string;
  lat: number;
  lng: number;
}

export interface IFridgeDetail {
  data: {
    fridgeInfo: IFridgeInfo;
    isBookmark: boolean;
    foodList: IFood[];
    messageList: IMessage[];
  };
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
