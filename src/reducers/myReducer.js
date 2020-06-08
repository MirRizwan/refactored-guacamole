const myState = {
    fname: "Haseeb",
    fnature: "Bachoda",
    fmovies: [
        {
            _id: "5b21ca3eeb7f6fbccd471815",
            title: "I spit on your Grave",
            genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
            numberInStock: 6,
            dailyRentalRate: 2.5,
            publishDate: "2018-01-03T19:04:28.809Z",
            liked: true
          },
          {
            _id: "5b21ca3eeb7f6fbccd471816",
            title: "Wrong Turn",
            genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
            numberInStock: 5,
            dailyRentalRate: 2.5
          }
    ]
}

const myReducer = (state = myState, action) =>{
    
    switch (action.type) {
        case 'CHANGE_FNATURE': {
            const aaa = {...state};
            aaa.fnature = action.payload;
            return aaa;
        }
        case 'CHANGE_MOVIE_TITLE': {
            const bbb = {...state};
            
            bbb.fmovies[0].title = action.payload;
            
            // console.log("bbb: ", bbb);
            return bbb;
        }
       
        
        default:
          return state
      }















}

export default myReducer;