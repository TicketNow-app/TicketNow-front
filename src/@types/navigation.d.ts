import { IRegister } from "../interfaces/register";

export declare global { //export global namespace
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      Register: undefined;
      RegisterSecondStep: IRegister;
      Home: undefined;
      Ticket: undefined;
      TicketList: undefined;
      Event: { id: number };
      FriendsList: undefined;
      Settings: undefined;
      EditProfile: undefined;
    }
  }
}
