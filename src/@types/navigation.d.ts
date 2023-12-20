export declare global {
  //export global namespace
  namespace ReactNavigation {
    interface RootParamList {
      Login: undefined;
      Register: undefined;
      RegisterSecondStep: { accountId: number; userId: string };
      Home: undefined;
      Profile: undefined;
      Ticket: { id: string };
      TicketList: undefined;
      Event: { id: string };
      FriendsList: undefined;
      Settings: undefined;
      FriendView: { id: string };
      AboutPromoters: undefined;
      TermsOfUse: undefined;
    }
  }
}
