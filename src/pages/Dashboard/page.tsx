import { Box } from "@mui/material";
import ClientJourney from "../../components/Pages/Dashboard/ClientJourney/ClientJourney";
import Overview from "../../components/Pages/Dashboard/Overview/Overview";

export default function Dashboard() {
  return (
    <Box>
        <ClientJourney />
        <Overview />
    </Box>
  )
}
