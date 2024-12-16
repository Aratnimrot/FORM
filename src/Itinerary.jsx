import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const itinerarySchema = z.object({
  IWanttoGoto: z.string().min(1, "Destination is required"),
  From: z.string().min(1, "Departure location is required"),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),

  ForNumberofDays: z.number().min(1, "At least 1 day is required"),
  PreferredModeofTravel: z
    .string()
    .min(1, "Preferred Mode of Travel is required"),
  numberOfPeople: z
    .number()
    .min(1, "Number of people is required")
    .int("Must be a valid number"),
  WhatsAppNumber: z.string().min(1, "WhatsApp Number is required"),
  purpose: z.string().min(1, "Purpose is required"),
  otherDetails: z.string().optional(),
  EmailID: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
});

const Itinerary = () => {
  const [mode, setMode] = useState("");

  const handleChange = (event) => {
    setMode(event.target.value);
  };
  const [purpose, setPurpose] = useState("");

  const handleSelect = (event) => {
    setPurpose(event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(itinerarySchema),
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        margin: "0 auto",
        padding: 3,
        border: "1px solid #ccc",
        borderRadius: "8px",
        alignItems: "flex-start",
      }}
    >
      <Box container spacing={3}>
        {/* Destination Field */}
        <Box item xs={12}>
          <label
            htmlFor="IWanttoGoto"
            style={{
              marginRight: "350px",

              marginBottom: "12px",
            }}
          >
            I Want to Go to*
          </label>
          <TextField
            id="outlined-required"
            fullWidth
            {...register("IWanttoGoto")}
            error={!!errors.IWanttoGoto}
            helperText={errors.IWanttoGoto?.message}
            sx={{
              m: 1,
              borderRadius: "8px", // Adding border-radius for all text fields
              "& .MuiInputBase-root": { height: "35px" },
            }}
          />
        </Box>
        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <label
            htmlFor="From"
            style={{
              marginRight: "450px",
            }}
          >
            From
          </label>
          <TextField
            id="outlined-required"
            fullWidth
            {...register("From")}
            error={!!errors.From}
            helperText={errors.From?.message}
            sx={{
              m: 1,
              borderRadius: "8px", // Adding border-radius for all text fields
              "& .MuiInputBase-root": { height: "35px" },
            }}
          />
        </Box>
        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <label
            htmlFor="Date"
            style={{ marginRight: "410px", marginBottom: "8px" }}
          >
            On Date
          </label>
          <TextField
            type="date"
            fullWidth
            {...register("date")}
            error={!!errors.date}
            helperText={errors.date?.message}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              m: 1,
              "& .MuiInputBase-root": {
                borderRadius: "8px",
                height: "35px",
              },
            }}
          />
        </Box>
        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <label
            htmlFor="ForNumberofDays"
            style={{ marginRight: "350px", marginBottom: "8px" }}
          >
            For Number of Days
          </label>
          <TextField
            fullWidth
            required
            id="outlined-required"
            defaultValue="0"
            type="number"
            {...register("ForNumberofDays")}
            error={!!errors.ForNumberofDays}
            helperText={errors.ForNumberofDays?.message}
            sx={{
              m: 1,
              borderRadius: "8px", // Adding border-radius for all text fields
              "& .MuiInputBase-root": {
                height: "35px", // Custom height to further reduce the size
              },
            }}
          />
        </Box>
        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <label
            htmlFor="PreferredModeofTravel"
            style={{ marginRight: "300px", marginBottom: "8px" }}
          >
            Preferred Mode of Travel
          </label>
          <FormControl
            sx={{
              m: 1,
              width: "100%",
              borderRadius: "8px",
              "& .MuiInputBase-root": { height: "35px" },
            }}
          >
            <Select
              displayEmpty
              {...register("PreferredModeofTravel")}
              id="outlined-required"
              labelId="travelMode-label"
              value={mode}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Train">Train</MenuItem>
              <MenuItem value="Flight">Flight</MenuItem>
              <MenuItem value="Bus">Bus</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <label
            htmlFor="NumberOfPeople"
            style={{ marginRight: "200px", marginBottom: "8px", flexShrink: 0 }}
          >
            Number Of People Who are Travelling
          </label>
          <TextField
            fullWidth
            required
            id="outlined-required"
            defaultValue="1"
            type="number"
            {...register("numberOfPeople")}
            error={!!errors.numberOfPeople}
            helperText={
              errors.numberOfPeople ? errors.numberOfPeople.message : ""
            }
            sx={{
              m: 1,
              borderRadius: "8px", // Adding border-radius for all text fields
              "& .MuiInputBase-root": {
                height: "35px", // Custom height to further reduce the size
              },
            }}
          />
        </Box>
        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <label
            htmlFor="WhatsAppNumber"
            style={{ marginRight: "300px", marginBottom: "10px" }}
          >
            WhatsApp Number
          </label>
          <TextField
            fullWidth
            placeholder="Enter WhatsApp Number"
            {...register("WhatsAppNumber")}
            error={!!errors.WhatsAppNumber}
            helperText={errors.WhatsAppNumber?.message}
            sx={{
              m: 1,
              borderRadius: "8px",
              "& .MuiInputBase-root": { height: "35px" },
            }}
          />
        </Box>
        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ marginTop: 2, borderRadius: "5px" }}
          >
            Tell us more
          </Button>
        </Box>
        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <label
            htmlFor="Purpose"
            style={{ marginRight: "400px", marginBottom: "8px" }}
          >
            Purpose
          </label>
          <FormControl
            sx={{
              m: 1,
              width: "100%",
              borderRadius: "8px",
              "& .MuiInputBase-root": { height: "35px" },
            }}
          >
            <Select
              displayEmpty
              {...register("Purpose")}
              labelId="travelMode-label"
              value={purpose}
              onChange={handleSelect}
              error={!!errors.Purpose}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Vacation">Vacation</MenuItem>
              <MenuItem value="Wedding">Wedding</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            {errors.Purpose && (
              <FormHelperText error>{errors.Purpose?.message}</FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <label
            htmlFor="otherDetails"
            style={{ marginRight: "400px", marginBottom: "8px" }}
          >
            Other Details
          </label>
          <TextField
            label=""
            fullWidth
            multiline
            rows={4}
            {...register("otherDetails")}
            error={!!errors.otherDetails}
            helperText={errors.otherDetails?.message}
            sx={{
              m: 1,
              borderRadius: "8px",
              "& .MuiInputBase-root": {
                borderRadius: "8px",
                height: "90px",
              },
            }}
          />
        </Box>
        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <label
            htmlFor="EmailID"
            style={{ marginRight: "400px", marginBottom: "8px" }}
          >
            Email ID
          </label>
          <TextField
            fullWidth
            placeholder="Enter Email ID"
            {...register("EmailID")}
            error={!!errors.EmailID}
            helperText={errors.EmailID?.message}
            sx={{
              borderRadius: "8px",
              "& .MuiInputBase-root": { height: "35px" },
            }}
          />
        </Box>

        <Box item xs={12} sx={{ marginTop: "5px" }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ marginTop: 2, borderRadius: "5px" }}
          >
            Get a Personal Itinerary on WhatsApp
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Itinerary;
