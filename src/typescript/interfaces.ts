export interface Movie {
  id: number;
  title: string;
  original_title: string;
  backdrop_path: string;
  credits: Credits;
  poster_path: string;
  release_date: string;
  reviews: Reviews;
  runtime: number;
  tagline: string;
  genres: [
    {
      id: number;
      name: string;
    },
  ];
  overview: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  media_type: "movie";
}
export interface Person {
  gender: 0 | 1 | 2 | 3;
  biography: string;
  birthday: string;
  deathday: string;
  id: number;
  known_for_department: string;
  movie_credits: {
    cast: (Movie & CastMember)[];
    crew: (Movie & CrewMember)[];
  };
  name: string;
  original_name: string;
  place_of_birth: string;
  popilarity: number;
  profile_path: string;
  media_type: "person";
}

export interface TV {
  id: number;
  media_type: "tv";
}

export interface Credits {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  gender: number;
  known_for_department: string;
}

export interface CrewMember {
  id: number;
  name: string;
  department: string;
  profile_path: string;
  job: string;
  gender: number;
  known_for_department: string;
}

export interface Reviews {
  id: number;
  results: Review[];
}

export interface Review {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
