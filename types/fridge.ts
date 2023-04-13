interface IFridgeInfo {
  fridgeId: number;
  fridgeName: string;
  fridgeAddress: string;
  fridgeImage: string;
  lat: number;
  lng: number;
}

interface IFridgeDetail {
  fridgeInfo: IFridgeInfo;
  isBookmark: boolean;
  foodList: string[]; // TODO
  messageList: string[]; // TODO
}

interface IFridgeAll {
  fridgeInto: IFridgeInfo;
  numFoods: number;
  numMessages: number;
  isBookmark: boolean;
}
