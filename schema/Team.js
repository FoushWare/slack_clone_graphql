export default `
  type Team {
    id: Int!
    name: String!
    owner: User!
    members: [User!]!
    channels: [Channel!]!
  }
  type CreateTeamResponse {
    ok: Boolean!
    team: Team
    errors: [Error!]
  }
  type Query {
    ownedTeams: [Team!]!
    myinvitedTeams: [Team!]!

  }
  type VoidResponse {
    ok: Boolean!
    errors: [Error!]
  }
  type Mutation {
    createTeam(name: String!): CreateTeamResponse!
    addTeamMember(email: String!, teamId: Int!): VoidResponse!
  }
`;