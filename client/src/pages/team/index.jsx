import useFetch from '../../hooks/get';
import SingleTeam from './components/singleTeam';

const Team = () => {
  const { data } = useFetch('/member');

  const teams = data.members?.reduce((acc, member) => {
    if (!acc[member.team_id]) {
      acc[member.team_id] = {
        title: member.title,
        members: [],
      };
    }
    acc[member.team_id].members.push(member);
    return acc;
  }, {});

  return data && teams ? (
    <div className='p-10 text-center'>
      {Object.entries(teams).map(([teamId, team]) => (
        <SingleTeam key={teamId} title={team.title} members={team.members} />
      ))}
    </div>
  ) : null;
};

export default Team;
