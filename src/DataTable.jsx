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
    Object.keys(row).some((field) => {
      if (typeof row[field] === "boolean") {
        return row[field] === (filterValue.toLowerCase() === "true");
      }
      if (typeof row[field] === "string") {
        return row[field].toLowerCase().includes(filterValue.toLowerCase());
      }
      if (typeof row[field] === "number") {
        return row[field].toString().includes(filterValue.toLowerCase());
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
