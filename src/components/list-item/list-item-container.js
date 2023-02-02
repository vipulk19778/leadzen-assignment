import React from "react";
import { ListItemRenderer } from "./list-item-renderer";
import axios from "axios";

export const ListItemContainer = () => {
  const [listItem, setListItem] = React.useState([]);

  const [currentPage, setCurrentPage] = React.useState(1);

  const [temp, setTemp] = React.useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  React.useEffect(() => {
    loadListItem();
  }, []);

  const loadListItem = async () => {
    return await axios
      .get(url)
      .then((response) => {
        let data = response.data;
        setListItem(data);
      })
      .catch((err) => console.log(err.message));
  };

  let pageLimit = 3;

  let filterArr = listItem;

  let pages = Math.ceil(filterArr.length / pageLimit);

  let pageArray = [];

  for (let i = 1; i <= pages; i++) {
    pageArray.push(i);
  }

  let si = (currentPage - 1) * pageLimit;

  let ei = si + pageLimit;

  filterArr = filterArr.slice(si, ei);

  const handleViewDetails = (id) => {
    if (temp.includes(id)) {
      setTemp(temp.filter((e) => e !== id));
    } else {
      setTemp([...temp, id]);
    }
  };

  const store = {
    currentPage,
    setCurrentPage,
    pageArray,
    filterArr,
    pages,
    handleViewDetails,
    temp,
    setTemp,
  };
  return <ListItemRenderer store={store} />;
};
