import Directory from "../../components/directory/directory.component";
import React from "react";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Women",
    },
    {
      id: 5,
      title: "Men",
    },
  ];

  return (
    <React.Fragment>
      <Directory categories={categories} />
    </React.Fragment>
  );
};

export default Home;
