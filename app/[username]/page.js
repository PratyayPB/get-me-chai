import React from "react";

const Username = async ({ params }) => {
  const { username } = await params;
  return <div className="min-h-screen">{username}</div>;
};

export default Username;
