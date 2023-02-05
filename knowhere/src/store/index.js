import {create} from 'zustand';

export const triggerSignUpActionSheet = create(set => ({
  isSignUpActionSheetOpen: false,
  openSignUpActionSheet: () => set(() => ({isSignUpActionSheetOpen: true})),
  closeSignUpActionSheet: () => set(() => ({isSignUpActionSheetOpen: false})),
}));
