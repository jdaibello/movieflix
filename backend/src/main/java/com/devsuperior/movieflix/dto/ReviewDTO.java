package com.devsuperior.movieflix.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class ReviewDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	@Size(min = 5, message = "Deve ter no mínimo 5 caracteres")
	@NotBlank(message = "Campo obrigatório")
	private String text;

	private Long movieId;
	private Long userId;
	private String userName;

	private UserDTO user;

	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text, Long movieId, Long userId, String userName, User user) {
		super();
		this.id = id;
		this.text = text;
		this.movieId = movieId;
		this.userId = userId;
		this.userName = userName;
	}

	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
		movieId = entity.getMovie().getId();
		userId = entity.getUser().getId();
		userName = entity.getUser().getName();
	}

	public ReviewDTO(Review entity, User user) {
		this(entity);
		this.user = new UserDTO(user);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
}
