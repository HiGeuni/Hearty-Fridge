export interface IUser {
  memberId: number;
  email: string;
  name: string;
  profileImage: string;
}

// profileImage가 img라면 HTMLImageElement
// input이라면 File
// URL이라면 string
