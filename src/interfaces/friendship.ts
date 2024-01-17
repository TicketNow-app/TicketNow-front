export interface PendingFriendship {
  id: string;
  image: string;
  first_name: string;
  last_name: string;
  nickname: string;
  mutualFriends: number;
}

export interface ResponsePendingFriendship {
  pending: PendingFriendship[];
}
