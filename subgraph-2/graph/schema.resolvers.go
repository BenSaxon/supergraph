package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.40

import (
	"context"
	"fmt"
	"strconv"
	"subgraph-2/graph/model"
)

// CreateActor is the resolver for the createActor field.
func (r *mutationResolver) CreateActor(ctx context.Context, actorInput model.ActorInput) (*model.Actor, error) {
	id := actorInput.ID
	var actor model.Actor
	actor.Name = actorInput.Name

	n := len(r.Resolver.ActorStore)
	if n == 0 {
		r.Resolver.ActorStore = make(map[string]model.Actor)
	}

	if id != nil {
		as, ok := r.Resolver.ActorStore[*id]
		if !ok {
			return nil, fmt.Errorf("not found")
		}
		if actorInput.Sex != nil {
			actor.Sex = *actorInput.Sex
		} else {
			actor.Sex = as.Sex
		}
		r.Resolver.ActorStore[*id] = actor
	} else {
		// generate unique id
		nid := strconv.Itoa(n + 1)
		actor.ID = nid
		actor.Name = actorInput.Name
		actor.Sex = *actorInput.Sex
		r.Resolver.ActorStore[nid] = actor
	}

	return &actor, nil
}

// Actors is the resolver for the Actors field.
func (r *queryResolver) Actors(ctx context.Context) ([]*model.Actor, error) {
	actors := make([]*model.Actor, 0)
	for idx := range r.Resolver.ActorStore {
		actor := r.Resolver.ActorStore[idx]
		actors = append(actors, &actor)
	}

	return actors, nil
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
