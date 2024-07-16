import {
  MRT_EditActionButtons,
  MaterialReactTable,

  // createRow,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMaterialReactTable,
} from "material-react-table";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useMemo } from "react";

type Event = {
    name: string
    level: string;
    description: string;
    type: string;
    language : string;
  };

const data: Event[] = [
  {
    name: "Earth",
    level: "3",
    description: "Somwhere you die",
    type: "One-shot",
    language : "eng"
  },
  {
    name: "Sun",
    level: "6",
    description: "Somwhere you burn",
    type: "One-shot",
    language : "fr"
  },
  {
    name: "Moon",
    level: "6",
    description: "Somwhere you can't breath",
    type: "Campaign",
    language : "eng"
  },
  {
    name: "Space",
    level: "6",
    description: "Somwhere you freeze",
    type: "Campaign",
    language : "fr"
  },

];
export const Tables = () => {
  const columns = useMemo<MRT_ColumnDef<Event>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 150,
      },

      {
        accessorKey: "level",
        header: "Level",
        size: 150,
      },

      {
        accessorKey: "description", //normal accessorKey
        header: "Description",
        size: 200,
      },

      {
        accessorKey: "type",
        header: "Type",
        size: 150,
      },

      {
        accessorKey: "language",
        header: "Language",
        size: 150,
      },
    ],

    []
  );
  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowActions: true,
    createDisplayMode: "modal",
    columnResizeMode: "onChange",
    muiTableContainerProps: {
      sx: {
        minHeight: "500px",
        minWidth : "1200px",
      },
    },
    enableEditing: true,
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h3">Create New User</DialogTitle>

        <DialogContent sx={{ display: "flex", gap: "1rem" }}>
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>

        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton >
            <EditIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete">
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true); //simplest way to open the create row modal with no default values

          //or you can pass in a row object to set default values with the `createRow` helper function

          // table.setCreatingRow(

          //   createRow(table, {

          //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios

          //   }),

          // );
        }}
      >
        Create New Event
      </Button>
    ),
  });
  return (
    <div>
      <MaterialReactTable table={table} />;
    </div>
  );
};
