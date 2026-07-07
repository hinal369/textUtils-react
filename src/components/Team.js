import { useParams } from "react-router";

export default function Team() {
  let { teamId, userId} = useParams();

  return (
    <div>
      <h1>Team Detail</h1>
      <h2>Team ID: {teamId}</h2>
      <h2>User ID: {userId}</h2>
    </div>
  )
}
