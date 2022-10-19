



const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""); //Задание 1
//prompt для того ,что задавать вопрос пользователям + можно поставить ,что указать ,что ответ будет числом


const PersonalMovieDB = {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = +prompt("на сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = +prompt("на сколько оцените его?", "");

      PersonalMovieDB.movies.a = b;
      PersonalMovieDB.movies.c = d;


      console.log(PersonalMovieDB);






