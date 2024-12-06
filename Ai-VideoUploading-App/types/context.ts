import { User } from './user';

export interface GlobalContextType {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
  user: any | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}