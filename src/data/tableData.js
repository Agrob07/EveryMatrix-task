import { VscListUnordered } from "react-icons/vsc";

export const tableData = ["Top Afiliates", "Signups", "PendingCommissions"];

export const data = [
  {
    show: {
      id: 1007,
      name: "Simona",
      type: "55",
      status: "Simona",
      view: <VscListUnordered style={{ marginLeft: "1rem" }} />,
    },
  },
  {
    show: {
      id: 1008,
      name: "Ariana",
      type: "45",
      status: "Adelina",
      view: <VscListUnordered style={{ marginLeft: "1rem" }} />,
    },
  },
  {
    show: {
      id: 1009,
      name: "Adam",
      type: "35",
      status: "Adam",
      view: <VscListUnordered style={{ marginLeft: "1rem" }} />,
    },
  },
  {
    show: {
      id: 1010,
      name: "John",
      type: "25",
      status: "John",
      view: <VscListUnordered style={{ marginLeft: "1rem" }} />,
    },
  },
  {
    show: {
      id: 1011,
      name: "Garry",
      type: "15",
      status: "Garry",
      view: <VscListUnordered style={{ marginLeft: "1rem" }} />,
    },
  },
];

export const columns = [
  {
    Header: "ID",
    accessor: "show.id",
  },
  {
    Header: "Username",
    accessor: "show.name",
  },
  {
    Header: "Profit($)",
    accessor: "show.type",
  },
  {
    Header: "Comission($)",
    accessor: "show.status",
  },
  {
    Header: "View",
    accessor: "show.view",
  },
];
