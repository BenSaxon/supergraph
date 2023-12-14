// THIS FILE IS GENERATED, DO NOT EDIT!
import * as SchemaTypes from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const UpsertCharacterDocument = gql`
    mutation upsertCharacter($characterInput: CharacterInput!) {
  upsertCharacter(characterInput: $characterInput) {
    name
    id
  }
}
    `;
export type UpsertCharacterMutationFn = Apollo.MutationFunction<SchemaTypes.UpsertCharacterMutation, SchemaTypes.UpsertCharacterMutationVariables>;

/**
 * __useUpsertCharacterMutation__
 *
 * To run a mutation, you first call `useUpsertCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertCharacterMutation, { data, loading, error }] = useUpsertCharacterMutation({
 *   variables: {
 *      characterInput: // value for 'characterInput'
 *   },
 * });
 */
export function useUpsertCharacterMutation(baseOptions?: Apollo.MutationHookOptions<SchemaTypes.UpsertCharacterMutation, SchemaTypes.UpsertCharacterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SchemaTypes.UpsertCharacterMutation, SchemaTypes.UpsertCharacterMutationVariables>(UpsertCharacterDocument, options);
      }
export type UpsertCharacterMutationHookResult = ReturnType<typeof useUpsertCharacterMutation>;
export type UpsertCharacterMutationResult = Apollo.MutationResult<SchemaTypes.UpsertCharacterMutation>;
export type UpsertCharacterMutationOptions = Apollo.BaseMutationOptions<SchemaTypes.UpsertCharacterMutation, SchemaTypes.UpsertCharacterMutationVariables>;
export const GetCharactersDocument = gql`
    query getCharacters($cliqueType: CliqueType!) {
  characters(cliqueType: $cliqueType) {
    id
    name
    isHero
    cliqueType
  }
}
    `;

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *      cliqueType: // value for 'cliqueType'
 *   },
 * });
 */
export function useGetCharactersQuery(baseOptions: Apollo.QueryHookOptions<SchemaTypes.GetCharactersQuery, SchemaTypes.GetCharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SchemaTypes.GetCharactersQuery, SchemaTypes.GetCharactersQueryVariables>(GetCharactersDocument, options);
      }
export function useGetCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SchemaTypes.GetCharactersQuery, SchemaTypes.GetCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SchemaTypes.GetCharactersQuery, SchemaTypes.GetCharactersQueryVariables>(GetCharactersDocument, options);
        }
export function useGetCharactersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SchemaTypes.GetCharactersQuery, SchemaTypes.GetCharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SchemaTypes.GetCharactersQuery, SchemaTypes.GetCharactersQueryVariables>(GetCharactersDocument, options);
        }
export type GetCharactersQueryHookResult = ReturnType<typeof useGetCharactersQuery>;
export type GetCharactersLazyQueryHookResult = ReturnType<typeof useGetCharactersLazyQuery>;
export type GetCharactersSuspenseQueryHookResult = ReturnType<typeof useGetCharactersSuspenseQuery>;
export type GetCharactersQueryResult = Apollo.QueryResult<SchemaTypes.GetCharactersQuery, SchemaTypes.GetCharactersQueryVariables>;