// Data / database
let data =  [
  { id: 1, title: 'Harga Beras Hari Ini', prev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore' },
  { id: 2, title: 'Persiapan Cagub Jelang Putaran kedua', prev: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
  { id: 3, title: 'Profil CEO KumpulBerbagi', prev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore' },
  { id: 4, title: 'Hacktiv8 Membuka Cabang di USA', prev: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
]

// Search
export default (state=data, action) => {
  switch (action.type) {
    case 'NEWS_SEARCH':
      console.log(data.filter((x)=> (x.title === null ? '' : x.title).match( new RegExp(action.payload, 'i')) )
);
      return data.filter((x)=> (x.title === null ? '' : x.title).match( new RegExp(action.payload, 'i')) )
    default:
      return state
  }
}
