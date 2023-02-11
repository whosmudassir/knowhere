import {create} from 'zustand';

export const triggerSignUpActionSheet = create(set => ({
  isSignUpActionSheetOpen: false,
  openSignUpActionSheet: () => set(() => ({isSignUpActionSheetOpen: true})),
  closeSignUpActionSheet: () => set(() => ({isSignUpActionSheetOpen: false})),
}));

//BE store rent fav data
export const userRentFavoriteStore = create(set => ({
  userRentFavorites: [],
  addToRentFavorite: itemId => {
    set(state => ({
      userRentFavorites: [...state.userRentFavorites, itemId],
    }));
  },
  removeFromRentFavorite: itemId => {
    set(state => ({
      userRentFavorites: state.userRentFavorites.filter(id => id !== itemId),
    }));
  },
}));

//BE store rent fav data
export const userFoodFavoriteStore = create(set => ({
  userFoodFavorites: [],
  addToFoodFavorite: itemId => {
    set(state => ({
      userFoodFavorites: [...state.userFoodFavorites, itemId],
    }));
  },
  removeFromFoodFavorite: itemId => {
    set(state => ({
      userFoodFavorites: state.userFoodFavorites.filter(id => id !== itemId),
    }));
  },
}));
