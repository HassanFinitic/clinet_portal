/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    CircularProgress,
    TableContainer,
    TablePagination,
    useMediaQuery,
    useTheme,
    Paper,
} from "@mui/material";
import type { DataTableProps } from "./AppTable.types.ts";

const AppTable = <T extends object>({
    columns,
    data,
    loading = false,
    pagination,
  }: DataTableProps<T>) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
   
    return (
      <Box
        sx={{
          p: { xs: 2, sm: 3 },
          backgroundColor: "background.paper",
          borderRadius: {xs: "16px", sm: "24px"},
          border: "1px solid",
          borderColor: "divider",
          width: "100%",
          mb: 5,
        }}
      >
        {/* TABLE VIEW (Desktop & Tablet) */}
        {!isMobile ? (
          <Box sx={{ overflowX: "auto" }}>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    {columns.map((col, idx) => (
                      <TableCell
                        key={idx}
                        align="center"
                        sx={{
                          fontWeight: "bold",
                          width: col.width,
                          fontSize: { xs: "12px", md: "14px" },
                          color: "text.primary",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {col.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
   
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={columns.length} align="center">
                        <CircularProgress size={20} />
                      </TableCell>
                    </TableRow>
                  ) : data?.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={columns.length} align="center">
                        <Typography variant="body2">No data available</Typography>
                      </TableCell>
                    </TableRow>
                  ) : (
                    data?.map((row, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        sx={{
                          backgroundColor:
                            rowIndex % 2 === 0
                              ? "background.default"
                              : "background.paper",
                        }}
                      >
                        {columns.map((col, colIndex) => (
                          <TableCell
                            key={colIndex}
                            align={col.align || "center"}
                            sx={{ py: "16px", fontSize: { xs: "11px", md: "13px" } }}
                          >
                            {col.render ? col.render(row) : (row as any)[col.key]}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ) : (
          /* CARD VIEW (Mobile) */
          <Box>
            {loading ? (
              <Box textAlign="center" p={2}>
                <CircularProgress size={20} />
              </Box>
            ) : data?.length === 0 ? (
              <Typography variant="body2" align="center" p={2}>
                No data available
              </Typography>
            ) : (
              data?.map((row, rowIndex) => (
                <Paper
                  key={rowIndex}
                  elevation={0}
                  sx={{
                    mb: 2,
                    p: 2,
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "background.default",
                  }}
                >
                  {columns.map((col, colIndex) => (
                    <Box
                      key={colIndex}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        my: 1,
                      }}
                    >
                      <Box
                        sx={{ fontWeight: "bold", color: "text.secondary", fontSize: "14px", whiteSpace: "nowrap" }}
                      >
                        {col.label}
                      </Box>
                      <Box sx={{ fontSize: "14px" }}>
                        {col.render ? col.render(row) : (row as any)[col.key]}
                      </Box>
                    </Box>
                  ))}
                </Paper>
              ))
            )}
          </Box>
        )}
   
        {/* PAGINATION */}
        {pagination && (
          <Box dir="ltr" sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <TablePagination
              component="div"
              count={pagination?.total || 0}
              page={(pagination?.currentPage || 1) - 1}
              onPageChange={(_, newPage) => pagination.onPageChange(newPage + 1)}
              rowsPerPage={pagination.pageSize}
              rowsPerPageOptions={[pagination.pageSize]}
            />
          </Box>
        )}
      </Box>
    );
};

export default AppTable;