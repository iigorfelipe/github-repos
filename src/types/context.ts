import { UserInfos } from "./user";

export type UserContextType = {
  searchInputValue: string;
  setSearchInputValue: (newState: string) => void;
  userInformation: UserInfos;
  setUserInformation: (newState: UserInfos) => void;
};
