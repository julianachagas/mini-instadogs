import createAsyncSlice from './helper/createAsyncSlice';

const photos = createAsyncSlice({
  name: 'photos',
  initialState: {
    list: [],
    pages: 0,
    photosAvailable: true,
  },
  reducers: {
    addPhotos(state, action) {
      state.pages++;
      state.list.push(...action.payload);
      if (action.payload.length === 0) {
        state.photosAvailable = false;
      }
    },
    removePhotos(state) {
      state.list = [];
      state.pages = 0;
      state.photosAvailable = true;
      state.data = null;
    },
  },
  fetchConfig: (page = 1) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  }),
});

export const { addPhotos, removePhotos } = photos.actions;
export const fetchPhotos = photos.asyncAction;

export const loadNewPhotos =
  (page = 1) =>
  async dispatch => {
    const { payload } = await dispatch(fetchPhotos(page));
    dispatch(addPhotos(payload));
  };

export default photos.reducer;
