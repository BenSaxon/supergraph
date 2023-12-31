// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type Actor struct {
	ID    string  `json:"id"`
	Name  string  `json:"name"`
	Sex   string  `json:"sex"`
	Films []*Film `json:"films"`
}

type ActorInput struct {
	ID   *string `json:"id,omitempty"`
	Name string  `json:"name"`
	Sex  *string `json:"sex,omitempty"`
}

type Film struct {
	ID     string `json:"id"`
	Name   string `json:"name"`
	Rating int    `json:"rating"`
}
