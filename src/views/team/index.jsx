import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";
import { tokens } from "../../theme";
import PageContainer from "../../components/PageContainer";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import useWindowDimension from "../../hooks/useWindowDimension";

export default function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { height } = useWindowDimension();
  const tableBoxHeight = height - 162;
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column-cell" },
    { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left" },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width="100%"
          minWidth="100px"
          maxWidth="150px"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]}
          borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlined />}
          {access === "manager" && <SecurityOutlined />}
          {access === "user" && <LockOpenOutlined />}
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            {access}
          </Typography>
        </Box>
      ),
    },
  ];
  return (
    <PageContainer>
      <Header title="TEAM" subTitle="Managing the Team Members" />
      <Box
        mt={2}
        height={`${tableBoxHeight}px`}
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column-cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </PageContainer>
  );
}
