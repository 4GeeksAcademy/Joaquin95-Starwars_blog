const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
			],
		favs: []
		},
		actions: {
			addFavs : (fav) => {
				setStore ({favs: [...getStore().favs, fav]})
			},
			removeFavs : (fav) => {
				let newFavs = getStore().favs.filter((favorites, index) =>{
					return favorite !== fav
				})
				setStore(favs: newFavs)
			},
			}
		}
	};
};

export default getState;
