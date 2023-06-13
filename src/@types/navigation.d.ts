export declare global {
  //export global namespace
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      Register: undefined;
      RegisterSecondStep: { accountId: number; userId: number };
      Home: undefined;
      Profile: undefined;
      Ticket: { id: number };
      TicketList: undefined;
      Event: { id: number };
      FriendsList: undefined;
      Settings: undefined;
      TicketsSold: undefined;
      FriendView: { id: number };
      AboutPromoters: undefined;
      TermsOfUse: undefined;
    }
  }
}
