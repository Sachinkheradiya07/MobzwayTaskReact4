import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import data from "./data";

const columns = [
  { field: "customer", headerName: "Customer", width: 150 },
  { field: "lastSeen", headerName: "Last Seen", width: 150 },
  { field: "orders", headerName: "Orders", width: 100 },
  { field: "totalSpent", headerName: "Total Spent", width: 150 },
  { field: "latestPurchase", headerName: "Latest Purchase", width: 200 },
  { field: "news", headerName: "News", width: 100 },
  { field: "segments", headerName: "Segments", width: 150 },
];

export default function MyDataGrid() {
  const [filterValue, setFilterValue] = useState("");

  const inputHandler = (e) => {
    const value = e.target.value.trim();
    setFilterValue(value);
  };

  const filteredRows = data.filter((row) =>
    Object.values(row).some((value) => {
      if (
        typeof value === "number" &&
        value.toString().toLowerCase().includes(filterValue.toLowerCase())
      ) {
        return true;
      }
      if (
        typeof value === "string" &&
        value.toLowerCase().includes(filterValue.toLowerCase())
      ) {
        return true;
      }
      return false;
    })
  );

  return (
    <div style={{ height: 400, width: "100%", overflow: "auto" }}>
      <input
        type="text"
        onChange={inputHandler}
        placeholder="Filter data..."
        style={{ marginBottom: 10 }}
      />
      <div style={{ height: 380, width: "100%" }}>
        <DataGrid rows={filteredRows} columns={columns} pageSize={5} />
      </div>
    </div>
  );
}
