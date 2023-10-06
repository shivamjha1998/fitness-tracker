import { useEffect } from "react";
import { useUser } from "./UserContext";
import axios from "axios";

export const LogSteps = () => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      const logSteps = async () => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          };
          const res = await axios.post("/log-steps", { steps: 1000 }, config);
          // handle successful response
        } catch (error) {
          console.log("Failed to log steps", error);
        }
      };

      logSteps();
    }
  }, [user]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Log Your Steps
      </Typography>
      <TextField
        type="number"
        label="Enter steps"
        variant="outlined"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleLogSteps}>
        Log Steps
      </Button>
      {message && <Typography variant="body2" color="textSecondary">{message}</Typography>}
    </div>
  );
};
