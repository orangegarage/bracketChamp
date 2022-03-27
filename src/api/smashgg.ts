import axios from "axios";

const instance = axios.create({
  baseURL: "/gql/alpha",
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${import.meta.env["VITE_SMASHGG_KEY"]}`,
  },
});

export async function getChallongeTournamentInfo(): Promise<unknown> {
  const response = await instance.post(
    "/",
    {
      query: `query EventStandings($eventId: ID!, $page: Int!, $perPage: Int!) {
          event(id: $eventId) {
            id
            name
            standings(query: {
              perPage: $perPage,
              page: $page
            }){
              nodes {
                placement
                entrant {
                  id
                  name
                }
              }
            }
          }
        }
      `,
      variables: {
        eventId: 78790,
        page: 1,
        perPage: 3,
      },
    },
    {
      headers: {
        // "Access-Control-Allow-Origin": "*",
        // origin: "https://api/smash.gg/gql/alpha",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}
