import { ValuesToBeFiltered } from './filter';
import { Repo, UserInfos } from './user';

export type UserContextType = {
  searchInputValue: string;
  setSearchInputValue: (newState: string) => void;

  userInformation: UserInfos;
  setUserInformation: (newState: UserInfos) => void;

  reposFiltered: Repo[];
  setReposFiltered: (newState: Repo[]) => void;

  valuesToBeFiltered: ValuesToBeFiltered;
  setValuesToBeFiltered: (newState: ValuesToBeFiltered) => void;
};
