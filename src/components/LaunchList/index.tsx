import React from "react";
import { useQuery } from "@apollo/client";
import {
  GetAllLunchListDocument,
  LaunchProfileDocument,
} from "../../generated/graphql";

const LaunchList = () => {
  const { data } = useQuery(GetAllLunchListDocument);
  const { data: missionDetails } = useQuery(LaunchProfileDocument, {
    variables: {
      id: "2",
    },
  });
  console.log("missionDetails", missionDetails?.launch);
  return (
    <div>
      <h1>LaunchList</h1>
      <div>
        {data?.launches?.map((launch) => (
          <div>
            <h4>
              {launch?.flight_number} - {launch?.mission_name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchList;
