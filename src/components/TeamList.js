import React from 'react';
import { Link } from 'react-router';
import { round } from '../utils/utils';

const TeamList = ({sortBy, teams}) => {
  return (
    <table>
      <thead>
        <tr><th /><th>Team</th><th>Rating</th></tr>
      </thead>
      <tbody>
        {teams.sort(sortBy).map((team, index) => {
          return <tr key={team.id}><td>{index+1}</td><td><Link to={`teams/${team.id}`}>{team.name}</Link></td><td>{round(team.ratings.overall,2)}</td></tr>
        })}
      </tbody>
    </table>
  );
};

TeamList.defaultProps = {
  teams: React.PropTypes.object.isRequired
};

export default TeamList;
