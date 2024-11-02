import useFetch from "../../hooks/get";
import SingleTeam from "./components/singleTeam";
import { motion } from "framer-motion";

const Team = () => {
  const { data } = useFetch("/member");

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-10 text-center"
    >
      {Object.entries(teams).map(([teamId, team]) => (
        <SingleTeam key={teamId} title={team.title} members={team.members} />
      ))}
    </motion.div>
  ) : null;
};

export default Team;
