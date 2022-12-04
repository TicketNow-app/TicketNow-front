import { ContainerCircle, ImageAvatar } from './styles';

export function AvatarMini() {
  return (
    <ContainerCircle activeOpacity={0.6}>
      <ImageAvatar source={{ uri: 'https://images.unsplash.com/photo-1629818036993-ae9c53c8e059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' }} />
    </ContainerCircle>
  );
}
