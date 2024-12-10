import React from "react";
import Page from "../components/Page";
import RequestCard from "../components/RequestCard";

const Requests = () => {
  return (
    <Page>
      <h1 className="text-3xl mb-1 font-medium">Requests</h1>
      <h2 className="font-medium text-lg opacity-60">Manage Asset Requests</h2>
      <div className="mt-6 grid grid-cols-2 gap-5">
        <RequestCard
          asset={"Mouse"}
          user={"Jaime Lannister"}
          team={"Digital Marketing"}
        />
        <RequestCard
          asset={"Keyboard"}
          user={"Cersei Lannister"}
          team={"HR Management"}
        />
        <RequestCard
          asset={"Mouse"}
          user={"Robert Baratheon"}
          team={"Software Development"}
        />
        <RequestCard
          asset={"Laptop"}
          user={"Arya Stark"}
          team={"Graphics Designing"}
        />
        <RequestCard
          asset={"Monitor"}
          user={"Viserys Targeryn"}
          team={"Digital Marketing"}
        />
        <RequestCard
          asset={"Keyboard"}
          user={"Bran Stark"}
          team={"Management Team"}
        />
        <RequestCard
          asset={"Laptop"}
          user={"Jaime Lannister"}
          team={"Digital Marketing"}
        />
        <RequestCard
          asset={"Laptop"}
          user={"Robb Stark"}
          team={"Graphics Designing"}
        />
        <RequestCard
          asset={"Keyboard"}
          user={"Theon Greyjoy"}
          team={"Software Development"}
        />
      </div>
    </Page>
  );
};

export default Requests;
