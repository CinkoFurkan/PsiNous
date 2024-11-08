import useFetch from "../../hooks/get";
import SingleTeam from "./components/singleTeam";
import { motion } from "framer-motion";

const Team = () => {
  const { data } = useFetch("/member");
  const { data: teamsData } = useFetch("/team");

  const teams = data.members?.reduce((acc, member) => {
    if (!acc[member.team_id]) {
      acc[member.team_id] = {
        title: member.title,
        members: [],
        position: member.position,
      };
    }
    acc[member.team_id].members.push(member);
    return acc;
  }, {});

  if (teamsData && teams) {
    Object.entries(teams).forEach(([teamId, team]) => {
      const teamInfo = teamsData.team_infos.find((t) => t.title === team.title);
      if (teamInfo) {
        team.position = teamInfo.position;
      }
    });
  }

  const sortedTeams = Object.entries(teams || {}).sort((a, b) => {
    return a[1].position - b[1].position;
  });

  return data && teams ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-10 text-center"
    >
      {sortedTeams.map(([teamId, team]) => (
        <SingleTeam key={teamId} title={team.title} members={team.members} />
      ))}
    </motion.div>
  ) : null;
};

export default Team;
