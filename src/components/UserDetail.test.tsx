import React from "react";
import { render } from "@testing-library/react";
import { UserDetail } from "./UserDetail";

const stubbedUser = {
  id: 6,
  name: "Mrs. Dennis Schulist",
  username: "Leopoldo_Corkery",
  email: "Karley_Dach@jasper.info",
  address: {
    street: "Norberto Crossing",
    suite: "Apt. 950",
    city: "South Christy",
    zipcode: "23505-1337",
    geo: {
      lat: "-71.4197",
      lng: "71.7478",
    },
  },
  phone: "1-477-935-8478 x6430",
  website: "ola.org",
  company: {
    name: "Considine-Lockman",
    catchPhrase: "Synchronised bottom-line interface",
    bs: "e-enable innovative applications",
  },
};

it("matches snapshot", () => {
  const { asFragment } = render(<UserDetail user={stubbedUser} />);

  expect(asFragment()).toMatchSnapshot();
});
