import React, { useState } from "react";

const SortableTable = () => {
  const employees = [
    { name: "Alice", department: "HR", salary: 40000 },
    { name: "Bob", department: "IT", salary: 60000 },
    { name: "Charlie", department: "Finance", salary: 55000 },
    { name: "Diana", department: "IT", salary: 62000 },
    { name: "Eva", department: "Marketing", salary: 45000 },
  ];

  const [sortedData, setSortedData] = useState(employees);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  const sortBy = (column) => {
    let direction = "asc";
    if (sortConfig.key === column && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...sortedData].sort((a, b) => {
      if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
      if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
    setSortConfig({ key: column, direction });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#1a73e8", textAlign: "center" }}>Employee Table</h2>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ background: "#1a73e8", color: "white" }}>
            <th onClick={() => sortBy("name")} style={thStyle}>Name ⬍</th>
            <th onClick={() => sortBy("department")} style={thStyle}>Department ⬍</th>
            <th onClick={() => sortBy("salary")} style={thStyle}>Salary ⬍</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((emp, index) => (
            <tr
              key={index}
              style={{
                background: index % 2 === 0 ? "#e8f0fe" : "#ffffff",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#d2e3fc")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  index % 2 === 0 ? "#e8f0fe" : "#ffffff")
              }
            >
              <td style={tdStyle}>{emp.name}</td>
              <td style={tdStyle}>{emp.department}</td>
              <td style={tdStyle}>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  textAlign: "left",
  fontWeight: "bold",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ccc",
};

export default SortableTable;





