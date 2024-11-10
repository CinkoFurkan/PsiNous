import Card from "../card";

export default function SingleTeam({teamData}) {
    return (
        <div className="flex flex-wrap justify-between gap-5 p-5">
            {teamData?.team_infos?.length > 0 ? (
                teamData.team_infos.map((teamMember, index) => (
                    <Card
                        key={index}
                        image={teamMember.image}
                        description={teamMember.description}
                    />
                ))
            ) : (
                <div>Loading team members...</div>
            )}
        </div>
    );
}