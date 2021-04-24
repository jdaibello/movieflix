import React, { useEffect, useState } from 'react';
import { Movie } from 'core/types/Movie';
import { getSessionData, isAllowedByRole } from 'core/utils/auth';
import { makePrivateRequest } from 'core/utils/request';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';
import ReviewCard from './ReviewCard';
import './styles.scss';

type ParamsType = {
  movieId: string;
}

type FormState = {
  text: string;
}

const MovieDetails = () => {
  const { register, handleSubmit, errors } = useForm<FormState>();
  const [currentUser, setCurrentUser] = useState(0);
  const { movieId } = useParams<ParamsType>();
  const [movie, setMovie] = useState<Movie>();
  const history = useHistory();

  useEffect(() => {
    const currentUserData = getSessionData();
    setCurrentUser(currentUserData.userId);
    makePrivateRequest({ url: `/movies/${movieId}` })
      .then(response => setMovie(response.data));
  }, [movieId]);

  const onSubmit = (data: FormState) => {
    const payload = {
      ...data,
      movieId: movie?.id,
      userId: currentUser
    }

    makePrivateRequest({
      url: '/reviews',
      method: 'POST',
      data: payload
    })
      .then(() => {
        toast.success("Avaliação salva com sucesso!");
        history.go(0);
      })
      .catch(() => {
        toast.error("Erro ao salvar avaliação. Tente novamente!");
      })
  }

  return (
    <div className="movie-details-container">
      <div className="card-base border-radius-20 movie-details">
        <div className="row">
          <div className="col-6">
            <img src={movie?.imgUrl} alt={movie?.title} className="movie-details-image" />
          </div>
          <div className="col-6">
            <h1 className="movie-details-title">
              {movie?.subTitle === null ? `${movie?.title}` : `${movie?.title}: ${movie?.subTitle}`}
            </h1>
            <h4 className="movie-details-year">
              {movie?.year}
            </h4>
            <p className="movie-details-card movie-details-synopsis">
              {movie?.synopsis}
            </p>
          </div>
        </div>
      </div>
      <div className="card-base border-radius-20 movie-add-review">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            ref={register({
              required: "Campo obrigatório",
              minLength: { value: 5, message: "O campo deve ter no mínimo 5 caracteres" }
            })}
            name="text"
            className="form-control input-base"
            placeholder="Deixe sua avaliação aqui"
            onBlur={(e: any) => e.target.value = e.target.value.trim()}
            disabled={isAllowedByRole(['ROLE_VISITOR']) ? true : false}
          />
          {errors.text && (
            <div className="invalid-feedback d-block">
              {errors.text.message}
            </div>
          )}
          <button
            className="btn button-base border-radius-10"
            disabled={isAllowedByRole(['ROLE_VISITOR']) ? true : false}
          >
            SALVAR AVALIÇÃO
          </button>
        </form>
      </div>
      <div className="card-base border-radius-20 movie-details review-list">
        {movie?.reviews?.map(review => (
          <ReviewCard
            key={review.id}
            text={review.text}
            user_name={review.userName}
          />
        ))}
      </div>
    </div>
  )
}

export default MovieDetails;