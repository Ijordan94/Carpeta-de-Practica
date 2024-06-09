class pelisHarry {
    constructor(title, imgURL, description){
        this.title = title;
        this.imgURL = imgURL;
        this.description = description;
    }
}

class Repository {
    constructor(){
    this.movies = [];
    }

    getAllMovies(){
    return this.movies;
    }
    
    createMovie(title, imgURL, description){
        const pelis = new pelisHarry(title,imgURL,description)
        this.movies.push(pelis)
        return pelis
    }

}

const repositorio = new Repository();
repositorio.createMovie("Harry Potter and the Philosopher's Stone","https://www.classification.gov.au/sites/default/files/styles/poster_desktop_2x/public/posters/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg?itok=LR6hfezZ","descripcion")
repositorio.createMovie("Harry Potter and the Chamber of Secrets","https://static.wikia.nocookie.net/esharrypotter/images/1/1a/599.jpg/revision/latest?cb=20110528191335","descripcion")
repositorio.createMovie("Harry Potter and the Prisoner of Azkaban","https://static.wikia.nocookie.net/potterheads/images/3/30/Harry-potter-3-forest-i621.jpg/revision/latest?cb=20190224161621&path-prefix=es","descripcion")
repositorio.createMovie("Harry Potter and the Goblet of Fire","https://static.wikia.nocookie.net/esharrypotter/images/9/94/Gobfire_%284%29.jpg/revision/latest/scale-to-width-down/250?cb=20110610201335","descripcion")
repositorio.createMovie("Harry Potter and the Order of Phoenix","https://live.staticflickr.com/3182/3004777671_f134323c36_c.jpg","descripcion")
repositorio.createMovie("Harry Potter and the Half-Blood Prince","https://pics.filmaffinity.com/harry_potter_and_the_half_blood_prince_harry_potter_6-211137742-large.jpg","descripcion")
repositorio.createMovie("Harry Potter and the Deathly Hallows","https://play-lh.googleusercontent.com/KM26WEBAsLv25G1cJSwEhTNmqjLnw2f6CkQv8oR6JOhqYRmQGCrC2-QM5VOhxgQfR1wRIKwKDfCkeg1sfv_D=w240-h480-rw","descripcion")

