import useFetch from "../../hooks/get";
import SingleTeam from "./components/singleTeam";
import { motion } from "framer-motion";
import { Oval } from "react-loader-spinner";

const Team = () => {
  const { data, loading } = useFetch("/member");
  const { data: teamsData, loading: teamsLoading } = useFetch("/team");

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

  if (loading || teamsLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Oval
          height={80}
          width={80}
          color="#b60707"
          ariaLabel="loading"
          secondaryColor="#e5a3a3"
          strokeWidth={4}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

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
